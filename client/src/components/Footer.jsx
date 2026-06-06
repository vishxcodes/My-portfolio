import '../styles/Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">&lt;vishesh bangotra /&gt;</div>

        <nav aria-label="Footer navigation">
          <ul className="footer__nav">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="footer__divider" />

        <p className="footer__copy">
          © {year} Vishesh Bangotra · Computer Engineering Student, Fr. CRCE Mumbai
          <span className="heart" aria-hidden="true"> ♥ </span>
        </p>
      </div>
    </footer>
  );
}
