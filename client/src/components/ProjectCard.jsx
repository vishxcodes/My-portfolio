import { useRef, useEffect } from 'react';
import '../styles/Projects.css';

// Project type → color coding
const TYPE_COLORS = {
  'MERN Stack':  '#00f5ff',
  'Machine Learning': '#f059da',
  'Health Tech': '#00e5a0',
  default:       '#7c3aed',
};

const PROJECT_ICONS = ['🚀', '💪', '🔬', '⚙️', '🔐', '📊', '🌐', '🤖'];

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  // 3-D tilt effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMouseMove = (e) => {
      const rect    = card.getBoundingClientRect();
      const x       = e.clientX - rect.left;
      const y       = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / rect.height) * -6;
      const rotateY = ((x - rect.width  / 2) / rect.width)  *  6;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    };

    const onMouseLeave = () => {
      card.style.transform = '';
    };

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
    return () => {
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const icon = PROJECT_ICONS[index % PROJECT_ICONS.length];

  // Pick a gradient based on index
  const gradients = [
    'linear-gradient(135deg, #0a1628 0%, #1a2744 100%)',
    'linear-gradient(135deg, #0d1a0d 0%, #1a3320 100%)',
    'linear-gradient(135deg, #1a0d2e 0%, #2d1458 100%)',
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <article
      ref={cardRef}
      className="project-card"
      style={{ transition: 'transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease' }}
    >
      {/* Banner */}
      <div className="project-card__image">
        <div style={{ width: '100%', height: '100%', background: gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <span style={{ fontSize: '3.5rem', opacity: 0.5 }}>{icon}</span>

          {/* Tech stack preview in banner */}
          <div style={{
            position: 'absolute',
            bottom: 14,
            left: 14,
            display: 'flex',
            gap: 6,
            flexWrap: 'wrap',
          }}>
            {(project.tech || []).slice(0, 3).map((t) => (
              <span key={t} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                padding: '3px 8px',
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '4px',
                color: 'rgba(255,255,255,0.7)',
              }}>{t}</span>
            ))}
          </div>
        </div>
        <div className="project-card__image-overlay">
          <span>{icon}</span>
        </div>
        <span className="project-card__number">0{index + 1}</span>
        {project.featured && (
          <span className="project-card__featured-badge">★ Featured</span>
        )}
      </div>

      {/* Body */}
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        {/* Tags (feature labels) */}
        {project.tags && project.tags.length > 0 && (
          <div className="project-card__tech" style={{ marginBottom: 4 }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                padding: '3px 9px',
                background: 'rgba(0,245,255,0.06)',
                border: '1px solid rgba(0,245,255,0.18)',
                borderRadius: '100px',
                color: 'var(--accent-cyan)',
              }}>{tag}</span>
            ))}
          </div>
        )}

        {/* Full tech stack */}
        <div className="project-card__tech">
          {(project.tech || []).map((t) => (
            <span key={t} className="project-card__tech-tag">{t}</span>
          ))}
        </div>

        <div className="project-card__links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              id={`project-github-${index}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub Repo
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              id={`project-live-${index}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
