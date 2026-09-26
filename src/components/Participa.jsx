const formas = [
  {
    icon: '💛',
    title: 'Donaciones',
    text: 'Aportes económicos, en especie o alimentos que se convierten en oportunidades para las familias.',
  },
  {
    icon: '🤝',
    title: 'Voluntariado',
    text: 'Suma tu tiempo y talento a nuestros talleres, jornadas y programas comunitarios.',
  },
  {
    icon: '🏢',
    title: 'Alianzas empresariales',
    text: 'Empresas que quieran aportar a la responsabilidad social y vincular a sus colaboradores.',
  },
  {
    icon: '📚',
    title: 'Formación',
    text: 'Profesionales que quieran dictar talleres, charlas o mentorías a nuestras beneficiarias.',
  },
];

export default function Participa() {
  return (
    <section className="participa">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Súmate</span>
          <h2>Formas de participar</h2>
          <p>Hay muchas maneras de aportar a la misión de PROYECFUN. Encuentra la tuya.</p>
        </div>

        <div className="participa-grid">
          {formas.map((f, i) => (
            <div className="participa-card reveal" key={i}>
              <div className="participa-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}