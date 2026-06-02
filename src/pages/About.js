import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal, Footer } from '../App';
import heroImg from '../assets/jade_ny.jpg';
const PORTRAIT = heroImg ;
const EXP = [
  { date:'Jan 2025–Present', title:'Software Engineer Intern', org:'FDIC — Federal Deposit Insurance Corporation', desc:'Supporting enterprise HR systems with SQL, UAT testing, and system debugging during legacy migration (WebTA → GovTA). Built data validation workflows in a regulated federal environment.' },
  { date:'Feb 2024–Jun 2025', title:'Observatory Outreach Coordinator', org:'CSST, UMBC', desc:'Led public astronomy programs at the UMBC Observatory in collaboration with NASA Goddard. Managed volunteers, organised large-scale events, and translated complex science for diverse audiences.' },
  { date:'Aug 2021–May 2022', title:'UX/UI Intern', org:'Amailse, Remote', desc:'Hands-on Figma prototyping and user flow design alongside senior designers. Focused on modern design trends, typography, and effective UX patterns.' },
  { date:'May 2020–May 2021', title:'Help Desk Intern', org:'Dulaney High School', desc:'Troubleshot hardware, network, and device issues. Reimaged student devices after a ransomware incident — first experience with security response at scale.' },
];
const SKILLS = [
  {w:'Python',l:'l4'},{w:'React',l:'l3'},{w:'AI/LLMs',l:'l4'},{w:'TypeScript',l:'l2'},
  {w:'Computer Vision',l:'l3'},{w:'FastAPI',l:'l2'},{w:'Vue.js',l:'l3'},{w:'SQL',l:'l2'},
  {w:'Docker',l:'l2'},{w:'REST APIs',l:'l3'},{w:'Linux',l:'l1'},{w:'Git',l:'l1'},
  {w:'UX/UI',l:'l3'},{w:'C/C++',l:'l2'},{w:'Data Analysis',l:'l2'},{w:'Node.js',l:'l2'},
  {w:'TensorFlow',l:'l1'},{w:'OpenCV',l:'l2'},{w:'Figma',l:'l3'},
];

export default function About() {
  useReveal();
  return (
    <main>
      {/* Banner */}
      <section className="about-banner">
        <p className="fu" style={{ fontSize:'.7rem', fontWeight:500, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--mist)', marginBottom:20 }}>My story</p>
        <h1 className="fu d1"><em>About</em><br /><span>Jade.</span></h1>
        {/* Botanical decoration */}
        <svg className="about-banner-leaf" width="220" height="280" viewBox="0 0 200 300" fill="none">
          <path d="M100 10 Q150 70 140 140 Q130 210 80 240 Q100 170 100 10Z" fill="var(--sage)" opacity=".5" />
          <path d="M100 10 Q50 70 60 140 Q70 210 120 240 Q100 170 100 10Z" fill="var(--moss)" opacity=".3" />
          <line x1="100" y1="10" x2="100" y2="240" stroke="var(--forest)" strokeWidth="1.5" opacity=".25" />
        </svg>
      </section>

      {/* Definition card — personality touch from old design */}
      <div className="definition-card rev">
        <p className="def-name">Jade Dorsainvil</p>
        <p className="def-phonetic">/jād door-sain-ville/</p>
        <p className="def-pos">noun</p>
        <p className="def-body">
          An industrious engineer learning to create, build, and solve anything set in front of her path.
          Powered by curiosity, coffee, and an electric guitar.
        </p>
        <div className="def-similar">
          <p className="def-similar-label">Similar</p>
          <div className="def-similar-tags">
            <span>Observant</span>
            <span>Storyteller</span>
            <span>Curious</span>
            <span>Builder</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="about-grid rev">
        <div className="about-img-col">
          <div className="iz"><img src={PORTRAIT} alt="Jade Dorsainvil" loading="lazy" /></div>
          <div className="about-sticker">oh hey,<br />that's me!!</div>
          <div className="about-sticker-2">Maryland 📍</div>
        </div>
        <div className="about-text-col">
          <p className="about-quote">
            "Just a girl who loves tech — and happens to build seriously cool things with it."
          </p>
          <p>This is where my interests meet my work. I write and build around full stack engineering and AI development, shaped by a wide curiosity that spans music, travel, astronomy, and advanced computing.</p>
          <p>I graduated from UMBC in December 2025 with a B.S. in Computer Science (AI/ML track) and a certification in User Experience & Web Development. Currently interning at the FDIC while shipping side projects that push the edges of what's possible.</p>
          <p>My love for programming started at 15 — I took my first CS class in 10th grade and built a game around my favourite anime. That spark never left. Designing and illustrating became hobbies during quarantine, and music has always been playing in the background while I work.</p>
          <p>Usually with a cup of coffee nearby.</p>
          <div className="about-chips">
            {['Maryland, USA','UMBC CS Grad','AI/ML Focus','Guitar 🎸','Coffee ☕','Nature 🌿','Night Coder 🌙','Anime Fan'].map(c => (
              <span key={c} className="about-chip">{c}</span>
            ))}
          </div>
          <div style={{ marginTop:36 }}>
            <Link to="/contact" className="btn btn-forest">→ Let's Connect</Link>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="exp-section">
        <h2 className="exp-section-h rev">Experience</h2>
        {EXP.map((e, i) => (
          <div key={i} className="exp-row rev" style={{ transitionDelay:`${i * 0.08}s` }}>
            <p className="exp-date">{e.date}</p>
            <div className="exp-body">
              <h3>{e.title}</h3>
              <p className="exp-org">{e.org}</p>
              <p>{e.desc}</p>
            </div>
          </div>
        ))}
        <h2 className="exp-section-h rev" style={{ marginTop:56 }}>Education</h2>
        <div className="exp-row rev">
          <p className="exp-date">Aug 2022–Dec 2025</p>
          <div className="exp-body">
            <h3>B.S. Computer Science — AI/ML Track</h3>
            <p className="exp-org">University of Maryland, Baltimore County</p>
            <p>Machine Learning, Computer Vision, Software Engineering, Operating Systems</p>
          </div>
        </div>
        <div className="exp-row rev">
          <p className="exp-date">Aug 2022–Dec 2025</p>
          <div className="exp-body">
            <h3>Upper-Level MHEC Certificate</h3>
            <p className="exp-org">University of Maryland, Baltimore County</p>
            <p>User Experience, Web and Mobile Development</p>
          </div>
        </div>
      </section>

      {/* Skills cloud */}
      <section className="skills-section">
        <p className="skills-label">things I work with</p>
        <div className="skills-cloud">
          {SKILLS.map(({ w, l }) => (
            <span key={w} className={`sk ${l}`}>{w}</span>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
