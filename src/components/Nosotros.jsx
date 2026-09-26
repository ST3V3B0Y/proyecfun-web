export default function Nosotros() {
  const bullets = [
    'Transparencia en la gestión de recursos',
    'Programas con impacto social medible',
    'Trabajo articulado con la comunidad',
    'Enfoque en sostenibilidad y medio ambiente',
  ];

  return (
    <section className="about" id="nosotros">
      <div className="container about-grid">
        <div className="about-text reveal">
          <span className="eyebrow">Quiénes somos</span>
          <h2>Una fundación que transforma comunidades</h2>
          <p>
            La <strong>Fundación Proyectos Deportivos, Socioculturales y Medioambientales PROYECFUN</strong>{' '}
            es una entidad sin ánimo de lucro, legalizada ante la Cámara de Comercio de
            Villavicencio y la DIAN (NIT 901907358-3), que trabaja junto a comunidades
            vulnerables de la ciudad de Villavicencio, Meta.
          </p>
          <p>
            Articulamos acciones con entidades como el <strong>SENA</strong>, <strong>ICBF</strong>,
            <strong> Policía Nacional</strong> y líderes comunales, para generar alternativas
            reales frente a las problemáticas sociales que afectan a nuestra región.
          </p>

          <div className="mv-grid">
            <div className="mv-card">
              <h4>Misión</h4>
              <p>
                Apoyar e impulsar programas de desarrollo social, integración familiar,
                educación, emprendimiento y preservación del medio ambiente.
              </p>
            </div>
            <div className="mv-card">
              <h4>Visión</h4>
              <p>
                Ser líderes en promover programas de desarrollo social de alto impacto
                en la población colombiana de escasos recursos.
              </p>
            </div>
          </div>
        </div>

        <div className="about-visual reveal">
          <h3>
            "Un armonioso crecimiento de la comunidad depende del progreso de los
            individuos que la componen."
          </h3>
          <ul>
            {bullets.map((b, i) => (
              <li key={i}>
                <span className="check">✓</span> {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}