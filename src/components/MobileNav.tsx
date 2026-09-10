import { sections } from '../data/sections';
import './MobileNav.css';

export function MobileNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="mobile-nav" aria-label="Navegación del tramo">
      <div className="mobile-nav-brand">
        <span className="mobile-nav-mark" aria-hidden="true">
          ~
        </span>
        Tramo urbano
      </div>
      <div className="mobile-nav-scroll">
        {sections.map((section) => (
          <button key={section.id} type="button" onClick={() => scrollTo(section.id)}>
            {section.navLabel}
          </button>
        ))}
      </div>
    </nav>
  );
}
