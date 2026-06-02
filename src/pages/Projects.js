import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal, Footer } from '../App';

const PROJECTS = [
  { id:1, n:'01', icon:'🎯', title:'Simple Stickers', sub:'Multi-Model Instance Segmentation', desc:'Full-stack computer vision platform comparing YOLOv12, Mask2Former, RT-DETR + SAM2, and open-vocabulary pipelines side-by-side. Unified API for benchmarking accuracy, mask quality, and inference latency.', tech:['FastAPI','React','Docker','Python','OpenCV'], tags:['AI/ML','Computer Vision','Full-Stack'], github:'https://github.com/adams-x0/cv_project', live:null, status:'In Progress' },
  { id:2, n:'02', icon:'🤖', title:'CSEE Triage Bot', sub:'AI Workflow Automation', desc:'Full-stack AI system classifying, routing, and managing support requests with Groq LLM inference + Atlassian APIs. Automated escalation, structured logging, persistent data storage.', tech:['Python','TypeScript','SQL','REST APIs','Groq LLM'], tags:['AI/ML','Full-Stack','Automation'], github:'https://github.com/Jadeddor/CSEE-Triage-SWE', live:null, status:'In Progress' },
  { id:3, n:'03', icon:'✦', title:'Portfolio Site', sub:'This website — v3', desc:'Designed and built from scratch in React. Custom guitar pick cursor, parallax hero, scroll reveal animations, splash screen, and fully responsive across all breakpoints. Zero animation libraries — pure CSS.', tech:['React','CSS','React Router'], tags:['Frontend','UX/Design'], github:null, live:null, status:'Live' },
  { id:4, n:'04', icon:'🚧', title:'Next Build', sub:'Something new is brewing', desc:'Another project is already taking shape. Follow on GitHub or reach out if you want to collaborate on something interesting.', tech:[], tags:['Coming Soon'], github:null, live:null, status:'Upcoming' },
];

const FILTERS = ['All','AI/ML','Full-Stack','Frontend','UX/Design'];

export default function Projects() {
  useReveal();
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(active));

  return (
    <main>
      <section className="proj-banner">
        <p className="fu" style={{ fontSize:'.7rem', fontWeight:500, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--mist)', marginBottom:20 }}>Selected work</p>
        <h1 className="fu d1">Projects.</h1>
        <p className="fu d2">Full-stack, AI/ML, and everything in between — built end-to-end, solo.</p>
      </section>

      <div className="proj-filters">
        {FILTERS.map(f => (
          <button key={f} className={`filt${active===f?' on':''}`} onClick={() => setActive(f)}>{f}</button>
        ))}
      </div>

      <div className="proj-grid">
        {visible.map((p, i) => (
          <div key={p.id} className="proj-card rev" style={{ transitionDelay:`${i * 0.07}s` }}>
            <span className="proj-n">{p.n}</span>
            <div className="proj-icon">{p.icon}</div>
            <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              <span className={`tag ${p.status==='Live'?'tag-spark':p.status==='In Progress'?'tag-forest':''}`}>{p.status}</span>
            </div>
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-sub">{p.sub}</p>
            <p className="proj-desc">{p.desc}</p>
            {p.tech.length > 0 && (
              <div className="proj-tech">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
            )}
            <div style={{ display:'flex', gap:16 }}>
              {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">GitHub ↗</a>}
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="proj-link">Live ↗</a>}
              {!p.github && !p.live && p.status !== 'Upcoming' && (
                <span className="proj-link" style={{ opacity:.35 }}>Deploy in progress</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <section className="h-cta rev" style={{ background:'var(--forest)' }}>
        <div className="h-cta-bg-text">build</div>
        <h2>Want to <em>collaborate?</em></h2>
        <p>I'm always open to interesting problems and people who care about building well.</p>
        <Link to="/contact" className="btn btn-spark">→ Get in Touch</Link>
      </section>

      <Footer />
    </main>
  );
}
