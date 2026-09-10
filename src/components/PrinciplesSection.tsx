import { useMemo, useState } from 'react';
import { categoryLabels, principles, type PrincipleCategory } from '../data/principles';
import { SectionHeading } from './SectionHeading';
import './PrinciplesSection.css';

type FilterValue = 'all' | PrincipleCategory;

const filters: { value: FilterValue; label: string; colorVar: string }[] = [
  { value: 'all', label: `Todos (${principles.length})`, colorVar: 'var(--ink)' },
  { value: 'estructural', label: 'Estructurales', colorVar: 'var(--river)' },
  { value: 'dinamico', label: 'Dinámicos', colorVar: 'var(--turbid)' },
  { value: 'relacional', label: 'Relacionales', colorVar: 'var(--algae)' },
];

const categoryColor: Record<PrincipleCategory, string> = {
  estructural: 'var(--river)',
  dinamico: 'var(--turbid)',
  relacional: 'var(--algae)',
};

export function PrinciplesSection() {
  const [filter, setFilter] = useState<FilterValue>('all');

  const visible = useMemo(
    () => (filter === 'all' ? principles : principles.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="principios" className="principles-section">
      <div className="wrap-wide">
        <SectionHeading km="Km 2.6" label="Aplicación de la TGS" title="Los 19 principios básicos, aplicados al río">
          Cada principio se interpreta sobre el mismo sistema, con un ejemplo concreto tomado de
          casos reales de contaminación hídrica por aguas residuales en Colombia. Filtra por tipo
          de principio para leer por grupos.
        </SectionHeading>

        <div className="filters" role="group" aria-label="Filtrar principios por categoría">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              className={filter === f.value ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter(f.value)}
            >
              <span className="dot" style={{ background: f.colorVar }} />
              {f.label}
            </button>
          ))}
        </div>

        <div className="principles-table-wrap">
          <table className="principles">
            <thead>
              <tr>
                <th>N.°</th>
                <th>Principio</th>
                <th>Aplicación al sistema</th>
                <th>Ejemplo / evidencia</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((p) => (
                <tr key={p.num}>
                  <td className="num">{p.num}</td>
                  <td className="name">
                    <span className="cat-marker" style={{ background: categoryColor[p.category] }} />
                    {p.name}
                    <span className="cat-tag">{categoryLabels[p.category]}</span>
                  </td>
                  <td>{p.application}</td>
                  <td className="example">{p.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
