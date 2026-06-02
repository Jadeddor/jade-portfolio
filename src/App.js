import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// ── Guitar pick cursor ──────────────────────
function Cursor() {
  const pick = useRef(null);
  const trail = useRef(null);
  const mouse = useRef({ x: -200, y: -200 });
  const smooth = useRef({ x: -200, y: -200 });
  const raf = useRef(null);

  useEffect(() => {
    const move = e => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (pick.current) {
        pick.current.style.left = e.clientX + 'px';
        pick.current.style.top = e.clientY + 'px';
      }
    };
    const over = e => {
      if (e.target.closest('a,button,.filt,.proj-card,.blog-card,.disc-row,.about-chip,.sk,.pers-item,.clink'))
        document.body.classList.add('cur-hov');
    };
    const out = () => document.body.classList.remove('cur-hov');
    const loop = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.09;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.09;
      if (trail.current) {
        trail.current.style.left = smooth.current.x + 'px';
        trail.current.style.top = smooth.current.y + 'px';
      }
      raf.current = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', out);
    raf.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseout', out);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div className="cursor-pick" ref={pick}>
        <svg viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2C10 2 3 8.5 3 17C3 26 10 34 18 42C26 34 33 26 33 17C33 8.5 26 2 18 2Z"
            fill="#1c3a2a" stroke="#2d5a3e" strokeWidth="1"/>
          <text x="18" y="21" textAnchor="middle" fontSize="10" fill="#b8f03a" fontFamily="serif" fontStyle="italic">j</text>
        </svg>
      </div>
      <div className="cursor-trail" ref={trail} />
    </>
  );
}

// ── Scroll reveal ────────────────────────────
export function useReveal() {
  const loc = useLocation();
  useEffect(() => {
    const els = document.querySelectorAll('.rev');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [loc]);
}

// ── Nav ──────────────────────────────────────
function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [loc]);

  const links = [['About','about'],['Projects','projects'],['Blog','blog'],['Contact','contact']];

  return (
    <>
      <nav className={`nav${solid ? ' solid' : ''}`}>
        <Link to="/" className="nav-logo">jade <em>dorsainvil</em></Link>
        <ul className="nav-links">
          {links.map(([l, p]) => (
            <li key={p}>
              <NavLink to={`/${p}`} className={({ isActive }) => isActive ? 'active' : ''}>{l}</NavLink>
            </li>
          ))}
        </ul>
        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span style={open ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}} />
          <span style={open ? { opacity: 0 } : {}} />
          <span style={open ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}} />
        </button>
      </nav>
      <div className={`mob-nav${open ? ' open' : ''}`}>
        {links.map(([l, p]) => <Link key={p} to={`/${p}`}>{l}</Link>)}
      </div>
    </>
  );
}

// ── Footer ───────────────────────────────────
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="footer-logo">jade <em>dorsainvil</em></span>
        <p>Building at the intersection of AI, engineering, and design — with curiosity as the constant.</p>
        <div className="footer-socials">
          <a href="https://linkedin.com/in/jade-dorsainvil" target="_blank" rel="noreferrer">in</a>
          <a href="https://github.com/Jadeddor" target="_blank" rel="noreferrer">gh</a>
          <a href="https://x.com/DorsainvilJade/likes" target="_blank" rel="noreferrer">𝕏</a>
        </div>
      </div>
      <div>
        <div className="footer-grid">
          <div className="footer-col">
            <p className="footer-col-h">Navigate</p>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <p className="footer-col-h">Work</p>
            <a href="https://github.com/adams-x0/cv_project" target="_blank" rel="noreferrer">Simple Stickers</a>
            <a href="https://github.com/Jadeddor/CSEE-Triage-SWE" target="_blank" rel="noreferrer">CSEE Triage Bot</a>
            <Link to="/projects">All projects</Link>
          </div>
          <div className="footer-col">
            <p className="footer-col-h">Connect</p>
            <a href="mailto:jadedor04@gmail.com">Email me</a>
            <a href="https://linkedin.com/in/jade-dorsainvil" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Jadeddor" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Jade Dorsainvil. Designed & built with intention.</p>
          <p>React · Vercel</p>
        </div>
      </div>
    </footer>
  );
}

// ── Page wrapper ─────────────────────────────
function Wrap({ children }) {
  const loc = useLocation();
  return <div key={loc.pathname} className="page fi">{children}</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Nav />
      <Wrap>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Wrap>
    </BrowserRouter>
  );
}
