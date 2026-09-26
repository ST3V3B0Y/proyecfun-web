export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">Villavicencio · Comuna 7 · Meta</span>
          <h1>
            Generamos cultura,<br />
            <em>construimos progreso</em>
          </h1>
          <p>
            Somos una fundación sin ánimo de lucro que busca investigar, orientar y capacitar a la comunidad, fomentando la conciencia de su papel en el desarrollo del país. Creamos programas de formación integral que impulsan el talento y promueven la movilidad social
          </p>
          <div className="hero-actions">
            <a href="#proyectos" className="btn btn-primary">Ver nuestros programas</a>
            <a href="#nosotros" className="btn btn-outline">Conocer la fundación</a>
          </div>
        </div>

        <div className="hero-logo">
          <img src="/logo.jpg" alt="Logo Fundación PROYECFUN" />
        </div>
      </div>
    </section>
  );
}