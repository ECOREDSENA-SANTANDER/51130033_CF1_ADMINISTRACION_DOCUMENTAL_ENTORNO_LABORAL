<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema:
        'Conceptualización y normativa archivística para la organización documental',
      titulo: 'Apropiación de conceptos',
      introduccion:
        '<b>Objetivo:</b> Validar el conocimiento adquirido sobre los conceptos relacionados con la organización documental',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'Cuando una sola dependencia controla toda la documentación de la organización se le llama archivo centralizado.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien hecho!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Cuando la información la lleva cada dependencia y la responsabilidad es del jefe de cada oficina se conoce como archivo descentralizado con control centralizado.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien hecho!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Los documentos que varían en su periodo de conservación y su consulta no es tan frecuente se conocen como archivos activos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien hecho!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Los archivos que satisfacen las necesidades de conservación y consulta permanente se conocen como archivos activos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien hecho!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Los documentos que pertenecen a las entidades del Estado se conocen como archivos privados.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien hecho!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Los archivos privados son los documentos que pertenecen a personas naturales o jurídicas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien hecho!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Las transferencias desde el archivo central al archivo histórico se conocen como transferencias secundarias.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien hecho!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Que un documento sea funcional, significa que su clasificación debe ser precisa en el momento de archivar para evitar equivocaciones.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien hecho!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Mapoteca es aquel lugar en el cual se guarda y conserva todo tipo de mapas.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien hecho!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Los higrómetros son aparatos que miden tanto la temperatura como la humedad, al mismo tiempo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien hecho!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente trabajo! Ha demostrado un sólido conocimiento.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
