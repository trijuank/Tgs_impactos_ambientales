import { references } from '../data/system';
import { SectionHeading } from './SectionHeading';
import './ReferencesSection.css';

export function ReferencesSection() {
  return (
    <section id="referencias" className="references-section">
      <div className="wrap">
        <SectionHeading km="Km 3.9" label="Fuentes consultadas" title="Tres artículos científicos como base de la investigación">
          Publicados en revistas indexadas en los últimos años, sirven de sustento a los ejemplos y
          evidencias usados en la tabla de principios.
        </SectionHeading>

        <ol className="ref-list">
          {references.map((ref) => (
            <li className="ref-item" key={ref.authors}>
              <strong>{ref.authors}</strong> ({ref.year}). {ref.text}
            </li>
          ))}
        </ol>


      </div>
    </section>
  );
}
