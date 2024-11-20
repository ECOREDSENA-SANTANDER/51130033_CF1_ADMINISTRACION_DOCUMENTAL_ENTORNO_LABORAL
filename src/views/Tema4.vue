<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Cualidades del archivista 
    p.mb-3 En la actualidad, y como consecuencia de la sociedad globalizada que es afectada por los grandes avances en las nuevas tecnologías de la información y la comunicación, se reconoce el factor económico que aporta la era de la información y el conocimiento. Esto trae como consecuencia el surgimiento de nuevos valores agregados para el profesional en archivística, exigiéndole una preparación continua en procesos y procedimientos basados en herramienta e instrumentos informáticos en los cuales se apoya la ciencia documental hoy día. 
    p.mb-5 Las características esenciales que deben acompañar la acción eficaz del archivista se resumen en los siguientes aspectos:
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/1.png')
      .col-sm-12.col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Orden")
            .col-12.mb-0.ml-5
              p.mb-0 Es el método que se utiliza para organizar los elementos y documentos, permitiendo ejercer un control y ubicación de estos. 
          .row(titulo="Responsabilidad")
            .col-12.mb-0.ml-5
              p.mb-0 Es una tarea de dedicación y actualización. 
          .row(titulo="Prontitud")
            .col-12.mb-0.ml-5
              p.mb-0 Cuando se soliciten los archivos se deben encontrar inmediatamente - disponibilidad inmediata de archivos. 
          .row(titulo="Cordialidad")
            .col-12.mb-0.ml-5
              p.mb-0 El funcionario responsable del archivo debe generar buena disposición en el momento de dar información en la búsqueda y suministro de los documentos. 
              
          .row(titulo="Sigilo Profesional")
            .col-12.mb-0.ml-5
              p.mb-0 Las personas que desarrollen funciones administrativas, secretariales o archivísticas, deben ser reservadas en el manejo de la información por el grado de confidencialidad que esta requiere. 
          .row(titulo="Concentración")
            .col-12.mb-0.ml-5
              p.mb-0 La ejecución de las actividades de archivo se debe realizar minuciosamente para evitar errores, que no permiten lograr su funcionalidad.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
