import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#" className="logo">
          <img src="/logo.jpg" alt="Fundación PROYECFUN" className="logo-img" />
          <span className="logo-text">
            <strong>PROYECFUN</strong>
            <span>Sembramos ideas, cosechamos futuro</span>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#nosotros" onClick={closeMenu}>Nosotros</a></li>
            <li><a href="#proyectos" onClick={closeMenu}>Programas</a></li>
            <li><a href="#impacto" onClick={closeMenu}>Impacto</a></li>
            <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
          </ul>
        </nav>

        <a href="#donar" className="btn btn-primary header-cta">Apoyar</a>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}