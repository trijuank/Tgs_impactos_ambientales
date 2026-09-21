import './Hero.css';

export function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="hero-inner">
        <p className="hero-tag">Teoría General de Sistemas · Grupo 6</p>
        <h1>El río que carga lo que no vemos</h1>
        <p className="hero-lede">
          Un tramo urbano de río recibe, todos los días, lo que una ciudad descarga en sus
          alcantarillas. Este sitio aplica los 19 principios de la Teoría General de Sistemas al
          sistema de contaminación hídrica por vertimiento de aguas residuales domésticas e
          industriales.
        </p>

        <dl className="hero-readout">
          <div>
            <dt>Sistema elegido</dt>
            <dd>Contaminación del agua por vertimiento de aguas residuales en un río urbano</dd>
          </div>
          <div>
            <dt>Tipo</dt>
            <dd>Socio-técnico-ambiental, abierto y dinámico</dd>
          </div>
          <div>
            <dt>Caso de referencia</dt>
            <dd>Río Cauca a su paso por zona urbana (Popayán, Cauca)</dd>
          </div>
        </dl>
        <figure className="hero-figure">
          <img
            src="/img/ilustracion_sistema.jpg"
            alt="Vista del río Cauca a su paso por la zona urbana de Popayán"
            loading="lazy"
          />
          <figcaption>Río Cauca a su paso por zona urbana.</figcaption>
        </figure>
      </div>

      <svg className="hero-divider" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,40 L1440,90 L0,90 Z"
          fill="var(--paper)"
        />
      </svg>
    </header>
  );
}
