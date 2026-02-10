// scene.js — Three.js scene creation, meshes, star field, shader, post-processing

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

export function createScene(COLORS, PHYS, opts = {}) {
    // --- Scene, Camera, Renderers ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.012);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 30, 70);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const pixelCap = (opts.pixelCap !== undefined) ? opts.pixelCap : 2;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, pixelCap));
    document.body.appendChild(renderer.domElement);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0px';
    labelRenderer.domElement.style.pointerEvents = 'none';
    document.body.appendChild(labelRenderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // --- Star Field ---
    const starGeo = new THREE.BufferGeometry();
    const starCount = 4000;
    const starPos = new Float32Array(starCount * 3);
    const starCol = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
        starPos[i * 3] = (Math.random() - 0.5) * 400;
        starPos[i * 3 + 1] = (Math.random() - 0.5) * 400;
        starPos[i * 3 + 2] = (Math.random() - 0.5) * 400;
        const c = new THREE.Color();
        Math.random() > 0.8 ? c.setHex(0xFFBF00) : (Math.random() > 0.8 ? c.setHex(0x00FFFF) : c.setHex(0x555555));
        starCol[i * 3] = c.r; starCol[i * 3 + 1] = c.g; starCol[i * 3 + 2] = c.b;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starCol, 3));
    const starMesh = new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 0.3, vertexColors: true, transparent: true, opacity: 0.8 }));
    scene.add(starMesh);

    // --- Shader: Sacred Heart (Molecular Cloud) ---
    const desireMaterial = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uDesirePulse: { value: 0 }
        },
        vertexShader: `
            uniform float uTime;
            varying float vIntensity;
            void main() {
                vec3 pos = position;
                float wave = sin(pos.x * 2.0 + uTime * 0.8) * cos(pos.y * 2.0 + uTime * 0.5) * 0.3;
                pos += normal * wave;
                vIntensity = 0.5 + 0.5 * sin(length(position) * 3.0 - uTime);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                gl_PointSize = 2.0 + vIntensity * 2.0;
            }
        `,
        fragmentShader: `
            uniform float uDesirePulse;
            varying float vIntensity;
            void main() {
                float dist = length(gl_PointCoord - vec2(0.5));
                if(dist > 0.5) discard;
                vec3 amber = vec3(1.0, 0.75, 0.0);
                vec3 magenta = vec3(1.0, 0.0, 1.0);
                vec3 color = mix(amber, magenta, uDesirePulse * vIntensity);
                float alpha = (1.0 - dist * 2.0) * (0.4 + vIntensity * 0.6);
                gl_FragColor = vec4(color, alpha);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    // --- Sun Group ---
    const sunGroup = new THREE.Group();
    sunGroup.position.set(0, 0, 0);

    const molGeo = new THREE.BufferGeometry();
    const molPointsCount = 8000;
    const molPos = new Float32Array(molPointsCount * 3);
    for (let i = 0; i < molPointsCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 3 * (0.5 + Math.random() * 0.5);
        molPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        molPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        molPos[i * 3 + 2] = r * Math.cos(phi);
    }
    molGeo.setAttribute('position', new THREE.BufferAttribute(molPos, 3));
    molGeo.computeVertexNormals();
    const molMesh = new THREE.Points(molGeo, desireMaterial);
    sunGroup.add(molMesh);

    const sunRing = new THREE.Mesh(new THREE.TorusGeometry(4.0, 0.1, 16, 100), new THREE.MeshBasicMaterial({ color: COLORS.SUN, wireframe: true, transparent: true, opacity: 0.3 }));
    const sunHit = new THREE.Mesh(new THREE.SphereGeometry(4.5, 16, 16), new THREE.MeshBasicMaterial({ visible: false }));
    sunGroup.add(sunRing);
    sunGroup.add(sunHit);

    const sunLabelDiv = document.createElement('div');
    sunLabelDiv.className = 'node-label label-sun';
    sunLabelDiv.textContent = 'RAY SWAN';
    const sunLabelObj = new CSS2DObject(sunLabelDiv);
    sunLabelObj.position.set(0, 4.2, 0);
    sunGroup.add(sunLabelObj);

    scene.add(sunGroup);

    // --- Shared Geometries + Glass Materials ---
    const planetGeo = new THREE.IcosahedronGeometry(1, 1);
    const planetWire = new THREE.WireframeGeometry(planetGeo);
    const facetGeo = new THREE.OctahedronGeometry(1, 0);
    const facetWire = new THREE.WireframeGeometry(facetGeo);

    const glassVert = `
        varying vec3 vNormal;
        varying vec3 vViewDir;
        void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
            vViewDir = normalize(-mvPos.xyz);
            gl_Position = projectionMatrix * mvPos;
        }
    `;
    const glassFrag = `
        uniform vec3 uColor;
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vViewDir;
        void main() {
            float fresnel = 1.0 - abs(dot(vNormal, vViewDir));
            fresnel = pow(fresnel, 2.5);
            float shimmer = 0.9 + 0.1 * sin(uTime * 2.0 + vNormal.x * 5.0 + vNormal.z * 3.0);
            vec3 color = uColor * (0.3 + fresnel * 2.0) * shimmer;
            float alpha = 0.05 + fresnel * 0.6;
            gl_FragColor = vec4(color, alpha);
        }
    `;
    const planetGlassMat = new THREE.ShaderMaterial({
        uniforms: { uColor: { value: new THREE.Color(0x00FFFF) }, uTime: { value: 0 } },
        vertexShader: glassVert, fragmentShader: glassFrag,
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide
    });
    const facetGlassMat = new THREE.ShaderMaterial({
        uniforms: { uColor: { value: new THREE.Color(0xFF00FF) }, uTime: { value: 0 } },
        vertexShader: glassVert, fragmentShader: glassFrag,
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide
    });

    // --- Post Processing ---
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomScale = (opts.bloomScale !== undefined) ? opts.bloomScale : 1;
    const bloomRes = new THREE.Vector2(Math.max(1, Math.floor(window.innerWidth * bloomScale)), Math.max(1, Math.floor(window.innerHeight * bloomScale)));
    const bloom = new UnrealBloomPass(bloomRes, PHYS.bloomStrength, 0.4, 0.1);
    composer.addPass(bloom);

    return {
        scene, camera, renderer, labelRenderer, controls,
        sunGroup, sunHit, desireMaterial,
        planetGlassMat, facetGlassMat, composer, bloom,
        shared: { planetGeo, facetGeo, planetWire, facetWire, planetGlassMat, facetGlassMat }
    };
}

export function createDynamicContent(scene, nodes, links, COLORS, opts, shared) {
    const { planetGeo, facetGeo, planetWire, facetWire } = shared;
    const planetGlassMat = shared.planetGlassMat;
    const facetGlassMat = shared.facetGlassMat;

    nodes.forEach(n => {
        if (n.type === 'sun') return;

        const wire = n.type === 'planet' ? planetWire : facetWire;
        const baseColor = new THREE.Color(n.type === 'planet' ? COLORS.PLANET : COLORS.FACET).multiplyScalar(2.5);
        const mat = new THREE.LineBasicMaterial({
            color: baseColor, transparent: true, opacity: 0.9
        });
        const mesh = new THREE.LineSegments(wire, mat);
        mesh.scale.setScalar(n.radius);
        n._defaultWireColor = baseColor.clone();

        // Glass body
        const glassBody = new THREE.Mesh(
            n.type === 'planet' ? planetGeo : facetGeo,
            n.type === 'planet' ? planetGlassMat : facetGlassMat
        );
        mesh.add(glassBody);
        n.glassBody = glassBody;

        // Hitbox
        let hitMesh;
        if (opts.shareHitbox) {
            if (!scene.userData._sharedHitGeo) scene.userData._sharedHitGeo = new THREE.SphereGeometry(1, 8, 8);
            const hitMat = new THREE.MeshBasicMaterial({ visible: false });
            hitMesh = new THREE.Mesh(scene.userData._sharedHitGeo, hitMat);
            hitMesh.scale.setScalar(n.radius);
        } else {
            const hitGeo = new THREE.SphereGeometry(n.radius, 8, 8);
            const hitMat = new THREE.MeshBasicMaterial({ visible: false });
            hitMesh = new THREE.Mesh(hitGeo, hitMat);
        }
        hitMesh.userData = { node: n };
        mesh.add(hitMesh);
        mesh.userData = { node: n };

        // Label
        const div = document.createElement('div');
        div.className = 'node-label';
        if (n.type === 'facet') div.classList.add('label-facet');
        div.textContent = n.label.toUpperCase();
        const label = new CSS2DObject(div);
        label.position.set(0, n.radius + 0.1, 0);
        label.visible = n.type === 'planet';

        mesh.add(label);
        n.labelObj = label;
        n.mesh = mesh;
        n.hitMesh = hitMesh;
        scene.add(mesh);
    });

    // --- Link Lines (energy-pulse shader) ---
    const linesGeo = new THREE.BufferGeometry();
    const linesPos = new Float32Array(links.length * 6);
    linesGeo.setAttribute('position', new THREE.BufferAttribute(linesPos, 3));

    const linesMaterial = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 }
        },
        vertexShader: `
            varying float vDist;
            void main() {
                vDist = length(position);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            varying float vDist;
            void main() {
                // Traveling pulse that moves outward from the sun
                float wave = fract(vDist * 0.07 - uTime * 0.35);
                float pulse = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.08, 0.35, wave));

                // Energy dissipates with distance
                float falloff = 1.0 / (1.0 + vDist * 0.025);
                pulse *= falloff;

                // Sun palette: amber ↔ magenta
                vec3 amber   = vec3(1.0, 0.75, 0.0);
                vec3 magenta = vec3(1.0, 0.0, 1.0);
                vec3 pulseColor = mix(amber, magenta, sin(uTime * 0.3) * 0.5 + 0.5);

                vec3 baseColor = vec3(0.18, 0.18, 0.18);
                vec3 color = mix(baseColor, pulseColor, pulse);
                float alpha = 0.04 + pulse * 0.45;

                gl_FragColor = vec4(color, alpha);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const linesMesh = new THREE.LineSegments(linesGeo, linesMaterial);
    scene.add(linesMesh);

    return { linesMesh, linesMaterial };
}

export function removeDynamicContent(scene, nodes, linesMesh) {
    nodes.forEach(n => {
        if (n.type === 'sun') return;
        if (n.mesh) {
            // Remove CSS2DObject label and its DOM element
            if (n.labelObj) {
                n.mesh.remove(n.labelObj);
                if (n.labelObj.element && n.labelObj.element.parentNode) {
                    n.labelObj.element.parentNode.removeChild(n.labelObj.element);
                }
                n.labelObj = null;
            }
            scene.remove(n.mesh);
            if (n.mesh.material) n.mesh.material.dispose();
            if (n.hitMesh && n.hitMesh.geometry && !n.hitMesh.geometry._shared) n.hitMesh.geometry.dispose();
        }
    });
    if (linesMesh) {
        scene.remove(linesMesh);
        linesMesh.geometry.dispose();
        linesMesh.material.dispose();
    }
}
