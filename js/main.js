// main.js — Orchestrator: loads data, builds graph, wires modules, runs animation

import * as THREE from 'three';
import { createScene, createDynamicContent, removeDynamicContent } from './scene.js';
import { createPhysicsEngine } from './physics.js';
import { setupInteraction } from './interaction.js';
import { showPreview, closePreview, openModalFromPreview, closeModal, switchTab, openAboutModal, closeAboutModal, openContactModal, closeContactModal, copyToClipboard } from './modal.js';
import { initTutorial, resetTutorial } from './tutorial.js';
import { startMusic, toggleMute, isMutedState } from './music.js';

// --- Constants ---
const COLORS = {
    SUN: 0xFFBF00,
    PLANET: 0x00FFFF,
    FACET: 0xFF00FF,
    LINK: 0x444444
};

const PHYS = {
    tension: 0.75,
    repulsion: 100,
    sunGravity: 0.09,
    sunRepel: 60,
    friction: 0.9,
    bloomStrength: 0.4
};

// --- Load Data ---
const data = await fetch('./data/projects.json').then(r => r.json());
const PROJECTS_DATA = data.projects;

// --- Graph State ---
const nodes = [];
const links = [];
const facetsMap = new Map();
const activeCategories = new Set(['code', 'art', 'writing']);

function buildGraph() {
    nodes.length = 0;
    links.length = 0;
    facetsMap.clear();

    const sunNode = { id: 'SUN', type: 'sun', x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, radius: 4, label: "Ray Swan" };
    sunNode.mesh = sunGroup;
    nodes.push(sunNode);

    PROJECTS_DATA.forEach(p => {
        if (!activeCategories.has(p.medium)) return;
        const planet = {
            id: `P-${p.id}`, label: p.title, type: 'planet', data: p,
            x: (Math.random() - 0.5) * 60, y: (Math.random() - 0.5) * 60, z: (Math.random() - 0.5) * 60,
            vx: 0, vy: 0, vz: 0, radius: 3
        };
        nodes.push(planet);

        const tags = [...(p.genre || []), ...(p.tech || []), ...(typeof p.mood === 'string' ? [p.mood] : (p.mood || []))];
        tags.forEach(f => {
            if (!f) return;
            if (!facetsMap.has(f)) {
                const facet = {
                    id: `F-${f}`, label: f, type: 'facet',
                    x: (Math.random() - 0.5) * 40, y: (Math.random() - 0.5) * 40, z: (Math.random() - 0.5) * 40,
                    vx: 0, vy: 0, vz: 0, radius: 1.6
                };
                nodes.push(facet);
                facetsMap.set(f, facet);
                links.push({ source: facet, target: nodes[0], dist: 15, strength: 0.2 });
            }
            links.push({ source: planet, target: facetsMap.get(f), dist: 8, strength: 1.0 });
        });
    });
}

// --- Parse performance options from URL params ---
const urlParams = new URLSearchParams(window.location.search);
const OPTS = {
    pixelCap: urlParams.has('pixelCap') ? parseFloat(urlParams.get('pixelCap')) : 2,
    bloomScale: urlParams.has('bloomScale') ? parseFloat(urlParams.get('bloomScale')) : 1,
    shareHitbox: urlParams.get('shareHitbox') === '1',
    physicsWorker: urlParams.get('physicsWorker') === '1'
};

// --- Create Static Scene (once) ---
const { scene, camera, renderer, labelRenderer, controls, sunGroup, sunHit, desireMaterial, planetGlassMat, facetGlassMat, composer, bloom, shared } = createScene(COLORS, PHYS, OPTS);

// --- Mutable references (rebuilt on category toggle) ---
let linesMesh, linesMaterial, physicsHandle, teardownInteraction;

function rebuildGraph() {
    // Tear down old state
    if (teardownInteraction) teardownInteraction();
    if (physicsHandle) physicsHandle.destroy();
    removeDynamicContent(scene, nodes, linesMesh);

    // Rebuild graph data
    buildGraph();

    // Update sun hitbox reference
    sunHit.userData = { node: nodes[0] };

    // Create new dynamic content
    const dynamic = createDynamicContent(scene, nodes, links, COLORS, OPTS, shared);
    linesMesh = dynamic.linesMesh;
    linesMaterial = dynamic.linesMaterial;

    // New physics + interaction
    physicsHandle = createPhysicsEngine(nodes, links, linesMesh, PHYS, OPTS);
    teardownInteraction = setupInteraction({ nodes, links, camera, controls, linesMesh, COLORS, showPreviewFn: showPreview });

    // Update HUD
    document.getElementById('node-count').innerText = nodes.length;
}

// --- Initial Build ---
rebuildGraph();

// --- Category Toggle Handlers ---
document.querySelectorAll('.cat-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const cat = btn.dataset.category;
        if (activeCategories.has(cat)) {
            activeCategories.delete(cat);
            btn.classList.remove('active');
        } else {
            activeCategories.add(cat);
            btn.classList.add('active');
        }
        rebuildGraph();
    });
});

// --- Window Globals for Inline HTML Handlers ---
window.closePreview = closePreview;
window.openModalFromPreview = openModalFromPreview;
window.closeModal = closeModal;
window.switchTab = switchTab;
window.showPreview = showPreview;

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (document.getElementById('project-modal').classList.contains('active')) closeModal();
        else closePreview();
    }
});

// --- Animation Loop ---
const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    physicsHandle.runPhysics();

    desireMaterial.uniforms.uTime.value = t;
    desireMaterial.uniforms.uDesirePulse.value = Math.abs(Math.sin(t * 0.4));
    linesMaterial.uniforms.uTime.value = t;
    planetGlassMat.uniforms.uTime.value = t;
    facetGlassMat.uniforms.uTime.value = t;

    sunGroup.children[1].rotation.x = t * 0.1;
    sunGroup.children[1].rotation.y = t * 0.05;

    controls.update();
    composer.render();
    labelRenderer.render(scene, camera);
}

// --- Music Controls ---
let musicStarted = false;
function startMusicOnce() {
    if (musicStarted) return;
    musicStarted = true;
    startMusic();
    updateMusicButton();
}

function updateMusicButton() {
    const btn = document.getElementById('music-toggle');
    const label = btn.querySelector('.music-label');
    const muted = isMutedState();
    btn.classList.toggle('muted', muted);
    label.textContent = muted ? 'SOUND OFF' : 'SOUND ON';
}

window.toggleMusic = function() {
    if (!musicStarted) {
        startMusicOnce();
        return;
    }
    toggleMute();
    updateMusicButton();
};

// --- Boot Sequence ---
window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('boot-1').style.opacity = 1, 500);
    setTimeout(() => document.getElementById('boot-2').style.opacity = 1, 1200);
    setTimeout(() => document.getElementById('boot-3').style.opacity = 1, 1900);
    setTimeout(() => document.getElementById('boot-4').style.opacity = 1, 2600);
    setTimeout(() => {
        const s = document.getElementById('boot-screen');
        s.style.opacity = 0;
        s.style.visibility = 'hidden';
    }, 3500);
    // Start tutorial after boot completes (for first-time visitors)
    setTimeout(() => initTutorial(nodes), 4000);
    // Start music after boot (requires user interaction due to autoplay policy)
    setTimeout(() => {
        document.body.addEventListener('click', startMusicOnce, { once: true });
        document.body.addEventListener('keydown', startMusicOnce, { once: true });
    }, 3500);
    animate();
});

// --- Resize Handler ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
    if (bloom && typeof bloom.setSize === 'function') {
        bloom.setSize(Math.max(1, Math.floor(window.innerWidth * (OPTS.bloomScale || 1))), Math.max(1, Math.floor(window.innerHeight * (OPTS.bloomScale || 1))));
    }
});

// --- Global Functions for HTML onclick handlers ---
window.openAboutModal = openAboutModal;
window.closeAboutModal = closeAboutModal;
window.openContactModal = openContactModal;
window.closeContactModal = closeContactModal;
window.copyToClipboard = copyToClipboard;
window.showPreview = showPreview;
window.closePreview = closePreview;
window.openModalFromPreview = openModalFromPreview;
window.closeModal = closeModal;
window.switchTab = switchTab;
window.resetTutorial = resetTutorial; // Console utility: resetTutorial() to replay tutorial
