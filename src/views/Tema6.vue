<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Embalaje de los documentos
    
    .row
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src="@/assets/curso/temas/t6/img1.png", alt="")
      .col-lg-9(data-aos="fade-left")
        .tarjeta.bgi-2.h-100.p-4.p-lg-5
          .tarjeta.tarjeta--blanca.py-4
            SlyderA.sin-botones
              .row.justify-content-center
                .col-md-4.col-8.mb-4.mb-md-0
                  img(src="@/assets/curso/temas/t6/slyder1.svg", alt="")            
                .col-lg-6.col-md-9.col-8
                  h5 El empaque
                  p Suele ser utilizado generalmente en las estrategias de marketing para garantizar la calidad de un producto. Pero cuando se habla de la gestión documental se entiende por empaque al sobre, envoltura, plastificación o cubierta en otro tipo de material, donde se guarda el documento al momento de su despacho para protegerlo hasta el momento de la entrega al destinatario.
              .row.justify-content-center
                .col-lg-10.col-md-9.col-8
                  h5 El embalaje
                  p Generalmente suele asociarse para cantidades más grandes de documentos o acervos que requieren ser trasladados, buscando conservar sus propiedades antes de iniciar el recorrido, durante el mismo y al final de su entrega. Se diligencia un formato con los datos más relevantes del documento, generalmente se traza un diseño específico según la empresa y los criterios documentales que se tengan en ella. Cuando la correspondencia está orientada a dar una respuesta, no sólo se registran los criterios de su salida o despacho sino que se anota también el consecutivo y fecha del documento que antecede a este; esta operación constituye el control y el trámite documental.
              .row.justify-content-center
                .col-lg-10.col-md-9.col-8
                  h5 El envío
                  p En primera medida se necesita tener claridad sobre la forma de envío que se desea realizar, definiendo el nivel geográfico de su traslado y las condiciones de empaque y seguridad; estos procedimientos deben garantizar que el documento llegue a su destino final sin sufrir alteraciones en su contenido o esencia. Además, se debe escoger la mejor forma de empaque, la empresa que prestará el servicio y la verificación de tarifas que implica realizar esta gestión; ya que, se debe ser consciente que acudir a este medio, requiere tener un fondo que solvente los costos de la unidad de correspondencia.
    
    

</template>

<script>
export default {
  name: 'Tema6',
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
