import { reflections } from '../data/system';
import { SectionHeading } from './SectionHeading';
import './ReflectionSection.css';

export function ReflectionSection() {
  return (
    <section id="reflexion" className="reflection-section">
      <div className="wrap">
        <SectionHeading km="Km 3.3" label="Reflexión sistémica" title="Lo que el sistema deja ver, y lo que esconde" />

        <div className="reflect-grid">
          {reflections.map((r) => (
            <article className="reflect-card" key={r.title}>
              <p className="reflect-question">{r.question}</p>
              <h3>{r.title}</h3>
              <p className="reflect-body">{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
