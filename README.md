# El río que carga lo que no vemos

Sitio de la actividad de Teoría General de Sistemas (Grupo 6), migrado de un
único archivo HTML a un proyecto **React + TypeScript** con Vite.

## Requisitos

- Node.js 18 o superior

## Instalación y uso

```bash
npm install
npm run dev       # servidor de desarrollo con recarga en caliente
npm run preview   # sirve el build de producción localmente
npm run lint      # revisa el código con oxlint
```

## Estructura

```
src/
  components/     Un componente por sección del sitio + piezas reutilizables
                   (SectionHeading, TransectRail, MobileNav)
  data/           Contenido del sitio como datos tipados (principios,
                   elementos del sistema, referencias, secciones del nav)
  hooks/          useScrollSpy: resalta la sección activa en el riel de navegación
  lib/            riverScene.ts: la escena 3D (three.js), independiente de React
  styles/         tokens.css (paleta, tipografía, variables) y global.css (layout)
```

Cada componente visual importa su propio archivo `.css` junto a él
(`Hero.tsx` + `Hero.css`, etc.), así que se pueden mover, borrar o
reemplazar secciones completas sin tocar el resto.

## Rediseño visual

Respecto al HTML original se mantuvo el tono editorial (Fraunces + Inter,
fondo papel, verdes de río) pero se profundizó el sistema visual:

- **Paleta** ampliada a un lenguaje de "boletín de monitoreo hidrológico":
  se añadió `--silt` (sedimento) y `--turbid` (alerta/contaminación) en vez
  de un único acento genérico.
- **Tipografía**: se sumó IBM Plex Mono para datos, kilómetros y códigos de
  muestra — un guiño a las fichas de estaciones de monitoreo de calidad de
  agua, no una fuente monoespaciada decorativa.
- **Navegación**: el nav superior se reemplazó por un **riel de transecto**
  fijo a la izquierda (desktop), una regla vertical con marcadores de
  kilómetro que funciona como perfil longitudinal del río y como scrollspy.
  En móvil se conserva una barra superior compacta con las mismas paradas.

## Modelo 3D

`src/lib/riverScene.ts` contiene toda la lógica de three.js (geometría,
partículas de flujo, cámara orbital por arrastre/pellizco) desacoplada de
React. `Model3D.tsx` la monta en un `useEffect` y expone `resetView()` /
`setAutoRotate()` a los botones de la interfaz. El componente se carga con
`React.lazy` para no incluir three.js en el bundle inicial.
