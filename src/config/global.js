export default {
  global: {
    componenteFormativo:
      'Conceptualización y normativa archivística para la organización documental',
    descripcionCurso:
      'En la administración documental es fundamental el conocimiento y comprensión de los conceptos relacionados, como clases de archivos y sus características, adicionalmente las personas que trabajan en el archivo de una empresa por ser quienes resguardan y organizan información importante y crucial para la empresa, deben tener unas cualidades específicas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Historia y evolución de los archivos',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Concepto de Archivo', hash: 't_1_1' },
          {
            numero: '1.2',
            titulo: 'Importancia de los archivos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Clases de archivo',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Según la Organización', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Según su Uso', hash: 't_2_2' },
          { numero: '2.3', titulo: 'Según su Naturaleza', hash: 't_2_3' },
          { numero: '2.4', titulo: 'Según su Ciclo Vital', hash: 't_2_4' },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Cualidades de los archivos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Cualidades del archivista',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Categorización de los archivos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Elementos de archivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Características de los documentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'El documento: su definición',
            hash: 't_7_1',
          },
          { numero: '7.2', titulo: 'Clases de documentos', hash: 't_7_2' },
          {
            numero: '7.3',
            titulo: 'Características internas y externas de los documentos',
            subMenu: [
              {
                numero: '7.3.1',
                titulo: 'Caracteres de los documentos de archivo',
                hash: 't_7_3_1',
              },
              {
                numero: '7.3.2',
                titulo: 'Elementos de un documento de archivo',
                hash: 't_7_3_2',
              },
            ],
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Importancia y clasificación de los documentos',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '8.1', titulo: 'Según el Soporte', hash: 't_8_1' },
          {
            numero: '8.2',
            titulo: 'Según el Productor o Autor',
            hash: 't_8_2',
          },
          { numero: '8.3', titulo: 'Según su Finalidad', hash: 't_8_3' },
          {
            numero: '8.4',
            titulo: 'Según su Difusión en el Tiempo',
            hash: 't_8_4',
          },
          { numero: '8.5', titulo: 'Según su Funcionalidad', hash: 't_8_5' },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Tipología documental',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF1_51130033_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  /*complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],*/
  glosario: [
    {
      termino: 'Archivo',
      significado:
        'Conjunto de documentos generados como producto de una gestión, por lo general institucional. Una vez cumplido su trámite se deben conservar.',
    },
    {
      termino: 'Archivo de Gestión',
      significado:
        'Comprende toda la documentación que es sometida a continua utilización y consulta administrativa, por las oficinas productoras u otras que la soliciten.',
    },
    {
      termino: 'Archivo Central o Intermedio',
      significado:
        'Se agrupan documentos transferidos por los distintos archivos de gestión de la entidad respectiva, cuya consulta no es tan frecuente pero que siguen teniendo vigencia.',
    },
    {
      termino: 'Archivo Histórico',
      significado:
        'Es aquel al que se transfieren desde el archivo central los documentos de archivo de conservación permanente.',
    },
    {
      termino: 'Backup',
      significado:
        'Una copia de seguridad o copia de respaldo. En tecnologías de la información e informática es una copia de los datos originales que se realiza, con el fin de disponer de un medio de recuperación en caso de su pérdida.',
    },
    {
      termino: 'Legajo',
      significado:
        'Son dos tapas de cartulina con gancho legajador, en donde se aseguran los documentos de un mismo tema.',
    },
    {
      termino: 'Usuario',
      significado:
        'Personas que van en busca de una información que requieren. Los encontramos internos y externos.',
    },
    {
      termino: 'Abreviatura',
      significado:
        'Representación gráfica de una palabra reducida en una o varias de sus letras.',
    },
  ],
  referencias: [
    {
      referencia:
        'Archivo General de la Nación - Colombia. (30 de octubre de 2001). Acuerdo 060 - Pautas para la administración de las comunicaciones oficiales en las entidades públicas y las privadas que cumplen funciones públicas. Recuperado el 28 de septiembre de 2016.',
    },
    {
      referencia:
        'Docslide. (s.f.). La administración: el origen de la administración. Las organizaciones. Recuperado el 28 de septiembre de 2016. ',
    },
    {
      referencia:
        'Archivo General de la Nación. (2016). Banco terminológico. Recuperado el 12 de octubre de 2016. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carmen Milena Ferreira Ardila',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Rosa Elvia Quintero Guasca',
          cargo: 'Asesora pedagógica',
          centro:
            'Centro Industrial de Mantenimiento Integral - CIMI. - Regional Santander',
        },
        {
          nombre: 'Luis Orlando Beltrán Vargas',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial de Mantenimiento Integral - CIMI. - Regional Santander',
        },
        {
          nombre: 'Carolina Jiménez Suescun',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suárez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
