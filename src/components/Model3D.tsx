import { useEffect, useRef, useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { mountRiverScene } from '../lib/riverScene';
import './Model3D.css';

const legend3d = [
  { color: '#B8532E', label: 'Vertimiento doméstico' },
  { color: '#8A6BB0', label: 'Vertimiento industrial' },
  { color: '#9C8A3E', label: 'Escorrentía agrícola' },
  { color: '#5C7A4F', label: 'Planta de tratamiento' },
  { color: '#3F9498', label: 'Río (cuerpo receptor)' },
];

export function Model3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const controllerRef = useRef<ReturnType<typeof mountRiverScene> | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const controller = mountRiverScene(containerRef.current, {
      onUserInteracted: () => setAutoRotate(false),
    });
    controllerRef.current = controller;
    return () => {
      controller.dispose();
      controllerRef.current = null;
    };
  }, []);

  useEffect(() => {
    controllerRef.current?.setAutoRotate(autoRotate);
  }, [autoRotate]);

  const handleReset = () => {
    controllerRef.current?.resetView();
    setAutoRotate(true);
  };

  return (
    <section id="modelo3d" className="model3d">
      <div className="wrap-wide">
        <SectionHeading km="Km 1.8" label="Modelo tridimensional" title="El mismo sistema, visto en volumen">
          Un modelo 3D del tramo de río: las tres fuentes de vertimiento vierten sus flujos hacia
          el cauce, uno de ellos pasa antes por una planta de tratamiento. Arrastra para rotar la
          escena y usa la rueda del mouse (o pellizca) para acercarte.
        </SectionHeading>

        <div className="model3d-frame">
          <div ref={containerRef} id="canvas3d-container" />
        </div>

        <div className="model3d-controls">
          <div className="model3d-hint">Arrastra para rotar · rueda del mouse para hacer zoom</div>
          <div className="model3d-buttons">
            <button
              type="button"
              className={autoRotate ? 'm3d-btn active' : 'm3d-btn'}
              onClick={() => setAutoRotate((v) => !v)}
            >
              Rotación automática
            </button>
            <button type="button" className="m3d-btn" onClick={handleReset}>
              Restablecer vista
            </button>
          </div>
        </div>

        <div className="legend3d">
          {legend3d.map((item) => (
            <span key={item.label}>
              <span className="dot" style={{ background: item.color }} />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
