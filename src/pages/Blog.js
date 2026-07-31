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
          I write. Not just about code, but life, curiosity, and everything in between.
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
            My writing lives on Substack: honest, personal essays about creativity,
            growth, and building things. Not a tech tutorial in sight.
          </p>
          <p className="blog-feat-meta" style={{ display:'flex', alignItems:'center', gap:8 }}>
            <span style={{ width:8, height:8, background:'var(--spark)', borderRadius:'50%', display:'inline-block', animation:'pulse 2s ease-in-out infinite' }} />
            Latest posts below
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

      {/* Real posts — pulled live from Substack */}
      <div style={{ padding:'64px 56px', borderBottom:'1px solid var(--border)' }}>
        <p className="rev" style={{ fontSize:'.7rem', fontWeight:500, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--mist)', marginBottom:32 }}>
          Latest posts
        </p>
        <div className="rev" style={{ border:'1px solid var(--border)', borderRadius:14, overflow:'hidden', background:'var(--cream)' }}>
          <iframe
            src="https://jadedor.substack.com/embed"
            title="Jade's latest Substack posts"
            width="100%"
            height="480"
            style={{ border:'none', display:'block' }}
            loading="lazy"
          />
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