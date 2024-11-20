<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Pasos para la administración
    
    p.mb-4 Todo proceso para la administración de comunicaciones oficiales se encuentra bien estructurado en un conjunto de pasos o etapas que resultan necesarios como plena garantía para la realización de esta actividad, con el fin de simplificar el trabajo, mediante las orientaciones entregadas en este paso a paso, a manera de principios, métodos y procedimientos que van a facilitar una gestión documental rápida y segura. 

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-3.col-md-6.col-11.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/t2/tarj1-1.png", alt="")
            .text.p-lg-4.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xxl-4
                h4.mt-4.mb-3 La Planificación
                p Radica en un proceso lógico para alcanzar los objetivos del modo más eficiente siguiendo determinadas formas de acción. “metas” y “objetivos”. Los objetivos definen los pasos a cumplir para lograr las metas de las propuestas. 
      .col-lg-3.col-md-6.col-11.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            figure
              img(src="@/assets/curso/temas/t2/tarj1-2.png", alt="")
            .text.p-lg-4.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xxl-4
                h4.mt-4.mb-3 La Organización
                p Se utiliza para distribuir las responsabilidades entre los integrantes del equipo de trabajo, para establecer y reconocer las relaciones y vínculos necesarios.
      .col-lg-3.col-md-6.col-11.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/t2/tarj1-3.png", alt="")
            .text.p-lg-4.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xxl-4
                h4.mt-4.mb-3 La Dirección
                p Es la ejecución de los planes, la motivación, la comunicación; es decir, la etapa en la que se orienta al personal y los recursos.
      .col-lg-3.col-md-6.col-11.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/t2/tarj1-4.png", alt="")
            .text.p-lg-4.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xxl-4
                h4.mt-4.mb-3 El control
                p Es la acción de vigilancia de lo que se planeó, organizó y direccionó, con el fin de que lo propuesto, alcance el objetivo trazado.

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
