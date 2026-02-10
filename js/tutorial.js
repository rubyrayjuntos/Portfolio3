// tutorial.js — First-time user onboarding walkthrough

const TUTORIAL_STEPS = [
    {
        id: 'welcome',
        title: 'WELCOME TO THE KNOWLEDGE GRAPH',
        text: 'This interactive portfolio maps the connections between projects across code, art, and writing. Explore by clicking, dragging, and orbiting.',
        target: null,
        position: 'center'
    },
    {
        id: 'sun',
        title: 'THE CENTER: RAY SWAN',
        text: 'The glowing sun at the center represents Ray Swan — the creative force connecting all projects. Everything orbits around this core.',
        target: 'sun',
        position: 'right'
    },
    {
        id: 'planets',
        title: 'PROJECTS (PLANETS)',
        text: 'The larger cyan shapes are projects. Click one to see details, or drag to reposition it in space.',
        target: 'planet',
        position: 'left'
    },
    {
        id: 'facets',
        title: 'CONNECTIONS (FACETS)',
        text: 'Smaller magenta shapes are facets — shared tags, technologies, and themes that connect projects. Hover to reveal the web of relationships.',
        target: 'facet',
        position: 'right'
    },
    {
        id: 'toggles',
        title: 'FILTER BY CATEGORY',
        text: 'Use these buttons to show or hide projects by type. Toggle CODE, ART, or WRITING to focus your exploration.',
        target: 'toggles',
        position: 'below'
    },
    {
        id: 'navigation',
        title: 'NAVIGATE THE SPACE',
        text: 'Drag the background to orbit around. Scroll to zoom in and out. On mobile, pinch to zoom and swipe to rotate.',
        target: null,
        position: 'center'
    },
    {
        id: 'ready',
        title: 'READY TO EXPLORE',
        text: 'Click ABOUT to learn more, or dive into any project. The knowledge graph awaits.',
        target: 'nav',
        position: 'below'
    }
];

let currentStep = 0;
let tutorialActive = false;
let nodes = [];

export function shouldShowTutorial() {
    return !localStorage.getItem('portfolio_tutorial_complete');
}

export function initTutorial(graphNodes) {
    nodes = graphNodes;
    if (!shouldShowTutorial()) return;

    createTutorialElements();
    tutorialActive = true;
    showStep(0);
}

function createTutorialElements() {
    // Overlay
    const overlay = document.createElement('div');
    overlay.id = 'tutorial-overlay';

    const spotlight = document.createElement('div');
    spotlight.id = 'tutorial-spotlight';
    overlay.appendChild(spotlight);

    const card = document.createElement('div');
    card.id = 'tutorial-card';

    const stepIndicator = document.createElement('div');
    stepIndicator.className = 'tutorial-step-indicator';
    card.appendChild(stepIndicator);

    const title = document.createElement('h3');
    title.id = 'tutorial-title';
    card.appendChild(title);

    const text = document.createElement('p');
    text.id = 'tutorial-text';
    card.appendChild(text);

    const actions = document.createElement('div');
    actions.className = 'tutorial-actions';

    const skipBtn = document.createElement('button');
    skipBtn.id = 'tutorial-skip';
    skipBtn.textContent = 'SKIP';
    actions.appendChild(skipBtn);

    const nextBtn = document.createElement('button');
    nextBtn.id = 'tutorial-next';
    nextBtn.textContent = 'NEXT →';
    actions.appendChild(nextBtn);

    card.appendChild(actions);
    overlay.appendChild(card);
    document.body.appendChild(overlay);

    // Event listeners
    nextBtn.addEventListener('click', nextStep);
    skipBtn.addEventListener('click', completeTutorial);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) nextStep();
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeydown);
}

function handleKeydown(e) {
    if (!tutorialActive) return;
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
        e.preventDefault();
        nextStep();
    } else if (e.key === 'Escape') {
        completeTutorial();
    }
}

function showStep(index) {
    const step = TUTORIAL_STEPS[index];
    const card = document.getElementById('tutorial-card');
    const spotlight = document.getElementById('tutorial-spotlight');
    const overlay = document.getElementById('tutorial-overlay');

    // Update content
    document.getElementById('tutorial-title').textContent = step.title;
    document.getElementById('tutorial-text').textContent = step.text;

    // Update step indicator
    const indicator = document.querySelector('.tutorial-step-indicator');
    indicator.textContent = '';
    TUTORIAL_STEPS.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'step-dot';
        if (i === index) dot.classList.add('active');
        if (i < index) dot.classList.add('complete');
        indicator.appendChild(dot);
    });

    // Update button text on last step
    const nextBtn = document.getElementById('tutorial-next');
    nextBtn.textContent = index === TUTORIAL_STEPS.length - 1 ? 'START EXPLORING →' : 'NEXT →';

    // Position spotlight and card
    const targetRect = getTargetRect(step.target);

    if (targetRect) {
        spotlight.style.display = 'block';
        spotlight.style.left = (targetRect.x - 20) + 'px';
        spotlight.style.top = (targetRect.y - 20) + 'px';
        spotlight.style.width = (targetRect.width + 40) + 'px';
        spotlight.style.height = (targetRect.height + 40) + 'px';

        positionCard(card, targetRect, step.position);
    } else {
        spotlight.style.display = 'none';
        card.style.left = '50%';
        card.style.top = '50%';
        card.style.transform = 'translate(-50%, -50%)';
    }

    // Animate in
    overlay.classList.add('active');
    card.classList.add('visible');
}

function getTargetRect(target) {
    if (!target) return null;

    if (target === 'sun') {
        const sunNode = nodes.find(n => n.type === 'sun');
        if (sunNode && sunNode.mesh) {
            return get3DElementScreenPosition(sunNode.mesh.position, 80);
        }
    } else if (target === 'planet') {
        const planet = nodes.find(n => n.type === 'planet');
        if (planet && planet.mesh) {
            return get3DElementScreenPosition(planet.mesh.position, 60);
        }
    } else if (target === 'facet') {
        const facet = nodes.find(n => n.type === 'facet');
        if (facet && facet.mesh) {
            return get3DElementScreenPosition(facet.mesh.position, 40);
        }
    } else if (target === 'toggles') {
        const el = document.getElementById('category-toggles');
        if (el) return el.getBoundingClientRect();
    } else if (target === 'nav') {
        const el = document.getElementById('top-nav');
        if (el) return el.getBoundingClientRect();
    }

    return null;
}

function get3DElementScreenPosition(_position, size) {
    // Convert 3D position to screen coordinates
    // For 3D elements, we target approximately where they appear on screen
    // Note: _position could be used with camera projection for precise placement
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    return {
        x: centerX - size/2,
        y: centerY - size/2,
        width: size,
        height: size
    };
}

function positionCard(card, targetRect, position) {
    card.style.transform = 'none';

    const cardWidth = 320;
    const cardHeight = 200;
    const padding = 24;

    let left, top;

    switch (position) {
        case 'right':
            left = targetRect.x + targetRect.width + padding;
            top = targetRect.y + targetRect.height/2 - cardHeight/2;
            break;
        case 'left':
            left = targetRect.x - cardWidth - padding;
            top = targetRect.y + targetRect.height/2 - cardHeight/2;
            break;
        case 'below':
            left = targetRect.x + targetRect.width/2 - cardWidth/2;
            top = targetRect.y + targetRect.height + padding;
            break;
        case 'above':
            left = targetRect.x + targetRect.width/2 - cardWidth/2;
            top = targetRect.y - cardHeight - padding;
            break;
        default:
            left = window.innerWidth/2 - cardWidth/2;
            top = window.innerHeight/2 - cardHeight/2;
    }

    // Keep card on screen
    left = Math.max(padding, Math.min(left, window.innerWidth - cardWidth - padding));
    top = Math.max(padding, Math.min(top, window.innerHeight - cardHeight - padding));

    card.style.left = left + 'px';
    card.style.top = top + 'px';
}

function nextStep() {
    currentStep++;
    if (currentStep >= TUTORIAL_STEPS.length) {
        completeTutorial();
    } else {
        showStep(currentStep);
    }
}

function completeTutorial() {
    localStorage.setItem('portfolio_tutorial_complete', 'true');
    tutorialActive = false;

    const overlay = document.getElementById('tutorial-overlay');
    overlay.classList.remove('active');

    document.removeEventListener('keydown', handleKeydown);

    setTimeout(() => {
        overlay.remove();
    }, 500);
}

// Allow manual reset for testing
export function resetTutorial() {
    localStorage.removeItem('portfolio_tutorial_complete');
}
