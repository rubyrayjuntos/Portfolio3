// physics.js — Modified Verlet force simulation for the knowledge graph

export function createPhysicsEngine(nodes, links, linesMesh, PHYS, opts = {}) {
    // If worker mode requested, spawn worker and bridge updates to meshes
    if (opts.physicsWorker) {
        // Create worker relative to this module
        const worker = new Worker(new URL('./physics.worker.js', import.meta.url), { type: 'module' });

        // Build lightweight node and link arrays to send to worker
        const nodesData = nodes.map(n => ({ id: n.id, x: n.x, y: n.y, z: n.z, vx: n.vx || 0, vy: n.vy || 0, vz: n.vz || 0, radius: n.radius, type: n.type, isDragging: !!n.isDragging }));
        const nodeIndexMap = new Map(nodes.map((n, i) => [n, i]));
        const linksData = links.map(l => ({ sourceIndex: nodeIndexMap.get(l.source), targetIndex: nodeIndexMap.get(l.target), dist: l.dist, strength: l.strength }));

        worker.postMessage({ type: 'init', nodes: nodesData, links: linksData, PHYS });

        worker.onmessage = (e) => {
            const msg = e.data;
            if (!msg || msg.type !== 'tick') return;
            // Received transferable ArrayBuffers for positions and lines
            const positions = new Float32Array(msg.positions);
            const lines = new Float32Array(msg.lines);

            // Apply positions to node meshes (main thread owns meshes)
            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];
                const x = positions[i * 3];
                const y = positions[i * 3 + 1];
                const z = positions[i * 3 + 2];
                n.x = x; n.y = y; n.z = z;
                if (n.mesh && !n.isDragging) {
                    n.mesh.position.set(x, y, z);
                    if (n.mesh.rotation) n.mesh.rotation.y = (n.mesh.rotation.y || 0) + 0.01;
                }
            }

            // Apply line positions
            const lp = linesMesh.geometry.attributes.position.array;
            lp.set(lines);
            linesMesh.geometry.attributes.position.needsUpdate = true;
        };

        return {
            runPhysics() { /* worker runs asynchronously */ },
            destroy() { worker.postMessage({ type: 'stop' }); worker.terminate(); }
        };
    }

    // Fallback: run physics on main thread (original implementation)
    return {
        runPhysics() {
            // Repulsion between all node pairs
            nodes.forEach((n1, i) => {
                nodes.forEach((n2, j) => {
                    if (i <= j) return;
                    const dx = n1.x - n2.x, dy = n1.y - n2.y, dz = n1.z - n2.z;
                    let d2 = dx * dx + dy * dy + dz * dz;
                    if (d2 < 0.1) d2 = 0.1;
                    const f = PHYS.repulsion / Math.sqrt(d2);
                    const dist = Math.sqrt(d2);
                    if (n1.type !== 'sun') { n1.vx += (dx / dist) * f * 0.01; n1.vy += (dy / dist) * f * 0.01; n1.vz += (dz / dist) * f * 0.01; }
                    if (n2.type !== 'sun') { n2.vx -= (dx / dist) * f * 0.01; n2.vy -= (dy / dist) * f * 0.01; n2.vz -= (dz / dist) * f * 0.01; }
                });
            });

            // Link tension
            links.forEach(l => {
                const dx = l.target.x - l.source.x, dy = l.target.y - l.source.y, dz = l.target.z - l.source.z;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                const f = (dist - l.dist) * (PHYS.tension * l.strength * 0.05);
                if (l.source.type !== 'sun') { l.source.vx += (dx / dist) * f; l.source.vy += (dy / dist) * f; l.source.vz += (dz / dist) * f; }
                if (l.target.type !== 'sun') { l.target.vx -= (dx / dist) * f; l.target.vy -= (dy / dist) * f; l.target.vz -= (dz / dist) * f; }
            });

            // Solar dynamics (gravity for facets, repulsion for planets)
            nodes.forEach(n => {
                if (n.type === 'sun') return;
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
                    n.mesh.position.set(n.x, n.y, n.z);
                    n.mesh.rotation.y += 0.01;
                }
            });

            // Update link line positions
            const lp = linesMesh.geometry.attributes.position.array;
            links.forEach((l, i) => {
                const idx = i * 6;
                lp[idx] = l.source.x; lp[idx + 1] = l.source.y; lp[idx + 2] = l.source.z;
                lp[idx + 3] = l.target.x; lp[idx + 4] = l.target.y; lp[idx + 5] = l.target.z;
            });
            linesMesh.geometry.attributes.position.needsUpdate = true;
        },
        destroy() { /* main-thread mode: no-op */ }
    };
}
