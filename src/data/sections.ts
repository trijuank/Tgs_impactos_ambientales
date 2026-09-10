export interface SectionMeta {
  id: string;
  km: string;
  label: string;
  navLabel: string;
}

export const sections: SectionMeta[] = [
  { id: 'inicio', km: 'Km 0.0', label: 'Cabecera del tramo', navLabel: 'Inicio' },
  { id: 'sistema', km: 'Km 0.4', label: 'El sistema', navLabel: 'El sistema' },
  { id: 'diagrama', km: 'Km 1.2', label: 'Representación visual', navLabel: 'Diagrama' },
  { id: 'modelo3d', km: 'Km 1.8', label: 'Modelo tridimensional', navLabel: 'Modelo 3D' },
  { id: 'principios', km: 'Km 2.6', label: 'Aplicación de la TGS', navLabel: '19 principios' },
  { id: 'reflexion', km: 'Km 3.3', label: 'Reflexión sistémica', navLabel: 'Reflexión' },
  { id: 'referencias', km: 'Km 3.9', label: 'Fuentes consultadas', navLabel: 'Referencias' },
];
