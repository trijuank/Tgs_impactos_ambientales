import * as THREE from 'three';

const COLORS = {
  ground: 0x0f332c,
  river: 0x3f9498,
  riverBed: 0x0b2621,
  domestic: 0xb8532e,
  industry: 0x8a6bb0,
  farm: 0x9c8a3e,
  plant: 0x5c7a4f,
  pipe: 0x2a3b33,
  building: 0xe1e9df,
};

interface FlowCurve {
  curve: THREE.CatmullRomCurve3;
  color: number;
  speedOffset: number;
  stopAt?: number;
}

interface CameraState {
  radius: number;
  theta: number;
  phi: number;
}

interface RiverSceneOptions {
  onUserInteracted?: () => void;
}

export interface RiverSceneController {
  dispose: () => void;
  resetView: () => void;
  setAutoRotate: (value: boolean) => void;
}

export function mountRiverScene(
  container: HTMLDivElement,
  options: RiverSceneOptions = {}
): RiverSceneController {
  let width = container.clientWidth;
  let height = container.clientHeight;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0b2621, 30, 70);

  const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 200);
  const camDefault: CameraState = { radius: 32, theta: 0.75, phi: 1.05 };
  const cam: CameraState = { ...camDefault };

  function updateCamera() {
    camera.position.x = cam.radius * Math.sin(cam.phi) * Math.sin(cam.theta);
    camera.position.z = cam.radius * Math.sin(cam.phi) * Math.cos(cam.theta);
    camera.position.y = cam.radius * Math.cos(cam.phi);
    camera.lookAt(0, 1, 0);
  }
  updateCamera();

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const sun = new THREE.DirectionalLight(0xfff2df, 0.9);
  sun.position.set(14, 22, 10);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0x3f9498, 0.4);
  rim.position.set(-12, 8, -10);
  scene.add(rim);

  const world = new THREE.Group();
  scene.add(world);

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(44, 26),
    new THREE.MeshStandardMaterial({ color: COLORS.ground, roughness: 1 })
  );
  ground.rotation.x = -Math.PI / 2;
  world.add(ground);

  const riverBed = new THREE.Mesh(
    new THREE.BoxGeometry(44, 0.4, 7),
    new THREE.MeshStandardMaterial({ color: COLORS.riverBed, roughness: 1 })
  );
  riverBed.position.set(0, -0.1, 0);
  world.add(riverBed);

  const water = new THREE.Mesh(
    new THREE.BoxGeometry(44, 0.3, 5.6),
    new THREE.MeshStandardMaterial({
      color: COLORS.river,
      roughness: 0.3,
      metalness: 0.15,
      transparent: true,
      opacity: 0.88,
    })
  );
  water.position.set(0, 0.05, 0);
  world.add(water);

  const boundary = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(38, 6, 16)),
    new THREE.LineBasicMaterial({ color: 0x3f9498, transparent: true, opacity: 0.35 })
  );
  boundary.position.set(0, 3, 0);
  world.add(boundary);

  function makeBuilding(x: number, z: number, color: number, w: number, h: number, d: number) {
    const g = new THREE.Group();
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, d),
      new THREE.MeshStandardMaterial({ color, roughness: 0.7 })
    );
    box.position.y = h / 2;
    g.add(box);
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(w * 0.75, 0.9, 4),
      new THREE.MeshStandardMaterial({ color: COLORS.building, roughness: 0.8 })
    );
    roof.rotation.y = Math.PI / 4;
    roof.position.y = h + 0.45;
    g.add(roof);
    g.position.set(x, 0, z);
    return g;
  }

  function makePipe(x1: number, z1: number, x2: number, z2: number, y = 1.4) {
    const start = new THREE.Vector3(x1, y, z1);
    const end = new THREE.Vector3(x2, 0.2, z2);
    const mid = new THREE.Vector3((x1 + x2) / 2, y * 0.6, (z1 + z2) / 2);
    const curve = new THREE.CatmullRomCurve3([start, mid, end]);
    const geo = new THREE.TubeGeometry(curve, 20, 0.22, 8, false);
    const mat = new THREE.MeshStandardMaterial({ color: COLORS.pipe, roughness: 0.6 });
    return { mesh: new THREE.Mesh(geo, mat), curve };
  }

  const sources = [
    { x: -13, z: 8, color: COLORS.domestic, size: [2.4, 2, 2.2] as const },
    { x: -2, z: 8.5, color: COLORS.industry, size: [2.8, 2.6, 2.4] as const },
    { x: 9, z: 8, color: COLORS.farm, size: [2.2, 1.4, 3] as const },
  ];

  const flowCurves: FlowCurve[] = [];

  sources.forEach((s) => {
    world.add(makeBuilding(s.x, s.z, s.color, s.size[0], s.size[1], s.size[2]));
  });

  const p1 = makePipe(-13, 7, -13, 2.8, 1.6);
  world.add(p1.mesh);
  flowCurves.push({ curve: p1.curve, color: COLORS.domestic, speedOffset: 0 });

  const plant = makeBuilding(-2, 3.2, COLORS.plant, 3, 1.8, 2.6);
  world.add(plant);
  const p2a = makePipe(-2, 7.7, -2, 4.2, 1.8);
  world.add(p2a.mesh);
  const p2b = makePipe(-2, 2.2, -2, 2.8, 1.2);
  world.add(p2b.mesh);
  flowCurves.push({ curve: p2a.curve, color: COLORS.industry, speedOffset: 0.3, stopAt: 0.92 });
  flowCurves.push({ curve: p2b.curve, color: COLORS.plant, speedOffset: 0.1 });

  const p3 = makePipe(9, 7, 9, 2.8, 1.4);
  world.add(p3.mesh);
  flowCurves.push({ curve: p3.curve, color: COLORS.farm, speedOffset: 0.6 });

  interface RiverParticle {
    mesh: THREE.Mesh;
    t: number;
    speed: number;
    z: number;
  }
  const riverParticles: RiverParticle[] = [];
  const riverParticleGeo = new THREE.SphereGeometry(0.14, 8, 8);
  for (let i = 0; i < 26; i++) {
    const color = i % 3 === 0 ? COLORS.domestic : i % 3 === 1 ? COLORS.industry : COLORS.farm;
    const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.4 });
    const mesh = new THREE.Mesh(riverParticleGeo, mat);
    const t = Math.random();
    const z = (Math.random() - 0.5) * 4.5;
    mesh.position.set(-20 + t * 40, 0.25, z);
    world.add(mesh);
    riverParticles.push({ mesh, t, speed: 0.0016 + Math.random() * 0.001, z });
  }

  interface PipeParticle {
    mesh: THREE.Mesh;
    t: number;
    speed: number;
    curve: THREE.CatmullRomCurve3;
    stopAt: number;
  }
  const pipeParticles: PipeParticle[] = [];
  const pipeGeo = new THREE.SphereGeometry(0.18, 8, 8);
  flowCurves.forEach((fc) => {
    for (let i = 0; i < 4; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: fc.color,
        roughness: 0.4,
        emissive: fc.color,
        emissiveIntensity: 0.15,
      });
      const mesh = new THREE.Mesh(pipeGeo, mat);
      pipeParticles.push({
        mesh,
        t: (i / 4 + (fc.speedOffset || 0)) % 1,
        speed: 0.0032,
        curve: fc.curve,
        stopAt: fc.stopAt ?? 1,
      });
      world.add(mesh);
    }
  });

  function animateParticles() {
    pipeParticles.forEach((p) => {
      p.t += p.speed;
      if (p.t > p.stopAt) p.t = 0;
      const pos = p.curve.getPoint(Math.min(p.t, 0.999));
      p.mesh.position.copy(pos);
    });
    riverParticles.forEach((p) => {
      p.t += p.speed;
      if (p.t > 1) p.t = 0;
      p.mesh.position.x = -20 + p.t * 40;
      p.mesh.position.z = p.z + Math.sin(p.t * Math.PI * 4) * 0.3;
    });
  }

  // --- Interaction ---
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let autoRotate = true;
  let pinchDist: number | null = null;

  const notifyInteraction = () => options.onUserInteracted?.();

  const onPointerDown = (e: PointerEvent) => {
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    autoRotate = false;
    notifyInteraction();
  };
  const onPointerUp = () => {
    dragging = false;
  };
  const onPointerMove = (e: PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    cam.theta -= dx * 0.006;
    cam.phi = Math.min(Math.max(cam.phi - dy * 0.006, 0.35), 1.5);
  };
  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    cam.radius = Math.min(Math.max(cam.radius + e.deltaY * 0.03, 14), 55);
  };
  const onTouchStart = (e: TouchEvent) => {
    if (e.touches.length === 2) {
      pinchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    } else if (e.touches.length === 1) {
      dragging = true;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
      autoRotate = false;
      notifyInteraction();
    }
  };
  const onTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 2 && pinchDist !== null) {
      const d = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      cam.radius = Math.min(Math.max(cam.radius - (d - pinchDist) * 0.05, 14), 55);
      pinchDist = d;
    } else if (e.touches.length === 1 && dragging) {
      const dx = e.touches[0].clientX - lastX;
      const dy = e.touches[0].clientY - lastY;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
      cam.theta -= dx * 0.006;
      cam.phi = Math.min(Math.max(cam.phi - dy * 0.006, 0.35), 1.5);
    }
  };
  const onTouchEnd = () => {
    dragging = false;
    pinchDist = null;
  };

  container.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointermove', onPointerMove);
  container.addEventListener('wheel', onWheel, { passive: false });
  container.addEventListener('touchstart', onTouchStart, { passive: true });
  container.addEventListener('touchmove', onTouchMove, { passive: true });
  container.addEventListener('touchend', onTouchEnd);

  function onResize() {
    width = container.clientWidth;
    height = container.clientHeight;
    if (width === 0 || height === 0) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }
  window.addEventListener('resize', onResize);
  const resizeObserver = new ResizeObserver(onResize);
  resizeObserver.observe(container);

  let rafId = 0;
  function loop() {
    rafId = requestAnimationFrame(loop);
    if (autoRotate) cam.theta += 0.0022;
    updateCamera();
    animateParticles();
    renderer.render(scene, camera);
  }
  loop();

  return {
    dispose() {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      resizeObserver.disconnect();
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
    },
    resetView() {
      cam.radius = camDefault.radius;
      cam.theta = camDefault.theta;
      cam.phi = camDefault.phi;
      autoRotate = true;
    },
    setAutoRotate(value: boolean) {
      autoRotate = value;
    },
  };
}
