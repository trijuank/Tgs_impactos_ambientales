export interface SystemFact {
  label: string;
  detail: string;
}

export const systemFacts: SystemFact[] = [
  {
    label: 'Frontera del sistema',
    detail:
      'El tramo del río comprendido entre el punto donde ingresan los primeros vertimientos urbanos y el punto donde el río sale del casco urbano, generalmente delimitado por dos estaciones de monitoreo.',
  },
  {
    label: 'Entorno inmediato',
    detail:
      'El régimen de lluvias y sequía, el crecimiento de la población ribereña, la actividad industrial y agrícola de la cuenca, y la normatividad ambiental vigente sobre vertimientos.',
  },
  {
    label: 'Entradas',
    detail:
      'Agua residual doméstica (aguas negras), efluentes industriales, escorrentía agrícola con fertilizantes y plaguicidas, y el caudal natural del propio río.',
  },
  {
    label: 'Salidas',
    detail:
      'Agua superficial con su carga contaminante alterada, sedimentos, pérdida de biodiversidad bentónica, riesgo sanitario aguas abajo e indicadores de calidad del agua (ICA, BMWP).',
  },
];

export type ElementRole = 'source' | 'receiver' | 'neutral';

export interface SystemElement {
  name: string;
  detail: string;
  role: ElementRole;
}

export const systemElements: SystemElement[] = [
  { name: 'Viviendas', detail: 'Generan aguas negras: materia orgánica, detergentes, coliformes fecales.', role: 'source' },
  { name: 'Industria y agroindustria', detail: 'Aportan efluentes con carga química, metales y nutrientes.', role: 'source' },
  { name: 'Zonas agrícolas', detail: 'Escorrentía con fertilizantes y plaguicidas que llega al cauce.', role: 'source' },
  { name: 'Alcantarillado', detail: 'Red de colectores que transporta y concentra los vertimientos.', role: 'neutral' },
  { name: 'Planta de tratamiento (PTAR)', detail: 'Cuando existe, reduce parte de la carga contaminante antes de la descarga final.', role: 'neutral' },
  { name: 'El río (cuerpo receptor)', detail: 'Recibe, diluye y transporta la carga contaminante; se autodepura parcialmente.', role: 'receiver' },
  { name: 'Biota acuática', detail: 'Macroinvertebrados, peces y microorganismos que responden a los cambios de calidad del agua.', role: 'receiver' },
  { name: 'Comunidad ribereña', detail: 'Usa el agua para consumo, riego, pesca o recreación y percibe los efectos del deterioro.', role: 'neutral' },
  { name: 'Autoridad ambiental', detail: 'Corporación autónoma regional u organismo equivalente que regula y monitorea los vertimientos.', role: 'neutral' },
];

export interface ReflectionEntry {
  question: string;
  title: string;
  body: string;
}

export const reflections: ReflectionEntry[] = [
  {
    question: '¿Cuáles principios fueron más difíciles de identificar?',
    title: 'Homeóstasis y equilibrio',
    body: 'Son los más difíciles de aislar porque no se observan directamente: hay que inferirlos a partir de series de datos de calidad del agua en varios puntos y momentos del año. A diferencia de la frontera o los elementos, que se pueden señalar en un mapa, estos principios dependen de comparar mediciones en el tiempo y de entender procesos biológicos y químicos que ocurren "dentro" del agua.',
  },
  {
    question: '¿Qué impactos ambientales podría generar una perturbación?',
    title: 'Un solo eslabón afecta a toda la cadena',
    body: 'Si aumenta el vertimiento industrial o falla una planta de tratamiento, disminuye el oxígeno disuelto, mueren macroinvertebrados y peces, se reduce la capacidad de autodepuración del río, y la comunidad ribereña pierde una fuente de agua para consumo, riego o pesca. El efecto no se queda en el punto de vertimiento: viaja aguas abajo y puede alcanzar otros municipios y otras cuencas.',
  },
  {
    question: '¿Cómo ayuda el pensamiento sistémico a comprender estos impactos?',
    title: 'Ver el río como sistema, no como recurso aislado',
    body: 'El pensamiento sistémico evita explicar el deterioro del río por una sola causa —"la industria" o "las viviendas"— y obliga a mirar la totalidad de la cuenca, sus jerarquías y su multicausalidad. Esto permite diseñar soluciones que actúan sobre varios elementos a la vez (tratamiento, regulación, educación ambiental) en lugar de intervenciones aisladas que no logran restablecer el equilibrio del sistema.',
  },
];

export interface Reference {
  authors: string;
  year: string;
  text: string;
}

export const references: Reference[] = [
  {
    authors: 'Padilla Moreno, R. M., & Ospina Parra, C. A.',
    year: '2021',
    text: 'Biological and physiochemical conditions of the surface waters of the Cauca River in the urban area of Popayán, Colombia. Revista Ingenierías Universidad de Medellín, 20(39), 263–277. https://doi.org/10.22395/rium.v20n39a15',
  },
  {
    authors: 'Ospina Zúñiga, O. E., Murillo Vargas, F. J., & Toro, M. K.',
    year: '2019',
    text: 'Incidencia del río Bogotá en la calidad microbiológica del agua del río Magdalena, municipio de Flandes (Tolima). Luna Azul, (47), 114–129. https://doi.org/10.17151/luaz.2019.47.7',
  },
  {
    authors: 'Sáenz-Arias, S., Garcés-Ordóñez, O., Córdoba-Meza, T., Blandón, L., Espinosa-Díaz, L., Vivas-Aguas, L. J., & Canals, M.',
    year: '2023',
    text: 'Contaminación por vertidos de aguas residuales: una revisión de las interacciones microorganismos–microplásticos y sus posibles riesgos ambientales en aguas costeras colombianas. Ecosistemas, 32(1), 2489. https://doi.org/10.7818/ECOS.2489',
  },
];
