import { useEffect, useRef } from 'react';
import '../styles/About.css';

const HIGHLIGHTS = [
  {
    icon: '⚙️',
    title: 'Backend Development',
    desc: 'Building REST APIs, authentication systems, and scalable server-side architectures with Node.js & Express.',
  },
  {
    icon: '🗄️',
    title: 'Database Design',
    desc: 'Designing efficient MongoDB schemas with Mongoose, including indexing and data modeling for real-world apps.',
  },
  {
    icon: '🧠',
    title: 'Data Structures & Algorithms',
    desc: 'Strong foundation in DSA with C++ and JavaScript — competitive programming and problem solving.',
  },
  {
    icon: '🤖',
    title: 'Machine Learning',
    desc: 'Hands-on experience with Python-based ML pipelines — data cleaning, regression models, and visualization.',
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about__grid">
        {/* Image / identity card */}
        <div className="about__image-wrapper reveal-left">
          <div className="about__image-frame">
            <div className="about__image-placeholder">
              <span style={{ filter: 'grayscale(0)' }}>👨‍💻</span>
            </div>
            <div className="about__image-deco" />
          </div>

          {/* College badge */}
          <div className="about__image-badge">
            <div className="about__badge-dot" />
            <div className="about__badge-text">
              <strong>Open to Opportunities</strong>
              Internships &amp; Full-Time Roles
            </div>
          </div>

          {/* Extra info card */}
          <div className="about__info-card reveal">
            <div className="about__info-row">
              <span className="about__info-label">🎓 College</span>
              <span className="about__info-value">Fr. CRCE, Mumbai</span>
            </div>
            <div className="about__info-row">
              <span className="about__info-label">📅 Graduation</span>
              <span className="about__info-value">2027</span>
            </div>
            <div className="about__info-row">
              <span className="about__info-label">📊 CGPA</span>
              <span className="about__info-value">7.89</span>
            </div>
            <div className="about__info-row">
              <span className="about__info-label">🔧 Focus</span>
              <span className="about__info-value">Backend &amp; APIs</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="about__content">
          <p className="section-label reveal">About Me</p>
          <h2 className="section-title reveal">
            Backend-Focused<br />
            <span className="gradient-text">Software Engineer</span>
          </h2>

          <div className="about__bio reveal">
            <p>
              I'm <strong>Vishesh Bangotra</strong>, a Computer Engineering student at{' '}
              <strong>Fr. Conceicao Rodrigues College of Engineering, Mumbai</strong> (Graduating 2027).
              I specialize in <strong>backend development</strong> — building REST APIs, authentication
              systems, and data-driven applications using the <strong>MERN stack</strong>.
            </p>
            <p>
              I've built full-stack projects spanning internship platforms, health-tech apps, and
              machine learning pipelines. I have a strong foundation in{' '}
              <strong>Data Structures &amp; Algorithms</strong> and enjoy tackling complex engineering
              problems with clean, maintainable code.
            </p>
            <p>
              My focus areas include <strong>backend architecture, API design, authentication &amp; authorization</strong>,
              database design, and scalable system development. I'm actively looking for internship
              opportunities where I can contribute and grow.
            </p>
          </div>

          <div className="about__highlights reveal">
            {HIGHLIGHTS.map((h) => (
              <div className="about__highlight-item" key={h.title}>
                <span className="about__highlight-icon">{h.icon}</span>
                <div className="about__highlight-text">
                  <strong>{h.title}</strong>
                  {h.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="about__cta-row reveal">
            <a
              href="https://drive.google.com/file/d/1adXllE_ob8LODHDaQpXc4FNuqy9THf8z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="about-resume-btn"
            >
              View Resume ↗
            </a>
            <a href="#contact" className="btn-secondary" id="about-contact-btn">
              Contact Me →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
