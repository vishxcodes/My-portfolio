import { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const CATEGORIES = [
  {
    icon: '💻',
    title: 'Languages',
    subtitle: 'Programming Languages',
    color: '#00f5ff',
    skills: [
      { name: 'JavaScript',  level: 85 },
      { name: 'C++',         level: 78 },
      { name: 'Python',      level: 55, note: 'Learning' },
    ],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    subtitle: 'Server & API Engineering',
    color: '#7c3aed',
    skills: [
      { name: 'Node.js',         level: 85 },
      { name: 'Express.js',      level: 83 },
      { name: 'REST APIs',       level: 88 },
      { name: 'JWT Auth',        level: 80 },
      { name: 'Socket.io',       level: 72 },
    ],
  },
  {
    icon: '🗄️',
    title: 'Database',
    subtitle: 'Data Storage & Modeling',
    color: '#00e5a0',
    skills: [
      { name: 'MongoDB',   level: 82 },
      { name: 'Mongoose',  level: 85 },
    ],
  },
  {
    icon: '🧠',
    title: 'CS Concepts',
    subtitle: 'Core Engineering',
    color: '#f059da',
    skills: [
      { name: 'Data Structures & Algorithms', level: 78 },
      { name: 'OOP',                          level: 82 },
      { name: 'Database Design',              level: 76 },
      { name: 'Auth & Authorization',         level: 80 },
      { name: 'Problem Solving',              level: 85 },
    ],
  },
];

const TECH_BADGES = [
  'Git', 'GitHub', 'Postman', 'VS Code',
  'MERN Stack', 'TF-IDF', 'Gemini API',
  'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib',
  'JWT', 'RBAC', 'REST', 'MVC',
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.skills__category');
    cards?.forEach((c) => observer.observe(c));

    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills__header">
        <p className="section-label reveal">Skills &amp; Expertise</p>
        <h2 className="section-title reveal">Technical Skill Set</h2>
        <p className="reveal" style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8 }}>
          Technologies and tools I use to build backend systems, REST APIs, and data-driven applications.
        </p>
      </div>

      <div className="skills__grid">
        {CATEGORIES.map((cat, idx) => (
          <div
            key={cat.title}
            className="skills__category reveal"
            style={{
              '--category-color': cat.color,
              transitionDelay: `${idx * 0.1}s`,
            }}
          >
            <div className="skills__cat-header">
              <div className="skills__cat-icon">{cat.icon}</div>
              <div>
                <div className="skills__cat-title">{cat.title}</div>
                <div className="skills__cat-subtitle">{cat.subtitle}</div>
              </div>
            </div>

            <div className="skills__items">
              {cat.skills.map((skill, si) => (
                <div key={skill.name} className="skills__item">
                  <div className="skills__item-header">
                    <span className="skills__item-name">
                      {skill.name}
                      {skill.note && (
                        <span style={{
                          marginLeft: 8,
                          fontSize: '0.65rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--accent-cyan)',
                          border: '1px solid rgba(0,245,255,0.3)',
                          borderRadius: '100px',
                          padding: '2px 7px',
                          verticalAlign: 'middle',
                        }}>{skill.note}</span>
                      )}
                    </span>
                    <span className="skills__item-level">{skill.level}%</span>
                  </div>
                  <div className="skills__bar">
                    <div
                      className="skills__bar-fill"
                      style={{
                        width: `${skill.level}%`,
                        transitionDelay: `${si * 0.08 + 0.3}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tools & Concepts badges */}
      <div style={{ maxWidth: 1200, margin: '24px auto 0', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}>
          Tools &amp; Concepts
        </p>
      </div>
      <div className="skills__badges">
        {TECH_BADGES.map((badge) => (
          <span key={badge} className="skills__badge">{badge}</span>
        ))}
      </div>
    </section>
  );
}
