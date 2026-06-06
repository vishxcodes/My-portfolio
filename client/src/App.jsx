import './styles/index.css';
import CustomCursor      from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar            from './components/Navbar';
import Hero              from './components/Hero';
import About             from './components/About';
import Skills            from './components/Skills';
import Projects          from './components/Projects';
import Contact           from './components/Contact';
import Footer            from './components/Footer';

export default function App() {
  return (
    <>
      {/* Cursor */}
      <CustomCursor />

      {/* Particle canvas behind everything */}
      <ParticleBackground />

      {/* Site layout */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero    />
          <About   />
          <Skills  />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
