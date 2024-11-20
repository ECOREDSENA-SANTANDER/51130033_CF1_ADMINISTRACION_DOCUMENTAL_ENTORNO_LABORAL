<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Principios y normas archivísticas
    
    .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t4/img1.svg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Los archivos y centros documentales han venido aumentando su participación, causado por la gran necesidad de información requerida por los diversos usuarios; esto ha traído como consecuencia la definición de requisitos y procedimientos que estructuren el análisis documental, tomando como referente organizacional las especiales características de cada documento y la instauración de un adecuado método de archivo, dando origen a las normas y principios de archivística como instrumento regulador que garantice el intercambio de información, y facilite el régimen requerido para la administración documental; aplicando, además, procedimientos técnicos en la recepción y despacho documental. 
    

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Pautas para la administración de comunicaciones oficiales

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-10
        .cajon.color-secundario.p-4.px-lg-5.mb-4
          p.mb-0 #[b ACUERDO No. 001 del 2024 (29 de febrero) “Por el cual se establece el Acuerdo Único de la Función Archivística, se definen los criterios técnicos y jurídicos para su implementación en el Estado Colombiano y se fijan otras disposiciones”:] norma establecida para orientar la adecuada prestación de los servicios ofrecidos por las unidades de correspondencia de las entidades públicas y privadas, o aquellas privadas que cumplen funciones públicas, instituyendo pautas que hagan efectivo su cumplimiento bajo los principios que rigen la administración pública. 
    
    .row.mb-4
      .col-lg-8(data-aos="fade-right")
        p.mb-3 #[b Norma Icontec GTC 185:] el propósito de esta norma es el de brindar herramientas a las empresas para que le faciliten la gestión de los documentos. Busca contribuir con la disminución del tiempo y costos sin dejar de lado la calidad. Esta norma aplica tanto a las entidades gubernamentales como al sector privado, con el fin de orientar sus procesos archivísticos hacia una gestión de mejoramiento continuo, haciéndolo cada vez más competitivo. 
        p El primordial objeto de la Norma Icontec GTC 185, es el de plantear una serie de recomendaciones para la elaboración de los diversos tipos de documentos que generan las organizaciones. Teniendo en cuenta que, su enfoque es el de facilitar la proyección de una apropiada imagen corporativa, al establecer una vinculación directa entre la norma prescrita y todo el personal involucrado en la generación de documentos institucionales. 
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src="@/assets/curso/temas/t4/img2.png", alt="")
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Normas de gestión de calidad.
        img.mb-2(src="@/assets/curso/temas/t4/fig1.svg", alt="La figura menciona las siguientes normas de gestión de calidad: -NTC1001 papel, formatos. -NTC 1486 presentación de tesis y trabajos de grado. -NTC 1057 Documentación. Guía para numeración de divisiones y subdivisiones en documentos escritos.-NTC 4436 información y documentación. Papel para documentos de archivo. Requisitos para la permanencia y durabilidad. -NTC5313 Información y documentación Reglas para la abreviatura de títulos de publicaciones.")
        figcaption Fuente: SENA.
    
    p.mb-4 La norma hace especificaciones orientadoras sobre los diversos documentos, en aspectos relacionados con su estructura y aplicabilidad. Algunos documentos referenciados dentro de esta normatividad son los siguientes: 

    .row.align-items-end.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src="@/assets/curso/temas/t4/img3.png", alt="")
      .col-lg-9(data-aos="fade-left")
        SlyderF.fle-circulo(columnas="col-lg-4 col-md-6")
          .tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-4.col-lg-6.col-md-5.mb-3
                img(src='@/assets/curso/temas/t4/slyder1.svg' alt='AvatarTop')
            h4.text-center  Carta comercial
            p.text-center Comunicación escrita que se utiliza en las relaciones comerciales entre entidades y personas naturales; igualmente en las relaciones entre las empresas y sus empleados.          
          .tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-4.col-lg-6.col-md-5.mb-3
                img(src='@/assets/curso/temas/t4/slyder2.svg' alt='AvatarTop')
            h4.text-center  Circular
            p.text-center Comunicación escrita de interés común, con el mismo contenido dirigido a un grupo específico.           
          .tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-4.col-lg-6.col-md-5.mb-3
                img(src='@/assets/curso/temas/t4/slyder3.svg' alt='AvatarTop')
            h4.text-center  Memorando
            p.text-center Comunicación escrita que se emplea en las empresas para tratar asuntos internos. 
          .tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-4.col-lg-6.col-md-5.mb-3
                img(src='@/assets/curso/temas/t4/slyder4.svg' alt='AvatarTop')
            h4.text-center  Actas administrativas
            p.text-center Documento escrito que tiene lo sucedido, tratado o acordado en una reunión o situación específica.          
          .tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-4.col-lg-6.col-md-5.mb-3
                img(src='@/assets/curso/temas/t4/slyder5.svg' alt='AvatarTop')
            h4.text-center   Informe administrativo
            p.text-center Documento que describe o da a conocer datos precisos sobre el estado de cualquier actividad, relativos a un caso concreto para conocer resultados de procesos administrativos.

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
