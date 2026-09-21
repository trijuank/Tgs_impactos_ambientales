export interface SystemFact {
  label: string;
  detail: string;
}

export const systemFacts: SystemFact[] = [
  {
    label: 'Frontera del sistema',
    detail: 'Delimita el sistema y permite identificar lo que pertenece y no pertenece a él. Comprende el tramo del río delimitado entre el primer vertimiento urbano y su salida del casco urbano.',
  },
  {
    label: 'Entorno (Ambiente)',
    detail: 'Es el área de condiciones y sucesos que influyen en el comportamiento del sistema. Incluye el clima, la actividad socioeconómica ribereña y la normatividad ambiental.',
  },
  {
    label: 'Entradas',
    detail: 'Son los recursos o flujos que ingresan. En este caso: aguas residuales domésticas, industriales, escorrentía agrícola y el caudal natural del propio río.',
  },
  {
    label: 'Salidas',
    detail: 'Representan el producto del sistema. Incluyen el agua con carga contaminante alterada, sedimentos y los indicadores de calidad que luego pueden retornar como retroalimentación.',
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
    body: 'Son difíciles de aislar porque representan procesos invisibles en el tiempo. La homeóstasis opera mediante mecanismos reguladores (como la autodepuración) para intentar volver al estado inicial del río; mientras que el equilibrio busca mantener un estado constante, lo cual exige un alto consumo de energía (como la demanda de oxígeno para procesar la carga orgánica). A diferencia de la frontera que es un límite físico,, ambos requieren analizar series temporales de datos.',
  },
  {
    question: '¿Qué impactos ambientales podría generar una perturbación?',
    title: 'Un solo eslabón afecta a toda la cadena',
    body: 'Por el principio de sinergia, una falla en un componente (como el colapso de una PTAR) altera la totalidad del sistema. Si la contaminación supera la resiliencia del agua, cae el oxígeno disuelto y muere la biota. Además, por la jerarquía del río (donde el tramo urbano es subsistema de una cuenca mayor), la contaminación no se queda en el sitio: viaja aguas abajo generando un impacto acumulativo en otros municipios.',
  },
  {
    question: '¿Cómo ayuda el pensamiento sistémico a comprender estos impactos?',
    title: 'Ver el río como sistema, no como recurso aislado',
    body: 'El principio de totalidad nos impide reducir el problema a un solo culpable, reconociendo la multicausalidad del deterioro (urbanización, industria, agro). Esto permite usar la retroalimentación de los monitoreos para aplicar neguentropía (inversión en control, PTAR y educación) que mantenga la organización del sistema, evitando parches aislados que no resuelven el problema de raíz.',
  },
];

export interface Reference {
  authors: string;
  year: string;
  text: string;
}

export interface InfographicData {
  title: string;
  src: string;
  alt: string;
  description: string;
}

export const infographicData: InfographicData = {
  title: 'Síntesis Visual: Análisis del Río Urbano',
  src: '/img/ilustracion_sistema.jpg', 
  alt: 'Infografía que muestra la aplicación de los 19 principios de la Teoría General de Sistemas en un río',
  description: 'Un resumen gráfico que mapea las entradas, salidas, principios estructurales, dinámicos y relacionales del ecosistema ribereño.'
};

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
