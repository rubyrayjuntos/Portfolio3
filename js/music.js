// music.js — Procedural chill space funk generator
// Uses Web Audio API to create evolving, generative funk music

let audioCtx = null;
let isPlaying = false;
let masterGain = null;
let isMuted = false;

// Musical constants
const BPM = 82; // Slow, chill tempo
const BEAT = 60 / BPM;
const BAR = BEAT * 4;

// Funk scale: minor pentatonic with some chromatic flavor
const ROOT = 41.2; // E1 for deep bass
const SCALE = [0, 3, 5, 7, 10, 12, 15, 17, 19, 22, 24]; // Minor pentatonic extended

// Chord progressions (relative to root, funk style: i - iv - v - i variations)
const PROGRESSIONS = [
    [0, 0, 5, 5, 7, 7, 5, 5],   // Em - Am - Bm - Am feel
    [0, 0, 0, 5, 5, 7, 5, 0],   // Variation
    [0, 3, 5, 7, 5, 3, 0, 0],   // Walking
];

let currentProgression = 0;
let currentBar = 0;
let schedulerTimer = null;
let nextNoteTime = 0;

export function initAudio() {
    if (audioCtx) return;

    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // Master gain for volume control
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.3; // Start at reasonable volume
    masterGain.connect(audioCtx.destination);

    // Create effects chain
    createEffects();
}

// Effects nodes
let bassFilter, padReverb, compressor;

function createEffects() {
    // Bass lowpass filter for warmth
    bassFilter = audioCtx.createBiquadFilter();
    bassFilter.type = 'lowpass';
    bassFilter.frequency.value = 400;
    bassFilter.Q.value = 2;
    bassFilter.connect(masterGain);

    // Simple delay for space (pseudo-reverb)
    padReverb = audioCtx.createDelay();
    padReverb.delayTime.value = 0.3;
    const reverbGain = audioCtx.createGain();
    reverbGain.gain.value = 0.3;
    padReverb.connect(reverbGain);
    reverbGain.connect(masterGain);

    // Compressor for punch
    compressor = audioCtx.createDynamicsCompressor();
    compressor.threshold.value = -24;
    compressor.knee.value = 30;
    compressor.ratio.value = 4;
    compressor.attack.value = 0.003;
    compressor.release.value = 0.25;
    compressor.connect(masterGain);
}

export function startMusic() {
    if (isPlaying) return;

    initAudio();

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    isPlaying = true;
    nextNoteTime = audioCtx.currentTime + 0.1;
    scheduler();
}

export function stopMusic() {
    isPlaying = false;
    if (schedulerTimer) {
        clearTimeout(schedulerTimer);
        schedulerTimer = null;
    }
}

export function toggleMute() {
    if (!masterGain) return false;

    isMuted = !isMuted;
    masterGain.gain.linearRampToValueAtTime(
        isMuted ? 0 : 0.3,
        audioCtx.currentTime + 0.1
    );
    return isMuted;
}

export function isMutedState() {
    return isMuted;
}

// Main scheduler - runs ahead of time to schedule notes
function scheduler() {
    if (!isPlaying) return;

    const scheduleAhead = 0.2; // Schedule 200ms ahead

    while (nextNoteTime < audioCtx.currentTime + scheduleAhead) {
        scheduleBar(nextNoteTime);
        nextNoteTime += BAR;
        currentBar++;

        // Change progression occasionally
        if (currentBar % 8 === 0 && Math.random() > 0.5) {
            currentProgression = Math.floor(Math.random() * PROGRESSIONS.length);
        }
    }

    schedulerTimer = setTimeout(scheduler, 100);
}

function scheduleBar(barStart) {
    const prog = PROGRESSIONS[currentProgression];
    const chordIndex = currentBar % prog.length;
    const chordRoot = prog[chordIndex];

    // Schedule bass line
    scheduleBassLine(barStart, chordRoot);

    // Schedule drums
    scheduleDrums(barStart);

    // Schedule pad (every 2 bars)
    if (currentBar % 2 === 0) {
        schedulePad(barStart, chordRoot);
    }

    // Occasional sparkle
    if (Math.random() > 0.7) {
        scheduleSparkle(barStart + Math.random() * BAR, chordRoot);
    }
}

function scheduleBassLine(barStart, chordRoot) {
    const bassFreq = ROOT * Math.pow(2, chordRoot / 12);

    // Funk bass pattern - syncopated with ghost notes
    const pattern = [
        { time: 0, vel: 1, dur: 0.15 },
        { time: BEAT * 0.75, vel: 0.4, dur: 0.1 },  // Ghost note
        { time: BEAT * 1, vel: 0.9, dur: 0.2 },
        { time: BEAT * 1.5, vel: 0.5, dur: 0.1 },   // Syncopation
        { time: BEAT * 2, vel: 1, dur: 0.15 },
        { time: BEAT * 2.75, vel: 0.3, dur: 0.1 },  // Ghost
        { time: BEAT * 3, vel: 0.8, dur: 0.3 },
        { time: BEAT * 3.5, vel: 0.6, dur: 0.15 },  // Walk up
    ];

    pattern.forEach(note => {
        // Occasional octave jump or fifth
        let freq = bassFreq;
        if (Math.random() > 0.85) freq *= 2; // Octave up
        if (Math.random() > 0.9) freq *= 1.5; // Fifth

        playBass(barStart + note.time, freq, note.dur, note.vel);
    });
}

function playBass(time, freq, duration, velocity) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    // Slightly detuned saw for warmth
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    // Sub oscillator for depth
    const sub = audioCtx.createOscillator();
    sub.type = 'sine';
    sub.frequency.setValueAtTime(freq, time);

    const subGain = audioCtx.createGain();
    subGain.gain.value = 0.5;

    // Envelope - punchy funk bass
    const maxVol = 0.25 * velocity;
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(maxVol, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(maxVol * 0.7, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    sub.connect(subGain);
    subGain.connect(gain);
    gain.connect(bassFilter);

    osc.start(time);
    sub.start(time);
    osc.stop(time + duration + 0.1);
    sub.stop(time + duration + 0.1);
}

function scheduleDrums(barStart) {
    // Kick pattern - on 1 and 3, sometimes syncopated
    playKick(barStart);
    playKick(barStart + BEAT * 2);
    if (Math.random() > 0.6) playKick(barStart + BEAT * 2.75, 0.5); // Syncopated kick

    // Snare on 2 and 4 (backbeat)
    playSnare(barStart + BEAT, 0.7);
    playSnare(barStart + BEAT * 3, 0.8);

    // Hi-hats - 8th notes with some variation
    for (let i = 0; i < 8; i++) {
        const time = barStart + BEAT * (i / 2);
        const vel = i % 2 === 0 ? 0.4 : 0.2; // Accent downbeats
        const open = Math.random() > 0.9; // Occasional open hat
        playHiHat(time, vel * (0.8 + Math.random() * 0.4), open);
    }
}

function playKick(time, velocity = 1) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    // Pitch drop for punch
    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(40, time + 0.1);

    const vol = 0.4 * velocity;
    gain.gain.setValueAtTime(vol, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);

    osc.connect(gain);
    gain.connect(compressor);

    osc.start(time);
    osc.stop(time + 0.4);
}

function playSnare(time, velocity = 1) {
    // Noise burst for snare
    const bufferSize = audioCtx.sampleRate * 0.2;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.1));
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 1000;

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.15 * velocity, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);

    // Add body tone
    const body = audioCtx.createOscillator();
    body.type = 'triangle';
    body.frequency.value = 180;

    const bodyGain = audioCtx.createGain();
    bodyGain.gain.setValueAtTime(0.1 * velocity, time);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, time + 0.1);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(compressor);

    body.connect(bodyGain);
    bodyGain.connect(compressor);

    noise.start(time);
    body.start(time);
    body.stop(time + 0.15);
}

function playHiHat(time, velocity = 0.3, open = false) {
    const bufferSize = audioCtx.sampleRate * (open ? 0.3 : 0.05);
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
        const decay = open ? 0.15 : 0.5;
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * decay));
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = open ? 7000 : 9000;

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.08 * velocity, time);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    noise.start(time);
}

function schedulePad(barStart, chordRoot) {
    const baseFreq = ROOT * 4 * Math.pow(2, chordRoot / 12); // 2 octaves up

    // Minor 7 chord voicing
    const intervals = [0, 3, 7, 10]; // Root, minor 3rd, 5th, minor 7th

    intervals.forEach((interval, i) => {
        const freq = baseFreq * Math.pow(2, interval / 12);
        playPadNote(barStart, freq, BAR * 2, 0.03 - i * 0.005);
    });
}

function playPadNote(time, freq, duration, velocity) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    // Slow attack, long release - dreamy
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(velocity, time + 0.5);
    gain.gain.setValueAtTime(velocity, time + duration - 0.5);
    gain.gain.linearRampToValueAtTime(0, time + duration);

    // Add subtle vibrato
    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    lfo.type = 'sine';
    lfo.frequency.value = 4 + Math.random() * 2;
    lfoGain.gain.value = freq * 0.003;

    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    osc.connect(gain);
    gain.connect(padReverb);
    gain.connect(masterGain); // Dry signal too

    osc.start(time);
    lfo.start(time);
    osc.stop(time + duration + 0.1);
    lfo.stop(time + duration + 0.1);
}

function scheduleSparkle(time, chordRoot) {
    // High sparkly notes for space feel
    const baseFreq = ROOT * 16 * Math.pow(2, chordRoot / 12); // 4 octaves up
    const scaleNote = SCALE[Math.floor(Math.random() * 5)];
    const freq = baseFreq * Math.pow(2, scaleNote / 12);

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.02, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.8);

    osc.connect(gain);
    gain.connect(padReverb);

    osc.start(time);
    osc.stop(time + 1);
}
