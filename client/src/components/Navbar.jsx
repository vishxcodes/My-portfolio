import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const NAV_LINKS = [
  { label: '01. About',    href: '#about'   },
  { label: '02. Skills',  href: '#skills'  },
  { label: '03. Projects',href: '#projects'},
  { label: '04. Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <a className="navbar__logo" href="#hero">
          &lt;<span>vb</span> /&gt;
        </a>

        {/* Desktop links */}
        <ul className="navbar__links" aria-label="Site sections">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a
          className="navbar__cta"
          href="https://drive.google.com/file/d/1adXllE_ob8LODHDaQpXc4FNuqy9THf8z/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          id="navbar-resume-btn"
        >
          Resume ↗
        </a>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          id="mobile-menu-toggle"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={handleNavClick}>{link.label}</a>
        ))}
        <a
          href="https://drive.google.com/file/d/1adXllE_ob8LODHDaQpXc4FNuqy9THf8z/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleNavClick}
          style={{ color: 'var(--accent-cyan)' }}
        >
          Resume ↗
        </a>
      </div>
    </header>
  );
}
