export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <a href="#" className="logo">
              <img src="/logo.jpg" alt="Fundación PROYECFUN" className="logo-img" />
              <span className="logo-text">
                <strong>PROYECFUN</strong>
                <span>NIT 901907358-3</span>
              </span>
            </a>
            <p>
              Fundación Proyectos Deportivos, Socioculturales y Medioambientales.
              Trabajamos por el desarrollo integral de comunidades vulnerables en
              Villavicencio, Meta.
            </p>
            <p className="motto">"Generamos cultura, construimos progreso"</p>
            <div className="social" style={{ marginTop: 20 }}>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="WhatsApp">WA</a>
              <a href="#" aria-label="YouTube">YT</a>
            </div>
          </div>

          <div>
            <h4>Fundación</h4>
            <ul className="footer-links">
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#proyectos">Programas</a></li>
              <li><a href="#impacto">Impacto</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4>Programas</h4>
            <ul className="footer-links">
              <li><a href="#proyectos">Mujeres cabeza de hogar</a></li>
              <li><a href="#proyectos">Banco de alimentos</a></li>
              <li><a href="#proyectos">Adulto mayor</a></li>
              <li><a href="#proyectos">Niñez y juventud</a></li>
            </ul>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul className="footer-links">
              <li><a href="mailto:proyecfuncol@gmail.com">proyecfuncol@gmail.com</a></li>
              <li><a href="tel:+573152779260">315 277 9260</a></li>
              <li>Villavicencio, Meta</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Fundación PROYECFUN. Todos los derechos reservados.</span>
          <span><a target="_blank" href="https://drive.google.com/file/d/17WbB9hXL_42mnYl-eeoi1hGMg77jIPTb/view">Código de ética y buen gobierno</a></span>
          <span>Comuna 10 · Villavicencio · Meta · Colombia</span>
        </div>
      </div>
    </footer>
  );
}