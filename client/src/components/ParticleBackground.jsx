import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let width, height, particles, rafId;
    let mouse = { x: 0, y: 0 };

    const PARTICLE_COUNT = 80;
    const MAX_DIST = 130;
    const CYAN  = '0, 245, 255';
    const PURPLE = '124, 58, 237';

    class Particle {
      constructor() { this.reset(true); }

      reset(init = false) {
        this.x  = Math.random() * width;
        this.y  = init ? Math.random() * height : height + 10;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = -(Math.random() * 0.4 + 0.1);
        this.radius = Math.random() * 1.5 + 0.5;
        this.alpha  = Math.random() * 0.5 + 0.1;
        this.color  = Math.random() > 0.5 ? CYAN : PURPLE;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Mouse repel
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          this.x += (dx / dist) * 0.8;
          this.y += (dy / dist) * 0.8;
        }

        if (this.y < -10) this.reset();
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.fill();
      }
    }

    const init = () => {
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${CYAN}, ${alpha})`;
            ctx.lineWidth   = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      rafId = requestAnimationFrame(loop);
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onResize = () => {
      init();
    };

    init();
    loop();
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.7,
      }}
    />
  );
}
