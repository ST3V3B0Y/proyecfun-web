import { useForm, ValidationError } from '@formspree/react';

export default function Contacto() {

  const [state, handleSubmit, reset] = useForm('xkjgqejj');

  if (state.succeeded) {
    return (
      <section className="contact" id="contacto">
        <div className="container">
          <div className="form" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <h2 style={{ marginBottom: 16 }}>¡Gracias por escribirnos!</h2>
            <p style={{ color: 'var(--muted)', marginBottom: 24 }}>
              Hemos recibido tu mensaje y te responderemos lo antes posible.
            </p>
            <button className="btn btn-solid" onClick={reset}>
              Enviar otro mensaje
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact" id="contacto">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <span className="eyebrow">Contáctanos</span>
          <h2>Hablemos</h2>
          <p>¿Quieres apoyar, aliarte o conocer más sobre nuestros programas? Escríbenos.</p>

          <div className="info-item">
            <div className="info-icon">✉</div>
            <div>
              <strong>Correo</strong>
              <span>
                <a href="mailto:proyecfuncol@gmail.com">proyecfuncol@gmail.com</a>
              </span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">☎</div>
            <div>
              <strong>PBX / WhatsApp</strong>
              <span>
                <a href="tel:+573152779260">315 277 9260</a>
              </span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">⌂</div>
            <div>
              <strong>Ubicación</strong>
              <span>Comuna 7 · Villavicencio, Meta · Colombia</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📄</div>
            <div>
              <strong>NIT</strong>
              <span>901907358-3</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">👤</div>
            <div>
              <strong>Representante legal</strong>
              <span>José David Jaramillo Rodríguez</span>
            </div>
          </div>
        </div>

        <form className="form reveal" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              required
            />
            <ValidationError field="nombre" errors={state.errors} />
          </div>

          <div className="field">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tucorreo@ejemplo.com"
              required
            />
            <ValidationError field="email" errors={state.errors} />
          </div>

          <div className="field">
            <label htmlFor="asunto">Asunto</label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              placeholder="Donación, alianza, voluntariado..."
            />
          </div>

          <div className="field">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Cuéntanos cómo quieres apoyar..."
              required
            ></textarea>
            <ValidationError field="mensaje" errors={state.errors} />
          </div>

          <button type="submit" className="btn btn-solid" disabled={state.submitting}>
            {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
}