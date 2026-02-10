// interaction.js — Raycasting, drag, hover, and node highlighting

import * as THREE from 'three';

export function setupInteraction({ nodes, links, camera, controls, linesMesh, COLORS, showPreviewFn }) {
    const controller = new AbortController();
    const { signal } = controller;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let hoveredNode = null;
    let draggedNode = null;
    const dragPlane = new THREE.Plane();
    const normal = new THREE.Vector3();

    // Build flat list of interactive objects (hitboxes)
    const interactiveObjects = [];
    nodes.forEach(n => {
        if (n.type === 'sun') {
            const hit = n.mesh.children.find(c => c.userData && c.userData.node);
            if (hit) interactiveObjects.push(hit);
        } else if (n.hitMesh) {
            interactiveObjects.push(n.hitMesh);
        }
    });

    window.addEventListener('mousemove', e => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        if (draggedNode) {
            const target = new THREE.Vector3();
            raycaster.ray.intersectPlane(dragPlane, target);
            draggedNode.x = target.x; draggedNode.y = target.y; draggedNode.z = target.z;
            draggedNode.vx = 0; draggedNode.vy = 0; draggedNode.vz = 0;
            draggedNode.mesh.position.copy(target);
            return;
        }

        const hits = raycaster.intersectObjects(interactiveObjects);
        if (hits.length > 0) {
            const node = hits[0].object.userData.node;
            if (node && hoveredNode !== node) {
                hoveredNode = node;
                document.body.style.cursor = 'pointer';
                showInfo(node);
                highlightConnections(node);
            }
        } else if (hoveredNode) {
            hoveredNode = null;
            document.body.style.cursor = 'default';
            hideInfo();
            resetHighlights();
        }
    }, { signal });

    let mouseDownPos = { x: 0, y: 0 };
    window.addEventListener('mousedown', (e) => {
        mouseDownPos = { x: e.clientX, y: e.clientY };
        if (hoveredNode && hoveredNode.type !== 'sun') {
            draggedNode = hoveredNode;
            draggedNode.isDragging = true;
            controls.enabled = false;
            normal.copy(camera.position).sub(draggedNode.mesh.position).normalize();
            dragPlane.setFromNormalAndCoplanarPoint(normal, draggedNode.mesh.position);
        }
    }, { signal });

    window.addEventListener('mouseup', (e) => {
        const dx = e.clientX - mouseDownPos.x;
        const dy = e.clientY - mouseDownPos.y;
        const wasDrag = Math.sqrt(dx * dx + dy * dy) > 5;
        if (draggedNode) {
            draggedNode.isDragging = false;
            if (!wasDrag && draggedNode.type === 'planet' && draggedNode.data) {
                showPreviewFn(draggedNode.data);
            }
            draggedNode = null;
            controls.enabled = true;
        } else if (!wasDrag && hoveredNode && hoveredNode.type === 'planet' && hoveredNode.data) {
            showPreviewFn(hoveredNode.data);
        }
    }, { signal });

    function showInfo(n) {
        if (!n.data && n.type !== 'sun' && n.type !== 'facet') return;
        const card = document.getElementById('info-card');
        const title = document.getElementById('card-title');
        const desc = document.getElementById('card-desc');
        const tags = document.getElementById('card-tags');

        tags.textContent = '';

        if (n.type === 'sun') {
            title.innerText = "Ray Swan";
            desc.innerText = "Centro de Gravedad. Origen de la Red.";
            card.style.borderLeftColor = "#FFBF00";
        } else if (n.type === 'planet') {
            title.innerText = n.data.title;
            desc.innerText = n.data.description;
            card.style.borderLeftColor = "#00FFFF";
            [...(n.data.genre || []), ...(n.data.tech || [])].forEach(t => {
                const s = document.createElement('span'); s.className = 'meta-tag'; s.innerText = t;
                tags.appendChild(s);
            });
        } else {
            title.innerText = n.label;
            desc.innerText = "Nexo Conceptual.";
            card.style.borderLeftColor = "#FF00FF";
        }
        card.style.display = 'block';
    }

    function hideInfo() { document.getElementById('info-card').style.display = 'none'; }

    function setWireState(n, active) {
        const isLine = obj => !!(obj && (obj.isLineSegments || obj.type === 'LineSegments'));
        const wire = n.mesh && isLine(n.mesh) ? n.mesh : n.mesh && n.mesh.children.find(c => isLine(c));
        if (wire) {
            wire.material.opacity = active ? 1.0 : 0.06;
            wire.material.color.setRGB(...(active ? [2.5, 2.5, 2.5] : [0.3, 0.3, 0.3]));
        }
        if (n.glassBody) n.glassBody.visible = active;
        if (n.labelObj) n.labelObj.visible = active;
    }

    function highlightConnections(node) {
        const connected = new Set();
        connected.add(node);
        links.forEach(l => {
            if (l.source === node) connected.add(l.target);
            if (l.target === node) connected.add(l.source);
        });
        nodes.forEach(n => {
            if (n.type === 'sun') return;
            setWireState(n, connected.has(n));
        });
    }

    function resetHighlights() {
        nodes.forEach(n => {
            if (n.type === 'sun') return;
            const isLine = obj => !!(obj && (obj.isLineSegments || obj.type === 'LineSegments'));
            const wire = n.mesh && isLine(n.mesh) ? n.mesh : n.mesh && n.mesh.children.find(c => isLine(c));
            if (wire && n._defaultWireColor) {
                wire.material.opacity = 0.9;
                wire.material.color.copy(n._defaultWireColor);
            }
            if (n.glassBody) n.glassBody.visible = true;
            if (n.labelObj) n.labelObj.visible = n.type === 'planet';
        });
    }

    return () => controller.abort();
}
