import { SectionHeading } from './SectionHeading';
import './Model3D.css';

export function Model3DFallback() {
  return (
    <section id="modelo3d" className="model3d">
      <div className="wrap-wide">
        <SectionHeading km="Km 1.8" label="Modelo tridimensional" title="El mismo sistema, visto en volumen">
          Un modelo 3D del tramo de río: las tres fuentes de vertimiento vierten sus flujos hacia
          el cauce, uno de ellos pasa antes por una planta de tratamiento. Arrastra para rotar la
          escena y usa la rueda del mouse (o pellizca) para acercarte.
        </SectionHeading>

        <div className="model3d-frame">
          <div className="model3d-loading">Cargando el modelo tridimensional…</div>
        </div>
      </div>
    </section>
  );
}
