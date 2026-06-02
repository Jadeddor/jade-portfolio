import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal, Footer } from '../App';
import heroImg from '../assets/jade_ny.jpg';
import valc_p from '../assets/valc_jade.jpeg';
import sand_p from '../assets/sand.JPG';
import sea_view from '../assets/sea_view.jpeg';
import mountain_p from '../assets/mountain.jpg';
import falls from '../assets/falls.jpeg';
const HERO_IMG = heroImg;
const PHOTOS = [
  { src: mountain_p, cap: 'Systems at scale' },
  { src: sea_view, cap: 'Music is a language too' },
  { src: valc_p , cap: 'Where I think best' },
  { src: sand_p, cap: 'Nature as architecture' },
  { src: falls , cap: 'Nature as architecture' },
];
const MQ = ['Software Engineer','·','AI / ML','·','Computer Vision','·','Guitar','·','React','·','Nature','·','FastAPI','·','UX Design','·','LLM Integration','·','Curiosity','·'];

const DISC = [
  { n:'01', title:'AI & Machine Learning', desc:'Computer vision, model experimentation, data-driven systems.', tags:['Python','TensorFlow','OpenCV'] },
  { n:'02', title:'Software Engineering', desc:'Reliable full-stack systems — from API to interface.', tags:['React','FastAPI','SQL'] },
  { n:'03', title:'UX-Informed Development', desc:'Design and engineering meeting in the middle.', tags:['Figma','Vue.js','Research'] },
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
        jade<span>.</span><br />
        <span style={{ fontSize: '0.45em', letterSpacing: '0.2em', fontStyle: 'normal', opacity: 0.5 }}>loading something good</span>
      </div>
    </div>
  );
}

export default function Home() {
  useReveal();
  const [splashDone, setSplashDone] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setSplashDone(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const fn = () => { if (imgRef.current) imgRef.current.style.transform = `translateY(${window.scrollY * 0.22}px)`; };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <main>
      <Splash done={splashDone} />

      {/* ── Hero ── */}
      <section className="h-hero">
        <div className="h-hero-left">
          <div className="h-hero-label fu">Software Engineer · Maryland, USA</div>

          <div>
            <div className="avail-pill fu d1">
              <span className="avail-dot" />
              Available for opportunities
            </div>
            <h1 className="h-hero-h1 fu d2">
              <span className="block">Hi,</span>
              <span className="block">I'm <em>Jade.</em></span>
            </h1>
            <p className="h-hero-desc fu d3">
              I build at the intersection of{' '}
              <CyclingText words={['AI & ML.', 'design.', 'engineering.', 'curiosity.']} />
              <br />
              Software engineer who cares about the experience, not just the output.
            </p>
            <div className="h-hero-btns fu d4">
              <Link to="/projects" className="btn btn-forest">View Work →</Link>
              <Link to="/contact" className="btn btn-outline">Say Hello</Link>
            </div>
          </div>

          <div className="h-hero-bottom fu d5">
            <p style={{ fontSize: '0.72rem', color: 'var(--mist)', letterSpacing: '0.08em' }}>
              ☕ coffee-powered &nbsp;·&nbsp; 🎸 guitar nights &nbsp;·&nbsp; 🌿 trail weekends
            </p>
          </div>
        </div>

        {/* Right — photo + floating pick */}
        <div className="h-hero-right">
          <div ref={imgRef} style={{ height: '130%', marginTop: '-15%' }}>
            <img className="h-hero-img" src={HERO_IMG} alt="Jade Dorsainvil" loading="eager" />
          </div>
          {/* Guitar pick decoration */}
          <div className="float-pick">
            <svg viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2C10 2 3 8.5 3 17C3 26 10 34 18 42C26 34 33 26 33 17C33 8.5 26 2 18 2Z"
                fill="#b8f03a" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              <text x="18" y="21" textAnchor="middle" fontSize="9" fill="#1c3a2a" fontFamily="serif" fontStyle="italic">j</text>
            </svg>
            <span>pick me up</span>
          </div>
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
            I'm a CS grad from UMBC (AI/ML track) currently interning at the FDIC, where I build data validation systems
            and modernise federal infrastructure. On the side I'm shipping AI projects that push the edge of what's possible
            with language models and computer vision.
          </p>
          <p className="rev d1">
            I started coding at 15 — built a game based on my favourite anime. Since then the curiosity
            has never switched off. When I'm not at a keyboard I'm on a trail, at a guitar, or
            somewhere with good light and better coffee.
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
          <span className="pers-icon">🌿</span>
          <p className="pers-label">Outside the terminal</p>
          <h3 className="pers-title">Nature & Systems</h3>
          <p className="pers-desc">
            Trail running, hiking, and anywhere mountains remind me that elegant solutions
            exist at every scale. The outdoors is my reset button.
          </p>
          <svg style={{ marginTop:20, opacity:.4, width:80 }} viewBox="0 0 80 50" fill="none">
            <path d="M40 5 L70 45 L10 45 Z" fill="var(--moss)" />
            <path d="M20 25 L45 45 L-5 45 Z" fill="var(--sage)" />
          </svg>
        </div>

        {/* Music */}
        <div className="pers-item rev d1">
          <span className="pers-icon">🎸</span>
          <p className="pers-label">After hours</p>
          <h3 className="pers-title">Music & Rhythm</h3>
          <p className="pers-desc">
            Electric guitar is my escape. Music has always been playing in the background
            while I work — rhythm in code, rhythm in strings.
          </p>
          {/* Mini guitar pick row */}
          <div style={{ display:'flex', gap:8, marginTop:20 }}>
            {['#b8f03a','#6b8f71','#1c3a2a'].map((c,i) => (
              <svg key={i} width="18" height="22" viewBox="0 0 36 44" fill="none">
                <path d="M18 2C10 2 3 8.5 3 17C3 26 10 34 18 42C26 34 33 26 33 17C33 8.5 26 2 18 2Z" fill={c} opacity=".7"/>
              </svg>
            ))}
          </div>
        </div>

        {/* Code */}
        <div className="pers-item rev d2">
          <span className="pers-icon">⌨️</span>
          <p className="pers-label">The day job & then some</p>
          <h3 className="pers-title">Code & Curiosity</h3>
          <p className="pers-desc">
            Started at 15 with a Haikyuu fan game. Now building AI systems for federal agencies
            and experimenting with every model I can get my hands on.
          </p>
          <div className="code-snippet">
            <span style={{ color:'var(--moss)' }}>while</span>(you.areHere == <span style={{ color:'var(--blush-deep)' }}>true</span>) &#123;<br />
            &nbsp;&nbsp;jade.build();<br />
            &#125;
          </div>
        </div>
      </section>

      {/* ── Photo mosaic ── */}
      <div className="h-mosaic rev">
        <div className="mosaic-item mosaic-tall">
          <img src={PHOTOS[0].src} alt="" loading="lazy" />
          <div className="mosaic-caption">{PHOTOS[0].cap}</div>
        </div>
        <div className="mosaic-item">
          <img src={PHOTOS[1].src} alt="" loading="lazy" />
          <div className="mosaic-caption">{PHOTOS[1].cap}</div>
        </div>
        <div className="mosaic-item">
          <img src={PHOTOS[2].src} alt="" loading="lazy" />
          <div className="mosaic-caption">{PHOTOS[2].cap}</div>
        </div>
        <div className="mosaic-item">
          <img src={PHOTOS[3].src} alt="" loading="lazy" />
          <div className="mosaic-caption">{PHOTOS[3].cap}</div>
        </div>
        <div className="mosaic-item">
          <img src={PHOTOS[4].src} alt="" loading="lazy" />
          <div className="mosaic-caption">{PHOTOS[3].cap}</div>
        </div>
      </div>

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
        <h2>Let's push the <em>boundaries</em><br />of technology together.</h2>
        <p>Open to full-time roles, freelance work, and genuinely interesting conversations.</p>
        <Link to="/contact" className="btn btn-spark">→ Get in Touch</Link>
      </section>

      <Footer />
    </main>
  );
}
