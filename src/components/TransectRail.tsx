import { sections } from '../data/sections';
import { useScrollSpy } from '../hooks/useScrollSpy';
import './TransectRail.css';

const ids = sections.map((s) => s.id);

export function TransectRail() {
  const activeId = useScrollSpy(ids);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="rail" aria-label="Transecto del río — navegación">
      <div className="rail-brand">
        <span className="rail-brand-mark" aria-hidden="true">
          ~
        </span>
        <span className="rail-brand-text">Tramo urbano</span>
      </div>

      <ol className="rail-line">
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id} className={isActive ? 'rail-stop is-active' : 'rail-stop'}>
              <button
                type="button"
                className="rail-stop-btn"
                onClick={() => scrollTo(section.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className="rail-stop-marker" aria-hidden="true" />
                <span className="rail-stop-km">{section.km}</span>
                <span className="rail-stop-label">{section.navLabel}</span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="rail-foot">TGS · Grupo 6</div>
    </nav>
  );
}
