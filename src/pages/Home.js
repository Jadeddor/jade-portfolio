import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal, Footer } from '../App';
import heroImg from '../assets/jade_ny.jpg';
import mountain_p from '../assets/mountain.jpg';
const HERO_IMG = heroImg;
const MQ = ['Software Engineer','·','AI / ML','·','Computer Vision','·','React','·','FastAPI','·','UX Design','·','LLM Integration','·'];
const PICK_MESSAGES = ['nice strum', 'E  A  D  G  B  E', 'one more take...', 'still tuning...', 'encore?'];

// Synthesized guitar-string pluck — no audio asset needed
function strumSound() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const now = ctx.currentTime;
    [220, 277.18, 329.63, 440].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.13, now + 0.01 + i * 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5 + i * 0.02);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now + i * 0.02);
      osc.stop(now + 0.6 + i * 0.02);
    });
    setTimeout(() => ctx.close(), 900);
  } catch (e) { /* Web Audio unavailable — fail silently */ }
}

const DISC = [
  { n:'01', title:'AI & Machine Learning', desc:'Computer vision, model experimentation, data-driven systems.', tags:['Python','TensorFlow','OpenCV'] },
  { n:'02', title:'Agentic Workflows & Automation', desc:'AI agents that plan, act, and automate real workflows end-to-end.', tags:['LLM Agents','Automation','APIs'] },
  { n:'03', title:'Software Engineering', desc:'Reliable full-stack systems, from API to interface.', tags:['React','FastAPI','SQL'] },
  { n:'04', title:'UX-Informed Development', desc:'Design and engineering meeting in the middle.', tags:['Figma','Vue.js','Research'] },
];

// Animated text — cycles through words
function CyclingText({ words }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(n => (n + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, [words]);
  return (
    <span style={{ color: 'var(--forest-mid)', fontStyle: 'italic', display: 'inline-block', minWidth: 200, transition: 'opacity .3s' }}>
      {words[i]}
    </span>
  );
}

// Splash loader
function Splash({ done }) {
  return (
    <div className={`splash${done ? ' out' : ''}`}>
      <div className="splash-text">
        jade<span>.</span>
      </div>
    </div>
  );
}

const ALBUMS = [
  { artist: 'Prince', album: 'Purple Rain', year: '1984', url: 'https://open.spotify.com/album/7nXJ5k4XgRj5OLg9m8V3zc' },
  { artist: 'B.B. King', album: 'Live at the Regal', year: '1965', url: 'https://open.spotify.com/album/7njGz7ZeDXL6cH3VnflcQ2' },
  { artist: 'Van Halen', album: 'Van Halen', year: '1978', url: 'https://open.spotify.com/album/7rMMZhClpS1ZUSxp5GuVyI' },
];

// Surprise egg — opens after every second pick strum
function AlbumModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="album-modal-backdrop" onClick={onClose}>
      <div className="album-modal" onClick={e => e.stopPropagation()}>
        <button type="button" className="album-modal-close" onClick={onClose} aria-label="Close">×</button>
        <p className="album-modal-eyebrow">you found it</p>
        <h3 className="album-modal-title">A few albums on repeat</h3>
        <div className="album-modal-list">
          {ALBUMS.map(a => (
            <a key={a.album} href={a.url} target="_blank" rel="noreferrer" className="album-row">
              <div>
                <span className="album-artist">{a.artist}</span>
                <span className="album-name">{a.album} · {a.year}</span>
              </div>
              <span className="album-link">Listen ↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  useReveal();
  const [splashDone, setSplashDone] = useState(false);
  const imgRef = useRef(null);
  const [strummed, setStrummed] = useState(false);
  const [pickMsgIdx, setPickMsgIdx] = useState(0);
  const [showPickMsg, setShowPickMsg] = useState(false);
  const [showAlbums, setShowAlbums] = useState(false);
  const pickTimers = useRef([]);
  const pickCount = useRef(0);

  useEffect(() => {
    const t = setTimeout(() => setSplashDone(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => () => pickTimers.current.forEach(clearTimeout), []);

  const handlePick = () => {
    strumSound();
    setStrummed(false);
    requestAnimationFrame(() => setStrummed(true));
    pickCount.current += 1;
    if (pickCount.current % 2 === 0) {
      setShowAlbums(true);
    } else {
      setPickMsgIdx(n => (n + 1) % PICK_MESSAGES.length);
      setShowPickMsg(true);
    }
    pickTimers.current.forEach(clearTimeout);
    pickTimers.current = [
      setTimeout(() => setStrummed(false), 500),
      setTimeout(() => setShowPickMsg(false), 1800),
    ];
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = null;
    const fn = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (imgRef.current) imgRef.current.style.transform = `translateY(${window.scrollY * 0.22}px)`;
        raf = null;
      });
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => { window.removeEventListener('scroll', fn); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <main>
      <Splash done={splashDone} />

      {/* ── Hero ── */}
      <section className="h-hero">
        <div className="h-hero-left">
          <div className="h-hero-label fu">Software Engineer · Maryland, USA</div>

          <div>
            
            <h1 className="h-hero-h1 fu d2">
              <span className="block">Hi,</span>
              <span className="block">I'm <em>Jade</em></span>
            </h1>
            <p className="h-hero-desc fu d3">
              I build at the intersection of{' '}
              <CyclingText words={['AI & ML.', 'agentic workflows.', 'design.', 'engineering.']} />
              
            </p>
            <div className="h-hero-btns fu d4">
              <Link to="/projects" className="btn btn-forest">View Work →</Link>
              <Link to="/contact" className="btn btn-outline">Say Hello</Link>
            </div>
          </div>

          <div className="h-hero-bottom fu d5">
            <p style={{ fontSize: '0.72rem', color: 'var(--mist)', letterSpacing: '0.08em' }}>
              Thoughtful &nbsp;·&nbsp; Curious &nbsp;·&nbsp; Reliable
            </p>
          </div>
        </div>

        {/* Right — photo + floating pick */}
        <div className="h-hero-right">
          <div ref={imgRef} style={{ height: '130%', marginTop: '-15%' }}>
            <img className="h-hero-img" src={HERO_IMG} alt="Jade Dorsainvil" loading="eager" />
          </div>
          {/* Guitar pick decoration — click it */}
          <button
            type="button"
            className={`float-pick${strummed ? ' strummed' : ''}`}
            onClick={handlePick}
            aria-label="Strum the guitar pick"
          >
            <span className={`pick-msg${showPickMsg ? ' show' : ''}`}>{PICK_MESSAGES[pickMsgIdx]}</span>
            <svg viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2C10 2 3 8.5 3 17C3 26 10 34 18 42C26 34 33 26 33 17C33 8.5 26 2 18 2Z"
                fill="#e2d7ab" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              <text x="18" y="21" textAnchor="middle" fontSize="9" fill="#1c3a2a" fontFamily="serif" fontStyle="italic">j</text>
            </svg>
            <span>pick me up</span>
          </button>
          {/* Botanical SVG */}
          <svg className="hero-leaf" style={{ position:'absolute', top:'-20px', right:'-10px', width:180 }}
            viewBox="0 0 200 300" fill="none">
            <path d="M100 10 Q140 60 130 120 Q120 180 80 200 Q100 140 100 10Z" fill="var(--sage)" />
            <path d="M100 10 Q60 60 70 120 Q80 180 120 200 Q100 140 100 10Z" fill="var(--moss)" opacity=".6" />
            <line x1="100" y1="10" x2="100" y2="200" stroke="var(--forest)" strokeWidth="1" opacity=".4" />
          </svg>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="mq">
        <div className="mq-track">
          {[...MQ,...MQ].map((t, i) => (
            <span key={i} className={`mq-item${t === '·' ? ' lit' : ''}`}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── Intro ── */}
      <section className="h-intro">
        <div className="h-intro-l">
          <h2 className="big-q rev">
            A <em>software engineer</em> with a background in AI/ML, building intuitive and thoughtful UX.
          </h2>
          <div style={{ marginTop: 32 }} className="rev d1">
            <a href="https://linkedin.com/in/jade-dorsainvil" target="_blank" rel="noreferrer" className="btn btn-forest">↓ Resume</a>
          </div>
        </div>
        <div className="h-intro-r">
          <p className="rev">
            I'm a CS grad from UMBC (AI/ML track) working as a software engineer, building systems
            that range from data validation pipelines to agentic AI workflows. On the side I'm shipping
            projects that push the edge of what's possible with language models and computer vision.
          </p>
          <p className="rev d1">
            I started coding at 15, building small passion projects just to see what I could make.
            Since then the curiosity has never switched off. When I'm not at a keyboard, I'm on a
            trail or behind a guitar.
          </p>
          {/* Inline stat row */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginTop:36 }} className="rev d2">
            {[['5+','Years building'],['3+','Shipped projects'],['AI/ML','Specialisation'],['UX','Certified']].map(([v,l]) => (
              <div key={l} style={{ borderTop:'2px solid var(--border)', paddingTop:16 }}>
                <strong style={{ fontFamily:'var(--serif)', fontSize:'1.6rem', fontWeight:300, display:'block', lineHeight:1, marginBottom:4 }}>{v}</strong>
                <span style={{ fontSize:'0.72rem', letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mist)' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Personality strip ── */}
      <section className="personality-strip">
        {/* Nature */}
        <div className="pers-item rev">
          <p className="pers-label">Outside the terminal</p>
          <h3 className="pers-title">Nature & Systems</h3>
          <p className="pers-desc">
            Trail running and hiking, anywhere mountains remind me that elegant
            solutions exist at every scale.
          </p>
          <div className="pers-photo iz">
            <img src={mountain_p} alt="A mountain trail" loading="lazy" />
          </div>
        </div>

        {/* Music */}
        <div className="pers-item rev d1">
          <p className="pers-label">After hours</p>
          <h3 className="pers-title">Music & Rhythm</h3>
          <p className="pers-desc">
            Electric guitar is my escape. Music has always been playing in the background
            while I work: rhythm in code, rhythm in strings.
          </p>
          {/* Mini guitar pick row */}
          <div style={{ display:'flex', gap:8, marginTop:20 }}>
            {['#e2d7ab','#6b8f71','#1c3a2a'].map((c,i) => (
              <svg key={i} width="18" height="22" viewBox="0 0 36 44" fill="none">
                <path d="M18 2C10 2 3 8.5 3 17C3 26 10 34 18 42C26 34 33 26 33 17C33 8.5 26 2 18 2Z" fill={c} opacity=".7"/>
              </svg>
            ))}
          </div>
        </div>

        {/* Code */}
        <div className="pers-item rev d2">
          <p className="pers-label">The day job & then some</p>
          <h3 className="pers-title">Code & Curiosity</h3>
          <p className="pers-desc">
            Started at 15 with a small fan-made game. Now building agentic AI systems for
            federal agencies and experimenting with every model I can get my hands on.
          </p>
          <div className="code-snippet">
            <span style={{ color:'var(--moss)' }}>while</span>(you.areHere == <span style={{ color:'var(--blush-deep)' }}>true</span>) &#123;<br />
            &nbsp;&nbsp;jade.build();<br />
            &#125;
          </div>
        </div>
      </section>

      {/* ── Disciplines ── */}
      <section className="h-disciplines">
        {DISC.map(({ n, title, desc, tags }) => (
          <div key={n} className="disc-row rev">
            <span className="disc-num">{n}</span>
            <div className="disc-body">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
            <div className="disc-tags">
              {tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <span className="disc-arr">→</span>
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="h-cta rev">
        <div className="h-cta-bg-text">collaborate</div>
        <h2>Let's build something <em>worth shipping</em>.</h2>
        <p>Open to full-time roles, freelance work, and genuinely interesting conversations.</p>
        <Link to="/contact" className="btn btn-spark">→ Get in Touch</Link>
      </section>

      <Footer />
      <AlbumModal open={showAlbums} onClose={() => setShowAlbums(false)} />
    </main>
  );
}
