const projects = [
  {
    tag: 'Emprendimiento',
    icon: '👩‍🍳',
    title: 'Mujeres Cabeza de Hogar',
    description:
      'Capacitación y acompañamiento psicosocial a 50 madres cabeza de familia en administración, liderazgo, emprendimiento y creación de empresa, con miras a mejorar sus condiciones socioeconómicas.',
    meta: [['50', 'beneficiarias'], ['160h', 'formación']],
  },
  {
    tag: 'Producción',
    icon: '🧵',
    title: 'Confecciones y Diseño de Modas',
    description:
      'Formación técnica en confección y diseño de ropa para mujeres emprendedoras, promoviendo la creación de microempresas y cooperativas de trabajo asociativo.',
    meta: [['50', 'mujeres'], ['160h', 'taller']],
  },
  {
    tag: 'Alimentación',
    icon: '🥖',
    title: 'Panadería y Producción de Alimentos',
    description:
      'Capacitación en manipulación de alimentos, panadería, bizcochería y producción de pan de arroz, generando nuevas fuentes de ingreso para las familias.',
    meta: [['50', 'familias'], ['SENA', 'certificación']],
  },
  {
    tag: 'Seguridad alimentaria',
    icon: '🍎',
    title: 'Banco de Alimentos y Ropa',
    description:
      'Programa de seguridad alimentaria para familias en situación de pobreza extrema. Recibimos donaciones de empresas, comercios y particulares para su distribución periódica.',
    meta: [['100', 'familias meta'], ['0-2', 'estratos']],
  },
  {
    tag: 'Niñez y juventud',
    icon: '🎨',
    title: 'Ludotek y Prevención',
    description:
      'Espacios lúdicos, recreativos y culturales para niños, niñas y adolescentes, como estrategia de prevención del consumo de sustancias psicoactivas.',
    meta: [['+500', 'NNA'], ['Talleres', 'permanentes']],
  },
  {
    tag: 'Bienestar',
    icon: '👴',
    title: 'Universidad del Adulto Mayor',
    description:
      'Programa integral de recreación, deporte, arte y emprendimiento para adultos mayores de 60 años, fortaleciendo su autoestima, autonomía y participación comunitaria.',
    meta: [['60-90', 'años'], ['Inclusión', 'social']],
  },
  {
    tag: 'En formulación',
    icon: '🎓',
    title: 'Instituto Técnico y Tecnológico',
    description:
      'Propuesta para la creación de una corporación técnica y tecnológica que forme talento humano competente, respondiendo a las necesidades reales del sector productivo.',
    meta: [['Diagnóstico', 'en curso'], ['Villavicencio', 'Meta']],
  },
  {
    tag: 'Cultura',
    icon: '🎭',
    title: 'Cultura, Arte y Convivencia',
    description:
      'Eventos artísticos, danzas, teatro, tamboras y grupos musicales que rescatan la identidad cultural del Meta y fortalecen la convivencia ciudadana.',
    meta: [['20', 'grupos'], ['Eventos', 'regionales']],
  },
];

export default function Proyectos() {
  return (
    <section className="projects" id="proyectos">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Nuestros programas</span>
          <h2>Proyectos que siembran oportunidades</h2>
          <p>
            Cada programa responde a una necesidad identificada junto a la comunidad de
            la Comuna 7 de Villavicencio.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article className="card reveal" key={i}>
              <div className="card-image">
                <span className="card-tag">{p.tag}</span>
                {p.icon}
              </div>
              <div className="card-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="card-meta">
                  {p.meta.map(([strong, label], j) => (
                    <span key={j}>
                      <strong>{strong}</strong> {label}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}