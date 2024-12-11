<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Tipología Documental
    p.mb-0 La tipología documental es la unidad documental simple originada de una actividad administrativa, en cumplimiento de las funciones o actividades de la empresa.
    p Ejemplos de tipología documental son: resoluciones, memorandos, informes, entre otros.
    p La tipología documental expresa de manera clara la actuación y toma de decisiones por parte de la administración, decisiones que se ven reflejadas en un determinado soporte —papel, microfilm, medio electrónico, entre otros.
    p Generalmente, los tipos documentales de un mismo soporte, acuden por estructura, a caracteres internos específicos a cada uno de ellos determinando su contenido. Es importante considerar que los tipos documentales se derivan propiamente de cada una de las instancias o dependencias que los generan dentro de cada institución, lo que implica de manera práctica, que cada función produce uno o varios tipos de documentos.

</template>

<script>
export default {
  name: 'Tema8',
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
