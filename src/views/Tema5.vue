<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Categorización de los archivos
    
    p Los archivos se clasifican de acuerdo al orden territorial que en ellos se administra, tal y como lo especifica el Archivo General de la Nación, en el artículo 7 de la Ley General de Archivos de Colombia. 
    p Los archivos desde el punto de vista de su jurisdicción de competencias se clasifican en:
    .bloque-texto-g.t5.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img.d-none.d-lg-block(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t5/1.svg')})`}")
      .bloque-texto-g__texto.p-4.pe-lg-5.d-flex.flex-column
          .card-title-cus.mb-5
            h4.mb-0.py-3.px-4 Archivo General de la Nación
          p.w-80 Es un ente que regula las sanciones y responsabilidades del archivo, de acuerdo a la pertinencia pública de cada una de sus entidades:
          ul.lista-ul--color.color-primario.d-flex.flex-column
            li
              i.fas.fa-file-alt
              | Archivo general del departamento.
            li
              i.fas.fa-file-alt
              | Archivo general del municipio.
            li
              i.fas.fa-file-alt
              | Archivo general del distrito.

    .tarjeta--container.row.mb-5
      .col-sm-12.col-lg-6.tarjeta.color-primario.p-5.mb-cus
        .row.justify-content-center.mb-4
          .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/3.svg')
          .col-sm-12.col-lg-10
            h4.bg-color-1 Territorialidad
        p.mb-3.text-white Según el artículo 8 de la Ley General de Archivos de Colombia, los archivos desde el punto de vista territorial, se clasifican en:   
        ul.lista-ul--color.color-acento-contenido
            li.d-flex
              i.fas.fa-file-alt
              span.text-white Archivos de entidades del orden nacional. 
            li.d-flex
              i.fas.fa-file-alt
              span.text-white Archivos de entidades del orden departamental. 
            li.d-flex
              i.fas.fa-file-alt
              span.text-white Archivos de entidades del orden distrital. 
            li.d-flex
              i.fas.fa-file-alt
              span.text-white Archivos de entidades del orden metropolitano. 
            li.d-flex
              i.fas.fa-file-alt
              span.text-white Archivos de entidades del orden municipal. 
            li.d-flex
              i.fas.fa-file-alt
              span.text-white Archivos de entidades del orden local. 
            li.d-flex
              i.fas.fa-file-alt
              span.text-white Archivos de las nuevas estadidades territoriales que se creen por ley. 
            li.d-flex
              i.fas.fa-file-alt
              span.text-white Archivos de los territorios indígenas que se crearán cuando la ley los desarrolle. 
      .col-sm-12.col-lg-6.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/4.svg')
          .col-sm-12.col-lg-10
            h4.bg-color-1 Organización del Estado 
        p.mb-3 Según el artículo 9 de la ley general de archivos de Colombia, los archivos desde el punto de vista de la organización del estado se clasifican en: 
        ul.lista-ul--color.color-primario
            li.d-flex
              i.fas.fa-file-alt
              span Archivos de la rama ejecutiva. 
            li.d-flex
              i.fas.fa-file-alt
              span Archivos de la rama legislativa. 
            li.d-flex
              i.fas.fa-file-alt
              span Archivos de la rama judicial. 
            li.d-flex
              i.fas.fa-file-alt
              span Archivos de los organismos de orden de control. 
            li.d-flex
              i.fas.fa-file-alt
              span Archivos de los organismos autónomos. 


</template>

<script>
export default {
  name: 'Tema5',
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
