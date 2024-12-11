<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Cualidades de los archivos
    p.mb-3 Tiene que ver propiamente con las ventajas que este sistema presta a la organización, de manera que su correcta implementación adiciona elementos de competitividad al contar con herramientas sustentables de la información generada, patrimonio invaluable de conocimiento institucional. 
    p.mb-5 Son características de los documentos que componen un archivo: 
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        SlyderF.fle-circulo(columnas="col-xl-4 col-lg-6 col-md-6 col-sm-12")
          .tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-4.col-lg-6.col-md-5.mb-3
                img(src='@/assets/curso/temas/t3/1.svg')
            h5.text-center  Económicos
            p.text-center Ahorra costos derivados del tiempo y personal empleado en las búsquedas de documentación.
          .tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-4.col-lg-6.col-md-5.mb-3
                img(src='@/assets/curso/temas/t3/2.svg')
            h5.text-center  Simples
            p.text-center Identifica el contenido de la información de manera sencilla.
          .tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-4.col-lg-6.col-md-5.mb-3
                img(src='@/assets/curso/temas/t3/3.svg')
            h5.text-center  Funcionales
            p.text-center Permiten la operación de archivar y consultar los documentos de manera eficiente.
          .tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-4.col-lg-6.col-md-5.mb-3
                img(src='@/assets/curso/temas/t3/4.svg')
            h5.text-center  Exactos
            p.text-center La clasificación debe ser precisa en el momento de archivar para evitar equivocaciones.
          .tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-4.col-lg-6.col-md-5.mb-3
                img(src='@/assets/curso/temas/t3/5.svg')
            h5.text-center  Técnicos
            p.text-center Se registran las situaciones en la toma de decisión del responsable, para no delegar equivocadamente al personal técnico de archivo.
   
</template>

<script>
export default {
  name: 'Tema3',
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
