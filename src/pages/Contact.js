import React, { useState } from 'react';
import { useReveal, Footer } from '../App';

export default function Contact() {
  useReveal();
  const [f, setF] = useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const set = k => e => setF(p => ({ ...p, [k]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    if (!f.name || !f.email || !f.message) return;
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/mdajqgnw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: f.name,
          email: f.email,
          subject: f.subject,
          message: f.message,
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        alert('Something went wrong. Try emailing me directly!');
      }
    } catch (err) {
      alert('Something went wrong. Try emailing me directly!');
    }
    setLoading(false);
  };

  return (
    <main>
      <div className="contact-wrap">
        <div className="contact-l">
          <div>
            <h1 className="fu">Let's build<br />something<br /><em>great.</em></h1>
            <p className="fu d2">
              Open to full-time roles, freelance projects, and genuinely interesting conversations.
              If you have a problem worth solving — I want to hear about it.
            </p>
            <div className="contact-dets fu d3">
              <div>
                <p className="cdet-label">Email</p>
                <p className="cdet-val"><a href="mailto:jadedor04@gmail.com">jadedor04@gmail.com</a></p>
              </div>
              <div>
                <p className="cdet-label">Location</p>
                <p className="cdet-val">Maryland, USA 📍</p>
              </div>
              <div>
                <p className="cdet-label">Currently open to</p>
                <p className="cdet-val">Full-time · Freelance · Collaboration</p>
              </div>
            </div>
            <div className="contact-links fu d4">
              <a href="https://linkedin.com/in/jade-dorsainvil" target="_blank" rel="noreferrer" className="clink">LinkedIn</a>
              <a href="https://github.com/Jadeddor" target="_blank" rel="noreferrer" className="clink">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="clink">Twitter</a>
            </div>
            <div style={{ display:'flex', gap:10, marginTop:40 }} className="fu d5">
              {['var(--spark)','rgba(249,246,241,0.3)','rgba(249,246,241,0.12)'].map((c, i) => (
                <svg key={i} width="22" height="28" viewBox="0 0 36 44" fill="none">
                  <path d="M18 2C10 2 3 8.5 3 17C3 26 10 34 18 42C26 34 33 26 33 17C33 8.5 26 2 18 2Z" fill={c} />
                </svg>
              ))}
            </div>
          </div>
          <p style={{ fontSize:'.72rem', color:'rgba(249,246,241,0.2)' }}>© 2026 Jade Dorsainvil</p>
        </div>

        <div className="contact-r">
          {sent ? (
            <div className="form-ok fu">
              <span className="form-ok-icon">✦</span>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out — I'll get back to you soon.</p>
              <button className="btn btn-forest" style={{ marginTop:28 }}
                onClick={() => { setSent(false); setF({ name:'', email:'', subject:'', message:'' }); }}>
                Send another →
              </button>
            </div>
          ) : (
            <>
              <h2 className="fu">Send a message</h2>
              <form onSubmit={submit}>
                <div className="form-row">
                  <div className="field">
                    <label>Name *</label>
                    <input type="text" placeholder="Your name" value={f.name} onChange={set('name')} required />
                  </div>
                  <div className="field">
                    <label>Email *</label>
                    <input type="email" placeholder="you@email.com" value={f.email} onChange={set('email')} required />
                  </div>
                </div>
                <div className="field">
                  <label>I'm reaching out about</label>
                  <select value={f.subject} onChange={set('subject')}>
                    <option value="">Select a topic</option>
                    <option>Job opportunity</option>
                    <option>Freelance project</option>
                    <option>Collaboration</option>
                    <option>Just saying hi</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label>Message *</label>
                  <textarea placeholder="Tell me what's on your mind..." value={f.message} onChange={set('message')} required />
                </div>
                <button type="submit" className="btn btn-forest" style={{ width:'100%', justifyContent:'center' }} disabled={loading}>
                  {loading ? 'Sending...' : '→ Send Message'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}