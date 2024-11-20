<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La administración
    
    .row.align-items-end
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src="@/assets/curso/temas/t1/img1.png", alt="")
      .col-lg-9(data-aos="fade-left")
        p.mb-3 Dentro de la gestión de archivos y documentos, la administración es entendida como un proceso secuencial de acciones y operaciones lógicas, necesarias en su aplicación y seguimiento, con el fin de generar resultados óptimos en la recepción, registro, entrega, alistamiento y distribución de las comunicaciones en toda estructura organizacional.
        .row.align-items-end
          .col-lg-9
            .bg1.p-4
              p.mb-0 De acuerdo con el proceso de maduración social a lo largo de la historia del hombre, gracias a la conceptualización y lineamientos de la administración se lograron formas de organización asociativa, en donde la asignación de responsabilidades y jerarquización del direccionamiento, facilitaron el desarrollo de procesos interactivos que orientaron progresos en la obtención de resultados esperados, dando origen a fases bien estructuradas de planeación, organización, direccionamiento y control de recursos disponibles, hecho incuestionable, de aplicación directa en la administración documental. 
          .col-lg-3.d-none.d-lg-block
            img(src="@/assets/curso/temas/t1/icono1.svg", alt="")

    
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
