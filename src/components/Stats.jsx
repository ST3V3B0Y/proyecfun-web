import { useEffect, useRef } from 'react';

const stats = [
  { count: 50,  label: 'Mujeres cabeza de hogar capacitadas' },
  { count: 100, label: 'Familias beneficiadas en alimentos' },
  { count: 7,   label: 'Programas en ejecución' },
  { count: 1,   label: 'Comuna intervenida (Comuna 10)' },
];

export default function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const counters = sectionRef.current.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = +el.dataset.count;
          const duration = 1600;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent =
              Math.floor(target * eased).toLocaleString('es-CO') +
              (target >= 10 ? '+' : '');
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" id="impacto" ref={sectionRef}>
      <div className="container">
        <div className="stats-box">
          {stats.map((s, i) => (
            <div className="stat reveal" key={i}>
              <div className="stat-number" data-count={s.count}>0</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}