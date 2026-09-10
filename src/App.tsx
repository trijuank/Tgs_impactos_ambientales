import { Suspense, lazy } from 'react';
import { TransectRail } from './components/TransectRail';
import { MobileNav } from './components/MobileNav';
import { Hero } from './components/Hero';
import { SystemSection } from './components/SystemSection';
import { DiagramSection } from './components/DiagramSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { ReflectionSection } from './components/ReflectionSection';
import { ReferencesSection } from './components/ReferencesSection';
import { Footer } from './components/Footer';
import { Model3DFallback } from './components/Model3DFallback';

// three.js pesa bastante: se separa en su propio chunk y solo se descarga
// cuando el visitante llega a esa sección.
const Model3D = lazy(() => import('./components/Model3D').then((m) => ({ default: m.Model3D })));

export default function App() {
  return (
    <>
      <TransectRail />
      <div className="app-shell">
        <MobileNav />
        <Hero />
        <SystemSection />
        <DiagramSection />
        <Suspense fallback={<Model3DFallback />}>
          <Model3D />
        </Suspense>
        <PrinciplesSection />
        <ReflectionSection />
        <ReferencesSection />
        <Footer />
      </div>
    </>
  );
}
