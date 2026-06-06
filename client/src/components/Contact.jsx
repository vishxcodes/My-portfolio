import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus]   = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    setStatus('loading');
    try {
      await axios.post('/api/contact', form, { timeout: 5000 });
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact__inner">
        {/* Left info */}
        <div className="contact__info">
          <p className="section-label reveal">Contact</p>
          <h2 className="section-title reveal">
            Let's connect &amp;<br />
            <span className="gradient-text">build together</span>
          </h2>
          <p className="contact__tagline reveal">
            I'm actively looking for <strong style={{color:'var(--text-primary)'}}>internship opportunities</strong> and
            open to collaborating on backend projects, APIs, or full-stack MERN applications.
            Drop me a message and I'll respond within 24 hours.
          </p>

          <div className="contact__details reveal">
            <div className="contact__detail">
              <div className="contact__detail-icon">📧</div>
              <div className="contact__detail-text">
                <span className="contact__detail-label">Email</span>
                <span className="contact__detail-value">visheshbangotra1@gmail.com</span>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon">📍</div>
              <div className="contact__detail-text">
                <span className="contact__detail-label">Location</span>
                <span className="contact__detail-value">Mumbai, India</span>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon">🏫</div>
              <div className="contact__detail-text">
                <span className="contact__detail-label">College</span>
                <span className="contact__detail-value">Fr. CRCE, Mumbai</span>
              </div>
            </div>
          </div>

          <div className="contact__socials reveal">
            <a href="https://github.com/vishxcodes" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="GitHub" id="contact-github">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/vishesh-bangotra" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="LinkedIn" id="contact-linkedin">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:visheshbangotra1@gmail.com" className="contact__social-link" aria-label="Email" id="contact-email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            <a href="https://drive.google.com/file/d/1adXllE_ob8LODHDaQpXc4FNuqy9THf8z/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="View Resume" id="contact-resume" title="View Resume">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="contact__form-wrapper reveal-right">
          {status === 'success' ? (
            <div className="form__success">
              <div className="form__success-icon">🎉</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              <button
                className="btn-secondary"
                onClick={() => setStatus('idle')}
                style={{ marginTop: '8px' }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div>
                <h3 className="contact__form-title">Send a Message</h3>
                <p className="contact__form-sub">Fill out the form and I'll respond ASAP.</p>
              </div>

              <div className="form__row">
                <div className="form__group">
                  <label className="form__label" htmlFor="contact-name">Name *</label>
                  <input
                    id="contact-name"
                    className="form__input"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form__group">
                  <label className="form__label" htmlFor="contact-email">Email *</label>
                  <input
                    id="contact-email"
                    className="form__input"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  className="form__input"
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  className="form__textarea"
                  name="message"
                  placeholder="Tell me about your project, idea, or just say hi..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {(status === 'error' || errorMsg) && (
                <p className="form__error-msg">⚠️ {errorMsg}</p>
              )}

              <button
                type="submit"
                className="form__submit"
                id="contact-submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <span style={{
                      width: 16, height: 16,
                      border: '2px solid rgba(0,0,0,0.3)',
                      borderTop: '2px solid #000',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite',
                      display: 'inline-block',
                    }} />
                    Sending...
                  </>
                ) : (
                  <>Send Message ✉️</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
