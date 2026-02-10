// physics.worker.js — Web Worker for physics simulation

let nodes = [];
let links = [];
let PHYS = {};
let intervalId = null;

self.onmessage = (e) => {
    const msg = e.data;
    if (!msg || !msg.type) return;
    if (msg.type === 'init') {
        nodes = msg.nodes; // array of simple objects
        links = msg.links; // array of { sourceIndex, targetIndex, dist, strength }
        PHYS = msg.PHYS || {};
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(step, 16); // ~60Hz
    } else if (msg.type === 'stop') {
        if (intervalId) { clearInterval(intervalId); intervalId = null; }
    } else if (msg.type === 'setPHYS') {
        PHYS = msg.PHYS;
    }
};

function step() {
    const nCount = nodes.length;

    // Repulsion between all node pairs
    for (let i = 0; i < nCount; i++) {
        const n1 = nodes[i];
        for (let j = i + 1; j < nCount; j++) {
            const n2 = nodes[j];
            const dx = n1.x - n2.x, dy = n1.y - n2.y, dz = n1.z - n2.z;
            let d2 = dx * dx + dy * dy + dz * dz;
            if (d2 < 0.1) d2 = 0.1;
            const f = PHYS.repulsion / Math.sqrt(d2);
            const dist = Math.sqrt(d2);
            if (n1.type !== 'sun') { n1.vx += (dx / dist) * f * 0.01; n1.vy += (dy / dist) * f * 0.01; n1.vz += (dz / dist) * f * 0.01; }
            if (n2.type !== 'sun') { n2.vx -= (dx / dist) * f * 0.01; n2.vy -= (dy / dist) * f * 0.01; n2.vz -= (dz / dist) * f * 0.01; }
        }
    }

    // Link tension
    for (let li = 0; li < links.length; li++) {
        const l = links[li];
        const s = nodes[l.sourceIndex];
        const t = nodes[l.targetIndex];
        const dx = t.x - s.x, dy = t.y - s.y, dz = t.z - s.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
        const f = (dist - l.dist) * (PHYS.tension * l.strength * 0.05);
        if (s.type !== 'sun') { s.vx += (dx / dist) * f; s.vy += (dy / dist) * f; s.vz += (dz / dist) * f; }
        if (t.type !== 'sun') { t.vx -= (dx / dist) * f; t.vy -= (dy / dist) * f; t.vz -= (dz / dist) * f; }
    }

    // Solar dynamics and integrate
    for (let i = 0; i < nCount; i++) {
        const n = nodes[i];
        if (n.type === 'sun') continue;
        const d2 = n.x * n.x + n.y * n.y + n.z * n.z;
        const d = Math.sqrt(d2);
        const invD = d > 1e-4 ? 1 / d : 0;
        if (n.type === 'facet') {
            const f = PHYS.sunGravity * d * 0.05;
            if (invD) {
                n.vx -= (n.x * invD) * f; n.vy -= (n.y * invD) * f; n.vz -= (n.z * invD) * f;
            } else {
                n.vx += (Math.random() - 0.5) * 0.001;
            }
        } else if (n.type === 'planet') {
            const f = PHYS.sunRepel / (d2 + 1);
            if (invD) {
                n.vx += (n.x * invD) * f; n.vy += (n.y * invD) * f; n.vz += (n.z * invD) * f;
            }
        }

        if (!n.isDragging) {
            n.vx *= PHYS.friction; n.vy *= PHYS.friction; n.vz *= PHYS.friction;
            n.x += n.vx; n.y += n.vy; n.z += n.vz;
            n.rotationY = (n.rotationY || 0) + 0.01;
        }
    }

    // Build transferable buffers for positions and lines
    const positions = new Float32Array(nCount * 3);
    for (let i = 0; i < nCount; i++) {
        positions[i * 3] = nodes[i].x;
        positions[i * 3 + 1] = nodes[i].y;
        positions[i * 3 + 2] = nodes[i].z;
    }

    const lines = new Float32Array(links.length * 6);
    for (let i = 0; i < links.length; i++) {
        const l = links[i];
        const s = nodes[l.sourceIndex];
        const t = nodes[l.targetIndex];
        const idx = i * 6;
        lines[idx] = s.x; lines[idx + 1] = s.y; lines[idx + 2] = s.z;
        lines[idx + 3] = t.x; lines[idx + 4] = t.y; lines[idx + 5] = t.z;
    }

    // Transfer the underlying ArrayBuffer for minimal copy
    self.postMessage({ type: 'tick', positions: positions.buffer, lines: lines.buffer }, [positions.buffer, lines.buffer]);
}
