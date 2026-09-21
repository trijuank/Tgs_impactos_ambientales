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
    application: 'Delimita el sistema y permite identificar qué partes del tramo urbano pertenecen o no al área de estudio.',
    example: 'La instalación de dos estaciones de muestreo que actúan como límites geográficos del análisis del río.',
  },
  {
    num: 2,
    name: 'Entorno',
    category: 'estructural',
    application: 'El sistema se encuentra inmerso en un área de condiciones y sucesos que influyen en su comportamiento, como el régimen climático.',
    example: 'Las diferencias en la calidad del agua registradas entre temporadas secas y lluviosas.',
  },
  {
    num: 3,
    name: 'Totalidad',
    category: 'estructural',
    application: 'Plantea que el estudio del río debe situarse a nivel de toda su cuenca y no enfocarse solo en vertimientos o elementos individuales.',
    example: 'El análisis de la calidad del agua evaluando todas las descargas combinadas del municipio.',
  },
  {
    num: 4,
    name: 'Equifinalidad',
    category: 'dinamico',
    application: 'Demuestra cómo a partir de distintas condiciones iniciales de contaminación se puede llegar a un mismo fin de deterioro.',
    example: 'Tanto un vertimiento agrícola como uno industrial conducen a la disminución de oxígeno disuelto en el agua.',
  },
  {
    num: 5,
    name: 'Jerarquía',
    category: 'estructural',
    application: 'Indica el rango de los respectivos subsistemas urbanos entre sí y su nivel de relación con el sistema mayor de la cuenca hidrográfica.',
    example: 'El tramo municipal actúa como un subsistema de una subcuenca, que a su vez alimenta a una gran macrocuenca.',
  },
  {
    num: 6,
    name: 'Complejidad',
    category: 'estructural',
    application: 'Se asocia a la gran cantidad de elementos bióticos, abióticos y sociales del río, junto con sus potenciales interacciones.',
    example: 'La medición y cruce simultáneo de múltiples variables como pH, microorganismos e infraestructura sanitaria.',
  },
  {
    num: 7,
    name: 'Sinergia',
    category: 'relacional',
    application: 'El funcionamiento del sistema es entendido por la interacción de sus partes (caudal y vertimientos), donde el todo es más que la suma de sus partes aisladas.',
    example: 'El flujo del río logra regular de manera conjunta una carga contaminante que ningún componente podría manejar por sí solo.',
  },
  {
    num: 8,
    name: 'Emergencia',
    category: 'relacional',
    application: 'Los elementos que componen el sistema (plásticos y bacterias) generan al interactuar propiedades de riesgo que no existen en ellos individualmente.',
    example: 'Los microplásticos vertidos se transforman en vectores de dispersión de patógenos, creando un nuevo riesgo sanitario.',
  },
  {
    num: 9,
    name: 'Resiliencia',
    category: 'dinamico',
    application: 'Es la capacidad que tiene el sistema del río para resistir los cambios drásticos producidos por los vertimientos de su entorno.',
    example: 'La dilución progresiva de contaminantes que previene el colapso total de la vida biológica.',
  },
  {
    num: 10,
    name: 'Adaptabilidad',
    category: 'dinamico',
    application: 'Es la capacidad que tiene la comunidad biótica del sistema para adaptarse a los cambios de calidad de agua inducidos por su entorno.',
    example: 'La alteración en la supervivencia y población de especies bentónicas según el nivel de contaminación.',
  },
  {
    num: 11,
    name: 'Entropía',
    category: 'dinamico',
    application: 'Es el desgaste físico y biológico que el río presenta por el transcurso del tiempo ante el exceso de contaminación, tendiendo a degradarse.',
    example: 'La muerte progresiva de la cuenca tras varias décadas ininterrumpidas de recibir descargas sin tratamiento.',
  },
  {
    num: 12,
    name: 'Neguentropía',
    category: 'dinamico',
    application: 'Es la energía o recursos que el sistema importa para mantener su organización y evitar degenerarse por completo.',
    example: 'La inyección de capital en Plantas de Tratamiento de Aguas Residuales (PTAR) para recuperar el ecosistema.',
  },
  {
    num: 13,
    name: 'Homeóstasis',
    category: 'dinamico',
    application: 'Mecanismos reguladores propios del cuerpo de agua que buscan volver al río a un estado inicial de limpieza.',
    example: 'Los procesos bioquímicos naturales de sedimentación y oxigenación que depuran parcialmente las descargas.',
  },
  {
    num: 14,
    name: 'Equilibrio',
    category: 'dinamico',
    application: 'Busca mantener la calidad del agua del sistema en el mismo estado a lo largo del tiempo, demandando un mayor consumo de energía depurativa.',
    example: 'El constante requerimiento de oxígeno para oxidar y estabilizar la materia orgánica vertida de manera ininterrumpida.',
  },
  {
    num: 15,
    name: 'Retroalimentación',
    category: 'dinamico',
    application: 'Las salidas del sistema (índices de agua) vuelven a ingresar como información, permitiendo el control y la toma de medidas correctivas ambientales.',
    example: 'El uso de resultados de laboratorio por parte de las autoridades para multar o exigir mejores tratamientos.',
  },
  {
    num: 16,
    name: 'Estructura',
    category: 'estructural',
    application: 'Se refiere a las diferentes partes que conforman el sistema ribereño y a las complejas interacciones entre ellas.',
    example: 'La conexión física a través de tuberías entre viviendas, colectores, la industria y el cuerpo receptor.',
  },
  {
    num: 17,
    name: 'Recursividad',
    category: 'estructural',
    application: 'El sistema urbano está compuesto por partes que poseen características que los convierten, a su vez, en subsistemas independientes.',
    example: 'Una planta de tratamiento industrial dentro de la cuenca es un subsistema técnico con sus propias entradas y salidas.',
  },
  {
    num: 18,
    name: 'Complementariedad',
    category: 'relacional',
    application: 'Ningún sistema es completo en sí mismo, por lo cual el río es subsidiario de la gestión de otros sistemas con los cuales forma su entorno.',
    example: 'La dependencia biológica del río respecto al accionar administrativo de una Corporación Autónoma Regional.',
  },
  {
    num: 19,
    name: 'Multicausalidad',
    category: 'relacional',
    application: 'Hace referencia a que cada comportamiento de deterioro en el agua se da en función de muchas causas simultáneas.',
    example: 'El aumento de patógenos causado conjuntamente por densidad poblacional, efluentes térmicos y falta de regulación.',
  },
];
