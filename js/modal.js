// modal.js — Project preview card and modal rendering
// NOTE: innerHTML usage below renders trusted content from the site's own projects.json data file,
// not user-generated input. This is safe for this portfolio context.

let currentProject = null;

function getAccentColors(medium) {
    if (medium === 'code') return { text: '#d946ef', bg: '#d946ef', border: 'rgba(217,70,239,0.5)' };
    if (medium === 'art') return { text: '#22d3ee', bg: '#22d3ee', border: 'rgba(34,211,238,0.5)' };
    return { text: '#f59e0b', bg: '#f59e0b', border: 'rgba(245,158,11,0.5)' };
}

function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html; // trusted content from own data file
    return tmp.textContent || tmp.innerText || '';
}

export function showPreview(project) {
    currentProject = project;
    const colors = getAccentColors(project.medium);
    const preview = document.getElementById('project-preview');
    preview.querySelector('.preview-inner').style.borderColor = colors.border;

    document.getElementById('preview-img').src = project.imageUrl || '';
    document.getElementById('preview-img').alt = project.title;
    const mediumEl = document.getElementById('preview-medium');
    mediumEl.innerText = project.medium;
    mediumEl.style.color = colors.text;
    document.getElementById('preview-year').innerText = project.year;
    document.getElementById('preview-status').innerText = project.status;
    document.getElementById('preview-title').innerText = project.title;
    document.getElementById('preview-desc').innerText = stripHtml(project.description);

    // Tech tags
    const techContainer = document.getElementById('preview-tech-tags');
    techContainer.innerHTML = ''; // trusted: clearing container
    if (project.tech && project.tech.length > 0) {
        project.tech.slice(0, 4).forEach(t => {
            const span = document.createElement('span');
            span.className = 'preview-tag preview-tag-tech';
            span.innerText = t;
            techContainer.appendChild(span);
        });
    }

    // Genre tags
    const genreContainer = document.getElementById('preview-genre-tags');
    genreContainer.innerHTML = ''; // trusted: clearing container
    if (project.genre && project.genre.length > 0) {
        project.genre.forEach(g => {
            const span = document.createElement('span');
            span.className = 'preview-tag preview-tag-genre';
            span.style.background = colors.bg + '33';
            span.style.color = colors.text;
            span.style.borderColor = colors.text + '4d';
            span.innerText = g;
            genreContainer.appendChild(span);
        });
    }

    // CTA button
    const cta = document.getElementById('preview-cta');
    cta.style.backgroundColor = colors.bg;

    preview.style.display = 'block';
    document.getElementById('info-card').style.display = 'none';
}

export function closePreview() {
    document.getElementById('project-preview').style.display = 'none';
}

export function openModalFromPreview() {
    if (currentProject) {
        closePreview();
        showModal(currentProject);
    }
}

export function showModal(project) {
    currentProject = project;
    const colors = getAccentColors(project.medium);
    const modal = document.getElementById('project-modal');
    modal.querySelector('.modal-inner').style.borderColor = colors.border;

    document.getElementById('modal-hero-img').src = project.imageUrl || '';
    document.getElementById('modal-hero-img').alt = project.title;

    const badge = document.getElementById('modal-badge');
    badge.innerText = project.medium;
    badge.style.backgroundColor = colors.bg;

    document.getElementById('modal-year').innerText = project.year;
    document.getElementById('modal-title').innerText = project.title;

    renderOverviewTab(project, colors);
    renderExperienceTab(project);
    renderProcessTab(project);
    renderConnectionsTab();

    switchTab('overview');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

export function closeModal() {
    document.getElementById('project-modal').classList.remove('active');
    document.body.style.overflow = '';
}

export function switchTab(tabId) {
    document.querySelectorAll('.modal-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === 'tab-' + tabId));
}

// All rendering functions below use innerHTML with trusted data from the site's own projects.json.
// This is a portfolio site rendering its own content — not user-generated input.

function renderOverviewTab(project) {
    const el = document.getElementById('tab-overview');
    let h = '<div class="content-section">';
    h += '<h3 style="font-size:20px;font-weight:700;color:white;margin:0 0 8px">' + project.title + '</h3>';
    h += '<div style="display:flex;gap:16px;font-size:13px;color:rgba(255,255,255,0.7);margin-bottom:16px">';
    h += '<span>' + project.year + '</span><span style="text-transform:capitalize">' + project.status + '</span><span style="text-transform:capitalize">' + project.medium + '</span>';
    h += '</div></div>';
    h += '<div class="content-section"><p style="color:rgba(255,255,255,0.9);line-height:1.6">' + project.description + '</p></div>';
    h += '<div class="content-section"><h4 style="color:#22d3ee">Role</h4><p style="color:rgba(255,255,255,0.8)">' + project.role + '</p></div>';

    if (project.genre && project.genre.length > 0) {
        h += '<div class="content-section"><h4 style="color:#22d3ee">Genre</h4><div class="tag-group">';
        project.genre.forEach(function(g) { h += '<span class="tag-pill tag-fuchsia">' + g + '</span>'; });
        h += '</div></div>';
    }
    if (project.style && project.style.length > 0) {
        h += '<div class="content-section"><h4 style="color:#22d3ee">Style</h4><div class="tag-group">';
        project.style.forEach(function(s) { h += '<span class="tag-pill tag-cyan">' + s + '</span>'; });
        h += '</div></div>';
    }
    if (project.tech && project.tech.length > 0) {
        h += '<div class="content-section"><h4 style="color:#22d3ee">Technologies</h4><div class="tag-group">';
        project.tech.forEach(function(t) { h += '<span class="tag-pill tag-amber">' + t + '</span>'; });
        h += '</div></div>';
    }
    h += '<div class="content-section"><h4 style="color:#22d3ee">Mood</h4><span class="tag-pill tag-white">' + project.mood + '</span></div>';

    if (project.links && Object.keys(project.links).length > 0) {
        h += '<div class="content-section"><h4 style="color:#22d3ee">Links</h4><div class="tag-group">';
        for (var label in project.links) {
            h += '<a href="' + project.links[label] + '" target="_blank" rel="noopener noreferrer" class="link-btn">' + label + '</a>';
        }
        h += '</div></div>';
    }
    el.innerHTML = h; // trusted: own project data
}

function renderExperienceTab(project) {
    var h = '';
    if (project.pitch) h += '<div class="content-card"><h4 style="color:#22d3ee;font-size:13px;font-weight:600;margin:0 0 8px">Project Vision</h4><p>' + project.pitch + '</p></div>';
    if (project.challenge) h += '<div class="content-card"><h4 style="color:#fbbf24;font-size:13px;font-weight:600;margin:0 0 8px">Challenge</h4><div class="prose">' + project.challenge + '</div></div>';
    if (project.development) h += '<div class="content-card"><h4 style="color:#22d3ee;font-size:13px;font-weight:600;margin:0 0 8px">Development</h4><div class="prose">' + project.development + '</div></div>';
    if (project.outcome) h += '<div class="content-card"><h4 style="color:#4ade80;font-size:13px;font-weight:600;margin:0 0 8px">Outcome</h4><div class="prose">' + project.outcome + '</div></div>';

    if (project.excerpts) h += '<div class="accent-card-amber"><h4 style="color:#fbbf24;font-size:16px;margin:0 0 12px">Excerpt</h4><div style="color:rgba(255,255,255,0.9);line-height:1.6">' + project.excerpts + '</div></div>';
    if (project.themesAnalysis) h += '<div class="accent-card-purple"><h4 style="color:#a78bfa;font-size:16px;margin:0 0 12px">Themes Analysis</h4><div style="color:rgba(255,255,255,0.9);line-height:1.6">' + project.themesAnalysis + '</div></div>';

    if (project.gallery && project.gallery.length > 0) {
        h += '<div class="content-section"><h4 style="color:#22d3ee;font-size:16px">Gallery</h4><div class="gallery-grid">';
        project.gallery.forEach(function(item) {
            h += '<div class="gallery-item"><img src="' + item.url + '" alt="' + item.title + '" onerror="this.style.display=\'none\'">';
            h += '<div class="gallery-info"><h5>' + item.title + '</h5><p>' + item.description + '</p>';
            if (item.dimensions) h += '<p style="color:rgba(255,255,255,0.4);font-size:10px;margin-top:4px">' + item.dimensions + '</p>';
            h += '</div></div>';
        });
        h += '</div></div>';
    }

    if (project.journey && project.journey.length > 0) {
        h += '<div class="content-section"><h4 style="color:#22d3ee;font-size:16px">Development Journey</h4>';
        project.journey.forEach(function(step, i) {
            h += '<div class="journey-step"><span class="step-num">' + String(i+1).padStart(2,'0') + '</span>';
            h += '<h5>' + step.title + '</h5>';
            if (step.description) h += '<div>' + step.description + '</div>';
            h += '</div>';
        });
        h += '</div>';
    }

    if (project.specs && project.specs.length > 0) {
        h += '<div class="content-section"><h4 style="color:#22d3ee;font-size:16px">Technical Specifications</h4>';
        project.specs.forEach(function(spec) {
            h += '<div class="content-card"><h5>' + spec.title + '</h5><p>' + spec.description + '</p></div>';
        });
        h += '</div>';
    }

    if (project.artifacts && project.artifacts.length > 0) {
        h += '<div class="content-section"><h4 style="color:#22d3ee;font-size:16px">Project Artifacts</h4>';
        project.artifacts.forEach(function(a) {
            h += '<div class="artifact-card"><span class="artifact-icon">' + (a.icon || '') + '</span><div style="flex:1">';
            h += '<h5>' + a.name + '</h5><p>' + a.description + '</p>';
            if (a.url) h += '<a href="' + a.url + '" target="_blank" rel="noopener noreferrer">View Artifact &rarr;</a>';
            h += '</div></div>';
        });
        h += '</div>';
    }

    if (project.features && project.features.length > 0) {
        h += '<div class="content-section"><h4 style="color:#22d3ee;font-size:16px">Key Features</h4>';
        project.features.forEach(function(f) { h += '<div class="feature-item"><span class="icon">&#9656;</span><span>' + f + '</span></div>'; });
        h += '</div>';
    }
    if (project.achievements && project.achievements.length > 0) {
        h += '<div class="content-section"><h4 style="color:#4ade80;font-size:16px">Achievements</h4>';
        project.achievements.forEach(function(a) { h += '<div class="achievement-item"><span class="icon">&#10003;</span><span>' + a + '</span></div>'; });
        h += '</div>';
    }

    if (!h) h = '<div class="placeholder-section"><div class="icon">&#10024;</div><h4>Experience</h4><p>Detailed project experience and content will be displayed here.</p></div>';
    document.getElementById('tab-experience').innerHTML = h; // trusted: own project data
}

function renderProcessTab(project) {
    var hasContent = (project.process && project.process !== '#') || project.inspiration || (project.journey && project.journey.length > 0);
    if (!hasContent) {
        document.getElementById('tab-process').innerHTML = '<div class="placeholder-section"><div class="icon">&#128260;</div><h4>Creative Process</h4><p>Behind-the-scenes content, development timeline, creative decisions, and methodology documentation will be displayed here.</p><div class="placeholder-badge">Coming Soon</div></div>'; // trusted: static content
        return;
    }
    var h = '';
    if (project.process && project.process !== '#') h += '<div class="content-card"><h4 style="color:#22d3ee;font-size:13px;font-weight:600;margin:0 0 8px">Creative Process</h4><div style="color:rgba(255,255,255,0.9);line-height:1.6">' + project.process + '</div></div>';
    if (project.inspiration) h += '<div class="accent-card-amber"><h4 style="color:#fbbf24;font-size:13px;font-weight:600;margin:0 0 8px">Inspiration</h4><div style="color:rgba(255,255,255,0.9);line-height:1.6">' + project.inspiration + '</div></div>';
    if (project.journey && project.journey.length > 0) {
        h += '<div class="content-section"><h4 style="color:#22d3ee;font-size:16px">Development Journey</h4>';
        project.journey.forEach(function(step, i) {
            h += '<div class="journey-step"><span class="step-num">' + String(i+1).padStart(2,'0') + '</span>';
            h += '<h5>' + step.title + '</h5>';
            if (step.description) h += '<div>' + step.description + '</div>';
            h += '</div>';
        });
        h += '</div>';
    }
    document.getElementById('tab-process').innerHTML = h; // trusted: own project data
}

function renderConnectionsTab() {
    document.getElementById('tab-connections').innerHTML = '<div class="placeholder-section"><div class="icon">&#128279;</div><h4>Project Connections</h4><p>Visual mapping of related projects, thematic connections, creative influences, and cross-medium relationships will be displayed here.</p><div class="placeholder-badge">Coming Soon</div></div>'; // trusted: static content
}

// About Modal Functions
export function openAboutModal() {
    const modal = document.getElementById('about-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

export function closeAboutModal() {
    const modal = document.getElementById('about-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Contact Modal Functions
export function openContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

export function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Clipboard Copy Utility
export function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = buttonElement.textContent;
        buttonElement.textContent = 'COPIED!';
        setTimeout(() => {
            buttonElement.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

