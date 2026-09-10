import { SectionHeading } from './SectionHeading';
import './DiagramSection.css';

const legend = [
  { color: 'var(--turbid)', label: 'Fuentes de vertimiento (entradas)' },
  { color: 'var(--algae)', label: 'Proceso de tratamiento (neguentropía)' },
  { color: 'var(--river-bright)', label: 'Cuerpo receptor y autodepuración' },
  { color: 'rgba(242,238,227,0.4)', label: 'Frontera y entorno' },
];

export function DiagramSection() {
  return (
    <section id="diagrama" className="diagram">
      <div className="wrap-wide">
        <SectionHeading
          km="Km 1.2"
          label="Representación visual"
          title="Entradas, proceso y salidas dentro de la frontera del sistema"
        >
          El diagrama sitúa la frontera del sistema (línea punteada) dentro de un entorno más
          amplio, y sigue el flujo desde las fuentes de vertimiento hasta el río receptor.
        </SectionHeading>

        <div className="diagram-frame">
          <svg viewBox="0 0 1000 560" xmlns="http://www.w3.org/2000/svg" className="diagram-svg">
            <rect
              x="14"
              y="14"
              width="972"
              height="532"
              rx="10"
              fill="none"
              stroke="rgba(243,238,225,0.28)"
              strokeWidth="1.5"
            />
            <text
              x="34"
              y="42"
              fill="rgba(243,238,225,0.55)"
              fontFamily="Inter, sans-serif"
              fontSize="13"
              fontWeight="600"
            >
              ENTORNO: clima, crecimiento urbano, políticas ambientales, cambio climático
            </text>

            <rect
              x="60"
              y="80"
              width="880"
              height="410"
              rx="8"
              fill="none"
              stroke="#3F9498"
              strokeWidth="2"
              strokeDasharray="7 6"
            />
            <text x="80" y="106" fill="#3F9498" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600">
              FRONTERA DEL SISTEMA
            </text>

            <g fontFamily="Inter, sans-serif">
              <rect x="95" y="135" width="175" height="76" rx="6" fill="#B8532E" opacity="0.16" stroke="#B8532E" />
              <text x="182" y="168" fill="#F3EEE1" fontSize="13.5" fontWeight="600" textAnchor="middle">
                Viviendas
              </text>
              <text x="182" y="188" fill="rgba(243,238,225,0.65)" fontSize="11.5" textAnchor="middle">
                Aguas negras
              </text>

              <rect x="95" y="220" width="175" height="76" rx="6" fill="#B8532E" opacity="0.16" stroke="#B8532E" />
              <text x="182" y="253" fill="#F3EEE1" fontSize="13.5" fontWeight="600" textAnchor="middle">
                Industria
              </text>
              <text x="182" y="273" fill="rgba(243,238,225,0.65)" fontSize="11.5" textAnchor="middle">
                Efluentes químicos
              </text>

              <rect x="95" y="305" width="175" height="76" rx="6" fill="#B8532E" opacity="0.16" stroke="#B8532E" />
              <text x="182" y="338" fill="#F3EEE1" fontSize="13.5" fontWeight="600" textAnchor="middle">
                Zonas agrícolas
              </text>
              <text x="182" y="358" fill="rgba(243,238,225,0.65)" fontSize="11.5" textAnchor="middle">
                Escorrentía, plaguicidas
              </text>
            </g>

            <path d="M270 173 L 360 245" stroke="rgba(243,238,225,0.4)" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />
            <path d="M270 255 L 360 255" stroke="rgba(243,238,225,0.4)" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />
            <path d="M270 337 L 360 265" stroke="rgba(243,238,225,0.4)" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />

            <rect x="365" y="200" width="190" height="110" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(243,238,225,0.4)" />
            <text x="460" y="245" fill="#F3EEE1" fontSize="13.5" fontWeight="600" textAnchor="middle">
              Alcantarillado /
            </text>
            <text x="460" y="263" fill="#F3EEE1" fontSize="13.5" fontWeight="600" textAnchor="middle">
              colector
            </text>
            <text x="460" y="285" fill="rgba(243,238,225,0.6)" fontSize="11.5" textAnchor="middle">
              Transporte y mezcla
            </text>

            <path d="M555 255 L 630 255" stroke="rgba(243,238,225,0.4)" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />

            <rect x="635" y="200" width="180" height="110" rx="6" fill="#5C7A4F" opacity="0.18" stroke="#5C7A4F" />
            <text x="725" y="240" fill="#F3EEE1" fontSize="13.5" fontWeight="600" textAnchor="middle">
              Tratamiento
            </text>
            <text x="725" y="258" fill="#F3EEE1" fontSize="13.5" fontWeight="600" textAnchor="middle">
              (PTAR / humedal)
            </text>
            <text x="725" y="280" fill="rgba(243,238,225,0.6)" fontSize="11.5" textAnchor="middle">
              Neguentropía:
            </text>
            <text x="725" y="296" fill="rgba(243,238,225,0.6)" fontSize="11.5" textAnchor="middle">
              reduce carga contaminante
            </text>

            <path d="M725 310 L 725 380" stroke="rgba(243,238,225,0.4)" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />

            <rect x="90" y="390" width="820" height="80" rx="10" fill="#3F9498" opacity="0.22" stroke="#3F9498" />
            <text x="500" y="424" fill="#F3EEE1" fontSize="15" fontWeight="600" textAnchor="middle">
              Río (cuerpo receptor) — dilución, autodepuración, transporte
            </text>
            <text x="500" y="446" fill="rgba(243,238,225,0.65)" fontSize="12" textAnchor="middle">
              Biota acuática · comunidad ribereña · usos aguas abajo
            </text>

            <path d="M910 430 L 940 430" stroke="rgba(243,238,225,0.4)" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />
            <text x="948" y="420" fill="rgba(243,238,225,0.75)" fontSize="11.5">
              Salida:
            </text>
            <text x="948" y="436" fill="rgba(243,238,225,0.75)" fontSize="11.5">
              agua alterada,
            </text>
            <text x="948" y="452" fill="rgba(243,238,225,0.75)" fontSize="11.5">
              riesgo sanitario
            </text>

            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="rgba(243,238,225,0.55)" />
              </marker>
            </defs>
          </svg>

          <div className="legend">
            {legend.map((item) => (
              <span key={item.label}>
                <span className="dot" style={{ background: item.color }} />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
