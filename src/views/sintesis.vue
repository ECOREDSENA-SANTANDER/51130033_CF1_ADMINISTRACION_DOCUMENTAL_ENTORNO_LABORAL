<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El conocimiento y comprensión de los conceptos y normativa de la organización archivística es fundamental para la administración documental, adicionalmente, conocer las cualidades de los archivos, las características y tipos de los documentos y los elementos y herramientas que se deben utilizar dentro de un archivo representan la adquisición de competencias técnicas para cumplir a cabalidad con un cargo tan importante como un archivista o administrador documental. En el siguiente mapa, se mencionan y relacionan los temas principales del componente:
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El diagrama menciona el contenido del componente que se centra en las características, normas y embalaje de las comunicaciones oficiales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
