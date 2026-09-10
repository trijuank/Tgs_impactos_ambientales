export type PrincipleCategory = 'estructural' | 'dinamico' | 'relacional';

export interface Principle {
  num: number;
  name: string;
  category: PrincipleCategory;
  application: string;
  example: string;
}

export const categoryLabels: Record<PrincipleCategory, string> = {
  estructural: 'Estructural',
  dinamico: 'Dinámico',
  relacional: 'Relacional',
};

export const principles: Principle[] = [
  {
    num: 1,
    name: 'Frontera',
    category: 'estructural',
    application: 'Se traza en el tramo del río entre el primer punto de vertimiento urbano y la salida del casco urbano.',
    example: 'Un estudio del río Cauca en Popayán definió dos estaciones de muestreo como límites del tramo analizado (Padilla Moreno & Ospina Parra, 2021).',
  },
  {
    num: 2,
    name: 'Entorno',
    category: 'estructural',
    application: 'El clima, el crecimiento poblacional y la normatividad ambiental rodean e influyen sobre la calidad del agua del tramo.',
    example: 'Las mediciones fisicoquímicas del río Cauca se tomaron diferenciando temporada seca y lluviosa, porque el entorno climático altera los resultados (Padilla Moreno & Ospina Parra, 2021).',
  },
  {
    num: 3,
    name: 'Totalidad',
    category: 'estructural',
    application: 'La calidad del agua no se explica por un solo vertimiento, sino por el conjunto de descargas de toda la cuenca.',
    example: 'El deterioro del río Bogotá y su efecto en el río Magdalena solo se entiende observando la cuenca completa, no un vertimiento aislado (Ospina Zúñiga et al., 2019).',
  },
  {
    num: 4,
    name: 'Equifinalidad',
    category: 'dinamico',
    application: 'Vertimientos de origen distinto (doméstico, industrial, agrícola) conducen al mismo resultado final: deterioro del índice de calidad del agua.',
    example: 'Tanto la descarga doméstica como la industrial llevan a valores bajos del índice de calidad aguas abajo del punto de vertimiento.',
  },
  {
    num: 5,
    name: 'Jerarquía',
    category: 'estructural',
    application: 'El tramo urbano es un subsistema dentro de la subcuenca, y esta a su vez de la cuenca hidrográfica mayor.',
    example: 'El río Cauca a su paso por Popayán pertenece a la cuenca alta del Cauca, subsidiaria de la macrocuenca Magdalena-Cauca.',
  },
  {
    num: 6,
    name: 'Complejidad',
    category: 'estructural',
    application: 'Intervienen numerosas variables fisicoquímicas, biológicas y sociales que interactúan entre sí.',
    example: 'En el río Cauca se midieron simultáneamente pH, oxígeno disuelto, coliformes, sólidos suspendidos y macroinvertebrados (Padilla Moreno & Ospina Parra, 2021).',
  },
  {
    num: 7,
    name: 'Sinergia',
    category: 'relacional',
    application: 'La calidad final del agua resulta de la interacción entre vertimiento, caudal y autodepuración, no de un solo factor aislado.',
    example: 'Pese a la alta carga contaminante, el flujo del río permite regular parcialmente esa carga, según los índices de contaminación calculados (Padilla Moreno & Ospina Parra, 2021).',
  },
  {
    num: 8,
    name: 'Emergencia',
    category: 'relacional',
    application: 'La interacción entre microplásticos y microorganismos genera un riesgo sanitario que no existe en ninguno de los dos componentes por separado.',
    example: 'Los microplásticos funcionan como vector de dispersión de microorganismos patógenos en aguas costeras colombianas afectadas por vertimientos (Sáenz-Arias et al., 2023).',
  },
  {
    num: 9,
    name: 'Resiliencia',
    category: 'dinamico',
    application: 'El río resiste cierto nivel de vertimiento sin colapsar por completo como fuente de agua.',
    example: 'El estudio del río Cauca muestra una recuperación parcial de los índices de calidad aguas abajo, por dilución y oxigenación natural.',
  },
  {
    num: 10,
    name: 'Adaptabilidad',
    category: 'dinamico',
    application: 'Las comunidades bióticas ajustan su composición ante la nueva carga contaminante del entorno.',
    example: 'Los macroinvertebrados bentónicos del río Cauca disminuyeron en un 48 % al avanzar el río por la zona urbana (Padilla Moreno & Ospina Parra, 2021).',
  },
  {
    num: 11,
    name: 'Entropía',
    category: 'dinamico',
    application: 'El sistema se degrada progresivamente con los años de vertimiento continuo y sin control suficiente.',
    example: 'La cuenca del río Bogotá es considerada una de las más contaminadas de Colombia tras décadas de vertimientos de más de siete millones de habitantes (Ospina Zúñiga et al., 2019).',
  },
  {
    num: 12,
    name: 'Neguentropía',
    category: 'dinamico',
    application: 'Se introducen recursos y energía para frenar el deterioro y mantener la organización del sistema.',
    example: 'La construcción de plantas de tratamiento o humedales artificiales reduce la carga contaminante antes del vertimiento final al río.',
  },
  {
    num: 13,
    name: 'Homeóstasis',
    category: 'dinamico',
    application: 'Mecanismos naturales de oxigenación y sedimentación buscan devolver al río a un estado más estable.',
    example: 'El índice de calidad del agua mejora gradualmente a medida que el río se aleja del punto de vertimiento, por procesos autodepurativos.',
  },
  {
    num: 14,
    name: 'Equilibrio',
    category: 'dinamico',
    application: 'Mantener estable la calidad del agua exige que la autodepuración compense permanentemente la carga vertida.',
    example: 'Sostener niveles aceptables de oxígeno disuelto requiere que el caudal y la aireación natural igualen el ritmo de la contaminación orgánica recibida.',
  },
  {
    num: 15,
    name: 'Retroalimentación',
    category: 'dinamico',
    application: 'Los resultados del monitoreo de calidad del agua retornan al sistema como información para ajustar decisiones de gestión.',
    example: 'Los índices biológicos y fisicoquímicos calculados en campo permiten a las autoridades ambientales orientar el control de vertimientos futuros (Padilla Moreno & Ospina Parra, 2021).',
  },
  {
    num: 16,
    name: 'Estructura',
    category: 'estructural',
    application: 'El sistema está formado por fuentes de vertimiento, redes de alcantarillado, cuerpo receptor, biota y comunidad, junto con sus interacciones.',
    example: 'El diagrama del sistema muestra cómo cada parte —viviendas, industria, colector, río— se conecta con la siguiente mediante flujos de agua e información.',
  },
  {
    num: 17,
    name: 'Recursividad',
    category: 'estructural',
    application: 'Cada componente del sistema es, a su vez, un sistema con sus propias entradas, procesos y salidas.',
    example: 'Una planta de tratamiento es un subsistema técnico completo: recibe agua residual, la procesa y produce un efluente, dentro del sistema mayor del río.',
  },
  {
    num: 18,
    name: 'Complementariedad',
    category: 'relacional',
    application: 'El río depende de la cuenca alta que le aporta caudal y de la autoridad ambiental que regula los vertimientos que recibe.',
    example: 'Sin la corporación autónoma regional que vigila los permisos de vertimiento, el sistema del río quedaría sin uno de sus reguladores externos clave.',
  },
  {
    num: 19,
    name: 'Multicausalidad',
    category: 'relacional',
    application: 'El deterioro de la calidad del agua obedece a varias causas simultáneas: crecimiento urbano, baja cobertura de alcantarillado, vertimientos industriales y debilidad institucional.',
    example: 'El crecimiento urbano y la falta de tratamiento adecuado contribuyen juntos a la contaminación por microplásticos y patógenos en aguas costeras colombianas (Sáenz-Arias et al., 2023).',
  },
];
