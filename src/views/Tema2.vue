<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Clases de archivo 
    
    p.mb-0 Los archivos se clasifican de acuerdo al tiempo establecido en cada una de las etapas, es decir, archivo de gestión, central o histórico. 
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Según la Organización 
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-9 
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span 1
            span.mb-0 #[b Archivo centralizado:] cuando una sola dependencia controla toda la documentación de la organización. 
          li.d-flex
            .lista-ol--cuadro__vineta
              span 2
            span.mb-0 #[b Archivo descentralizado:] aquel que lleva cada una de las dependencias de la organización. Es decir, es independiente de todo proceso archivístico. 
          li.d-flex
            .lista-ol--cuadro__vineta
              span 3
            span.mb-0 #[b Archivo descentralizado con control descentralizado:] este depósito de información lo lleva cada dependencia y la responsabilidad es del jefe de cada oficina. 
          li.d-flex
            .lista-ol--cuadro__vineta
              span 4
            span.mb-0 #[b Archivo descentralizado con control centralizado:] este depósito de archivo se maneja de acuerdo con las necesidades de cada dependencia con archivo descentralizado, pero que a su vez se controla desde el archivo central. 
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/temas/t2/1.png", alt="")


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2  Según su Uso 
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-9 
        p.mb-5 El archivo se clasifica de acuerdo con el tiempo que se determina en cada una de las etapas documentales, sujetándose a los requerimientos de la organización: 
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span 1
            span.mb-0 #[b Archivo activo:] compuesto por documentos del año actual o años anteriores, que se encuentren en proceso de tramitación, como: historias laborales, resoluciones, contratos y demás documentos que se encuentren en el proceso de consulta. Por tanto, es el que satisface las necesidades de conservación y consulta permanente. 

          li.d-flex
            .lista-ol--cuadro__vineta
              span 2
            span.mb-0 #[b Archivo semiactivo:] son los documentos que varían en su periodo de conservación y su consulta es menor. 

          li.d-flex
            .lista-ol--cuadro__vineta
              span 3
            span.mb-0 #[b Archivo inactivo:] son los documentos con una durabilidad perpetua en el periodo de conservación, de acuerdo con sus disposiciones legales, fiscales, comerciales o históricas. 
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/temas/t2/2.png", alt="")



    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3  Según su Naturaleza
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-9 
        p.mb-5 Se clasifica de acuerdo con el tipo de entidad que realiza el proceso de archivo: 
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span 1
            span.mb-0 #[b Archivo público:] es todo documento que pertenece a las entidades del Estado. 


          li.d-flex
            .lista-ol--cuadro__vineta
              span 2
            span.mb-0 #[b Archivo privado de interés público:] son aquellos documentos que por su valor histórico, investigativo, científico o cultural son de interés público.  


          li.d-flex
            .lista-ol--cuadro__vineta
              span 3
            span.mb-0 #[b Archivo privado:] son los documentos que pertenecen a personas naturales o jurídicas.
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/temas/t2/3.png", alt="")  
    Separador 
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4  Según su Ciclo Vital
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-12
        ol.lista-ol--cuadro.lista-ol--separador
            li.d-flex
              .lista-ol--cuadro__vineta
                span 1
              span.mb-0 #[b Archivo de gestión:] corresponde a la documentación que se encuentra depositada y está sujeta a consulta administrativa por toda la organización. 


            li.d-flex
              .lista-ol--cuadro__vineta
                span 2
              span.mb-0 #[b Archivo central:] es la agrupación de documentos que han sido transferidos por diferentes archivos de gestión de cada dependencia; su consulta no es tan frecuente, pero siguen en vigencia. 


            li.d-flex
              .lista-ol--cuadro__vineta
                span 3
              span.mb-0 #[b Archivo histórico:] aquellos documentos que se transfieren desde el archivo central al archivo de conservación permanente. 
      
    figure
      img(src='@/assets/curso/temas/t2/4.svg', alt='Texto que describa la imagen')
      figcaption Fuente: SENA
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
