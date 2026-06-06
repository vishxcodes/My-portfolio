import { useEffect, useRef, useState } from 'react';
import '../styles/Hero.css';

const ROLES = [
  'Backend Developer',
  'MERN Stack Engineer',
  'REST API Engineer',
  'DSA Problem Solver',
  'Computer Engg. Student',
];

function useTypewriter(words, typeSpeed = 80, deleteSpeed = 50, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx]     = useState(0);
  const [phase, setPhase]         = useState('typing'); // typing | pausing | deleting

  useEffect(() => {
    const current = words[wordIdx];

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typeSpeed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('deleting'), pause);
        return () => clearTimeout(t);
      }
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed);
        return () => clearTimeout(t);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setPhase('typing');
      }
    }
  }, [displayed, phase, wordIdx, words, typeSpeed, deleteSpeed, pause]);

  return displayed;
}

export default function Hero() {
  const heroRef = useRef(null);
  const typed   = useTypewriter(ROLES);

  // Mouse parallax on hero content
  useEffect(() => {
    const hero    = heroRef.current;
    const content = hero?.querySelector('.hero__content');
    if (!content) return;

    const onMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width  - 0.5;
      const yPct = (e.clientY - rect.top)  / rect.height - 0.5;
      content.style.transform = `translate(${xPct * -14}px, ${yPct * -10}px)`;
    };

    const onMouseLeave = () => {
      content.style.transform = 'translate(0, 0)';
    };

    hero.addEventListener('mousemove', onMouseMove);
    hero.addEventListener('mouseleave', onMouseLeave);

    return () => {
      hero.removeEventListener('mousemove', onMouseMove);
      hero.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero__bg">
        <div className="hero__spotlight" />
      </div>

      <div className="hero__content" style={{ transition: 'transform 0.1s linear' }}>
        <p className="hero__greeting">Hi, I'm Vishesh Bangotra 👋</p>

        <h1 className="hero__name">
          Backend Developer &<br />
          <span className="highlight">CS Student</span>
        </h1>

        <div className="hero__title">
          <span className="hero__title-static">I build&nbsp;</span>
          <span className="hero__typewriter">{typed}</span>
        </div>

        <p className="hero__description">
          Computer Engineering student at Fr. CRCE, Mumbai (2027). I build scalable
          backend systems, REST APIs, and data-driven web applications using
          Node.js, Express.js, and MongoDB. Passionate about software engineering,
          problem solving, and building real-world solutions.
        </p>

        <div className="hero__cta-group">
          <a href="#projects" className="btn-primary" id="hero-view-work-btn">
            View Projects
            <span>↓</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1adXllE_ob8LODHDaQpXc4FNuqy9THf8z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            id="hero-resume-btn"
          >
            View Resume ↗
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">7.89</span>
            <span className="hero__stat-label">CGPA</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">3+</span>
            <span className="hero__stat-label">Projects</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">2027</span>
            <span className="hero__stat-label">Graduating</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">MERN</span>
            <span className="hero__stat-label">Stack</span>
          </div>
        </div>
      </div>

      {/* Left socials */}
      <div className="hero__socials" aria-label="Social links">
        <a href="https://github.com/vishxcodes" target="_blank" rel="noopener noreferrer" className="hero__social-icon" aria-label="GitHub" id="hero-github-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="https://linkedin.com/in/vishesh-bangotra" target="_blank" rel="noopener noreferrer" className="hero__social-icon" aria-label="LinkedIn" id="hero-linkedin-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="mailto:visheshbangotra1@gmail.com" className="hero__social-icon" aria-label="Email" id="hero-email-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
      </div>

      {/* Right scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
