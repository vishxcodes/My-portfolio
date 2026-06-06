import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

// Real projects — used as fallback when API / MongoDB is unreachable
const FALLBACK_PROJECTS = [
  {
    _id: '1',
    title: 'InternGuide',
    description:
      'A MERN-stack internship and placement platform connecting students, mentors, and administrators. Features JWT-based role access, real-time chat, a TF-IDF recommendation engine for mentor matching, and an analytics dashboard for administrators.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'React'],
    githubUrl: 'https://github.com/Glanisha/InternGuide',
    liveUrl: '',
    featured: true,
    tags: ['REST API', 'Authentication', 'Real-Time', 'Recommendation System'],
  },
  {
    _id: '2',
    title: 'FitPulse',
    description:
      'A health and nutrition platform built for diabetes and PCOS/PCOD management. Includes personalized meal planning, nutrition tracking, medication reminders, food image analysis, and AI-powered diet recommendations via the Gemini API.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'React'],
    githubUrl: 'https://github.com/vishxcodes/fitPulse',
    liveUrl: '',
    featured: true,
    tags: ['AI Integration', 'Health Tech', 'REST API', 'MongoDB'],
  },
  {
    _id: '3',
    title: 'THE DEEP',
    description:
      'A machine learning project focused on predicting Biochemical Oxygen Demand (BOD) levels in water bodies. Involves data cleaning, feature engineering, regression model training with hyperparameter tuning, and comprehensive data visualization.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    githubUrl: 'https://github.com/vishxcodes',
    liveUrl: '',
    featured: false,
    tags: ['Machine Learning', 'Regression', 'Data Science', 'Visualization'],
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading]   = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/api/projects', { timeout: 3000 });
        setProjects(res.data.data.length ? res.data.data : FALLBACK_PROJECTS);
      } catch {
        setProjects(FALLBACK_PROJECTS);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [projects]);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects__header">
        <div>
          <p className="section-label reveal">Projects</p>
          <h2 className="section-title reveal">Things I've Built</h2>
          <p className="reveal" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: 4 }}>
            Real-world applications built with backend-first thinking.
          </p>
        </div>
        <a
          href="https://github.com/vishxcodes"
          target="_blank"
          rel="noopener noreferrer"
          className="projects__view-all reveal"
          id="projects-view-all-btn"
        >
          View all on GitHub ↗
        </a>
      </div>

      <div className="projects__grid">
        {loading ? (
          <div className="projects__loading">
            <div className="projects__spinner" />
            <span>Loading projects...</span>
          </div>
        ) : (
          projects.map((project, idx) => (
            <div key={project._id} className="reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <ProjectCard project={project} index={idx} />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
