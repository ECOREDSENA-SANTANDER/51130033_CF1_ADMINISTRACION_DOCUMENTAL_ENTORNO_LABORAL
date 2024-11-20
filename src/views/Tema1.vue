<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Historia y evolución de los archivos
    
    .row.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src="@/assets/curso/temas/t1/1.svg", alt="")
      .col-sm-12.col-lg-9
        p.mb-0 Es muy probable que la historia de los archivos se remonte al origen de la escritura, suceso que liga al hombre con la comunicación y el surgimiento de instituciones. El manejo de la información, entonces, tiene su punto de partida desde el comienzo de la historia de la humanidad. Desde tiempos muy remotos fue tanta la información que se logró reunir, que es posible que haya dado origen a la primera agrupación de escritos bien organizados, los que se convirtieron en instrumento de control de las riquezas y poder, en las civilizaciones posteriores.
    p.mb-5 Entre las culturas que más aportaron a este surgimiento documental, se encuentran: 
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-6.col-lg-4.mb-0
        .tarjeta--boton.color-acento-contenido.p-4.h-card-1.mb-cus
          .row.justify-content-center.mb-3.d-none.d-lg-block
            .col-4.m-auto
                img(src='@/assets/curso/temas/t1/2.svg')
          p.mb-0.text-center Los egipcios, ya que estos reflejaban en los templos del clérigo inscripciones dirigidas a la doctrina. Esto también ocurría en China e India. 
      .col-sm-12.col-md-6.col-lg-4.mb-0
        .tarjeta--boton.color-acento-contenido.p-4.h-card-1.mb-cus
          .row.justify-content-center.mb-3.d-none.d-lg-block
            .col-4.m-auto
                img(src='@/assets/curso/temas/t1/3.svg')
          p.mb-0.text-center Las civilizaciones de Roma y Grecia dejaban por escrito testamentos y otros documentos, en vestigios en madera y mármol. 
      .col-sm-12.col-md-6.col-lg-4.mb-0
        .tarjeta--boton.color-acento-contenido.p-4.h-card-1.mb-cus
          .row.justify-content-center.mb-3.d-none.d-lg-block
            .col-4.m-auto
                img(src='@/assets/curso/temas/t1/4.svg')
          p.mb-0.text-center Los arcadios, sumerios y babilonios tallaban sus escritos en pieles, en madera y mármol con implementos metálicos, y en tablillas de arcilla blanda para dejar escrituras con instrumentos en forma de cuña. 

    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7
        p.mb-3 A partir de dichas culturas se da inicio a la evolución del archivo. Se tiene registro en los siglos XII y XIII de los primeros indicios de documentación con carácter financiero. Hacia el siglo XIV se encuentran archivos bien estructurados y cumpliendo con algunos de los requerimientos que rigen en la actualidad, como por ejemplo su seguridad. Como muestra de ello, se puede referenciar al archivo de la corona Real, el cual acude a otra clase de soportes documentales como planos, mapas y otros hallazgos importantes cronológicamente hablando. 
        p.mb-3 Hacia el siglo XV y XVI se identifica a España, en cabeza de Carlos I, como centro pionero de los archivos. Hacia los siglos XVII y XVIII se inicia una investigación más detallada acerca de los archivos, en cuanto a su importancia y a la diferenciación de su carácter general y administrativo. Pero es realmente en el siglo XIX, al inicio de la revolución francesa, cuando se toma conciencia de la funcionalidad de los archivos y la importancia de concentrar documentos en archivos nacionales, así como, la necesidad de estudiar como archivista. Este reconocimiento es otorgado por Napoleón, quien pretendió unificar los archivos de los países europeos en París. 
        p.mb-0 Actualmente, en los países más desarrollados el interés por la investigación se apoya en los archivos existentes y de acuerdo con el área objeto de estudio, dado que, ya no se poseen sólo documentos textuales, sino, otra clase de soportes documentales. Es así como se incorpora tecnología que regula, a nivel general, el manejo archivístico.
      .col-lg-5.d-none.d-lg-block
        img(src="@/assets/curso/temas/t1/5.png", alt="")
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Concepto de archivo 
    p.mb-0 Conjunto de documentos, sea cual fuere su fecha, forma y soporte material, acumulados en un proceso natural por una persona natural o entidad pública o privada, en el transcurso de su gestión. 
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Importancia de los archivos. 
    p.mb-0 Los archivos son importantes para las entidades, porque los documentos que los conforman son imprescindibles para la toma de decisiones, debido a que la información contenida sirve de testimonio para los trámites que pueda requerir la empresa.
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
