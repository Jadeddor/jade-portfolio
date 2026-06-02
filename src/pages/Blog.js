import React from 'react';
import { useReveal, Footer } from '../App';
import grad from '../assets/grad.jpeg';
const SUBSTACK = 'https://substack.com/@jadedor?r=2igytd&utm_campaign=profile&utm_medium=profile-page';

const WRITING_IMG = grad;

export default function Blog() {
  useReveal();
  return (
    <main>
      {/* Banner */}
      <section className="blog-banner">
        <p className="fu" style={{ fontSize:'.7rem', fontWeight:500, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--mist)', marginBottom:20 }}>Writing</p>
        <h1 className="fu d1">Blog.</h1>
        <p className="fu d2">
          I write. Not just about code — about life, curiosity, and everything in between.
        </p>
      </section>

      {/* Featured — Substack callout */}
      <div className="blog-feat rev">
        <div className="blog-feat-img iz">
          <img src={WRITING_IMG} alt="Writing" loading="lazy" />
        </div>
        <div className="blog-feat-body">
          <p className="blog-feat-cat">Personal writing · Substack</p>
          <h2 className="blog-feat-title">
            I'm a writer first,<br />an engineer second.
          </h2>
          <p className="blog-feat-exc">
            My blog lives on Substack. It's personal — honest writing about creativity,
            growth, building things, and whatever's on my mind. Not a tech tutorial in sight.
            New articles are on their way.
          </p>
          <p className="blog-feat-meta" style={{ display:'flex', alignItems:'center', gap:8 }}>
            <span style={{ width:8, height:8, background:'var(--spark)', borderRadius:'50%', display:'inline-block', animation:'pulse 2s ease-in-out infinite' }} />
            Live on Substack · New posts coming soon
          </p>
          <div style={{ marginTop:24, display:'flex', gap:12, flexWrap:'wrap' }}>
            <a href={SUBSTACK} target="_blank" rel="noreferrer" className="btn btn-forest">
              Read on Substack ↗
            </a>
            <a href={SUBSTACK} target="_blank" rel="noreferrer" className="btn btn-outline">
              Subscribe →
            </a>
          </div>
        </div>
      </div>

      {/* Coming soon cards */}
      <div style={{ padding:'64px 56px', borderBottom:'1px solid var(--border)' }}>
        <p className="rev" style={{ fontSize:'.7rem', fontWeight:500, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--mist)', marginBottom:32 }}>
          Articles in progress
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:1, background:'var(--border)' }}>
          {[
            { emoji:'🌿', title:'On building slowly and why speed is overrated' },
            { emoji:'🎸', title:'What guitar taught me about learning anything' },
            { emoji:'✦',  title:'Being a girl in tech — the honest version' },
            { emoji:'🌙', title:'Night coding, solitude, and finding your rhythm' },
            { emoji:'📖', title:'Books that quietly changed how I think' },
            { emoji:'☕', title:'The ritual of making something every day' },
          ].map(({ emoji, title }, i) => (
            <div key={i} className="blog-card rev" style={{ transitionDelay:`${i * 0.06}s` }}>
              <span style={{ fontSize:'1.4rem', lineHeight:1, marginBottom:8, display:'block' }}>{emoji}</span>
              <h3 className="blog-title" style={{ opacity:.55 }}>{title}</h3>
              <p className="blog-date" style={{ marginTop:'auto' }}>Coming soon</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="blog-end rev">
        <h2>Come read with me.</h2>
        <p>
          All my published writing lives on Substack.<br />
          Subscribe so you don't miss what's coming next.
        </p>
        <div style={{ marginTop:28, display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={SUBSTACK} target="_blank" rel="noreferrer" className="btn btn-forest">
            Visit my Substack ↗
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}