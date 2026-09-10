import { systemElements, systemFacts } from '../data/system';
import { SectionHeading } from './SectionHeading';
import './SystemSection.css';

export function SystemSection() {
  return (
    <section id="sistema" className="system-section">
      <div className="wrap">
        <SectionHeading km="Km 0.4" label="El sistema" title="Un río urbano bajo presión constante">
          El sistema escogido es el <strong>tramo de un río que atraviesa una zona urbana</strong> y
          recibe, de forma continua, el vertimiento de aguas residuales domésticas, industriales y
          de escorrentía agrícola. Es un sistema mixto: natural en su base (el cuerpo de agua y su
          biota), pero profundamente modificado por la infraestructura y las decisiones humanas que
          vierten en él.
        </SectionHeading>

        <div className="facts-grid">
          {systemFacts.map((fact) => (
            <div className="fact-card" key={fact.label}>
              <h4>{fact.label}</h4>
              <p>{fact.detail}</p>
            </div>
          ))}
        </div>

        <h3 className="elements-title">Elementos y actores del sistema</h3>
        <div className="elements-grid">
          {systemElements.map((el) => (
            <div className={`element-card role-${el.role}`} key={el.name}>
              <h4>{el.name}</h4>
              <p>{el.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
