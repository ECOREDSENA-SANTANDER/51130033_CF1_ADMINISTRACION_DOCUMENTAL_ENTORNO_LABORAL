<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Comunicaciones oficiales
    
    p Son todas aquellas recibidas o producidas en desarrollo de las funciones asignadas legalmente a una entidad, independientemente del medio utilizado; estas comunicaciones generan como soporte una serie de documentos, y lo hacen tanto en el ámbito institucional interno como en el externo. 


    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Comunicaciones oficiales internas 
    
    .bloque-texto-g.t5.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t5/img1.png')})`}")
      .bloque-texto-g__texto.p-4.pe-lg-5
          p Son todas aquellas comunicaciones de carácter oficial de las entidades públicas o privadas, donde se manejan controles y procedimientos establecidos.  
          br
          br
          .row.d-flex.mb-4
            .col-lg-2.col-md-3.col-4.mb-2.mb-md-0
              img.w-75(src="@/assets/curso/temas/t5/icono1.svg", alt="")
            .col-lg-10.col-md-9
              p #[b El procedimiento inicia con la recepción de comunicaciones oficiales internas en cada dependencia, y termina con la revisión respectiva; pero no sin antes haber realizado la correspondiente actividad archivística y su registro en la planilla de distribución.]
          p Esta ordenación se estructura mediante la identificación asignada con la ayuda de códigos, según la dependencia y de forma consecutiva en la Tabla de Retención Documental, permitiendo así realizar seguimientos pertinentes. Estas comunicaciones internas derivan en las denominadas comunicaciones oficiales. 
    
    
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Comunicaciones oficiales recibidas

    .row
      .col-lg-1.col-md-2.col-3.mb-3.mb-md-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/t5/icono1.svg", alt="")
      .col-lg-11.col-md-10(data-aos="fade-left") 
        p Aquellas que ingresan a la empresa, las cuales deben ser revisadas para verificar la competencia, los anexos, el destino y los datos de origen del ciudadano o entidad que las remite, dirección donde se deba enviar respuesta y asunto correspondiente; si es competencia de la entidad, se procederá a la radicación del mismo. 
    

    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Comunicaciones oficiales enviadas 
    
    .row
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src="@/assets/curso/temas/t5/img2.png", alt="")
      .col-lg-8(data-aos="fade-left")
        .row.mb-3
          .col-lg-2.col-md-3.col-6.mb-2.mb-md-0
            img.w-50(src="@/assets/curso/temas/t5/icono1.svg", alt="")
        p Aquellas en soporte físico. Contiene el documento original y máximo dos copias del mismo. El original se remite a su destinatario final, realizando el debido procedimiento establecido por cada entidad correspondiente. El objetivo primordial con estas comunicaciones al desarrollar las actividades estructuradas, es el de distribuirlas mediante el uso adecuado de procedimientos normalizados, de manera que, su destino sea alcanzable de manera segura y oportuna. 


    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Formato para la recepción y despacho de documentos 

    p.mb-4 Es el conjunto de operaciones de verificación y control que realiza una entidad pública o privada en la admisión despacho de documentos, su aplicación se realiza tanto a la documentación interna como a la externa.   
    p El formato es el establecido por la empresa en lo que tiene que ver con la admisión o despacho de documentos, debiendo cumplir con los siguientes pasos:       

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--blanca" data-aos="fade-down")
      .row(titulo="Recepción")
        .row.justify-content-center.mb-4
          .col-lg-8.mb-4
            p Consiste en recibir las comunicaciones oficiales provenientes de diferentes entidades y diversos medios, tanto físico o directo, como magnético o indirecto. La comunicación física o directa es entregada por la persona interesada en una unidad de correspondencia, teniendo en cuenta los siguientes aspectos:
            ol.lista-ol--cuadro.color-primario.fa-ul
              li 
                .lista-ol--cuadro__vineta
                  span.fw-bold 1
                | La comunicación está dirigida a la empresa o a un funcionario. 
              li 
                .lista-ol--cuadro__vineta
                  span.fw-bold 2
                | Se trata de comunicación oficial.
              li 
                .lista-ol--cuadro__vineta
                  span.fw-bold 3
                | El sobre debe estar correctamente marcado.
          .col-lg-3.mb-4.d-none.d-lg-block
            img(src="@/assets/curso/temas/t5/acordion1.png", alt="")
          .col-lg-11
            p.mb-0 La recepción de comunicación indirecta, es la que ha sido enviada por correo o medios electrónicos. Esta forma de recepción debe tener en cuenta los siguientes requerimientos: 
        .row.justify-content-center
          .col-lg-6
            ul.lista-ul--color.fa-ul.color-primario
              li 
                i.fas.fa-circle
                | El asunto debe ser competente a la dependencia que va dirigida. 
              li 
                i.fas.fa-circle
                | Debe ser firmada. 
              li 
                i.fas.fa-circle
                | Debe tener fecha actualizada. 
          .col-lg-5  
            ul.lista-ul--color.fa-ul.color-primario
              li 
                i.fas.fa-circle
                | En la comunicación se cita el domicilio del remitente. 
              li 
                i.fas.fa-circle
                | Los anexos deben estar completos.     
      .row.justify-content-center(titulo="Clasificación")
        .col-lg-11
          p.mb-3 Este paso consiste en separar los documentos en el momento que se reciben; según el tipo de comunicaciones, estas se dividen en dos grupos:
          .row.justify-content-center
            .col-lg-6
              img.mb-4.width-80(src="@/assets/curso/temas/t5/acordion2.svg", alt="")
              p #[b Comunicación oficial:] “son todas aquellas comunicaciones recibidas o producidas en desarrollo de las funciones asignadas legalmente a una entidad, independientemente del medio utilizado” (Acuerdo 060 de 2001). Este grupo se denomina documentos radicables. 
            .col-lg-6
              img.mb-4.width-80(src="@/assets/curso/temas/t5/acordion3.svg", alt="")
              p #[b Correspondencia:] “son todas las comunicaciones de carácter privado que llegan a las entidades, a título personal, citando o no el cargo del funcionario” (Acuerdo 060 de 2001). Estas no generan trámites para las instituciones. 
      .row.justify-content-center(titulo="Apertura")
        .col-lg-10
          p Este paso consiste en abrir el sobre o el empaque de las comunicaciones oficiales para verificar el contenido del documento y el de sus anexos. 
        .col-lg-1.d-none.d-lg-block
          img(src="@/assets/curso/temas/t5/acordion4.svg", alt="")
      .row.justify-content-center(titulo="Revisión")
        .col-lg-11
          p Consiste en el examen de anexos, del destinatario, de los datos de procedencia y de la verificación del asunto para poder contestar la solicitud, de acuerdo con la necesidad competente de la entidad y realizar su respectiva radicación. 
          p En el caso de la comunicación que no cumpla con todos los requisitos correspondientes en el proceso de revisión y verificación como por ejemplo no ir firmada, se considera anónima y deberá ser remitida sin radicar, además de proceder a una respectiva investigación. 
      .row.justify-content-center(titulo="Radicación")
        .col-lg-11
          p #[b “Radicación es el procedimiento por medio del cual las organizaciones asignan un número consecutivo a las comunicaciones recibidas o producidas, dejando constancia de la fecha y hora del recibo o del envío”] (Acuerdo 060 de 2001). 
          p La radicación se efectúa mediante la impresión de un sello en el documento que indica que es de propiedad de la organización. Este sello se denomina radicador, puede ser aplicado de forma manual, mecánica o sistematizada. En él se indica el número según orden de recepción, la fecha y quién lo recibió; además, le permite al remitente estar pendiente de la respuesta y en qué serie se encuentra archivado. 
          .row
            .col-lg-3.d-none.d-lg-block
              img(src="@/assets/curso/temas/t5/acordion5.png", alt="")
            .col-lg-9
              p.mb-3 #[b “Los procedimientos para la radicación de las comunicaciones oficiales velarán por la transparencia de la actuación administrativa, en el cual se establece el proceso de asignación de los consecutivos, no podrán reservar número de radicados, ni repetirlos, enmendaduras, corregidos o tachados”] (Acuerdo 060 de 2001). 
              p Según ICONTEC, (2009) en la Guía Técnica Colombiana, el espacio para colocar el sello radicador en la elaboración de cartas o de comunicaciones oficiales es en la zona 3, que corresponde al extremo superior derecho del documento. 
      .row.justify-content-center(titulo="Registro")
        .col-lg-11
          p Una vez radicadas las comunicaciones, se procede al registro, el cual consiste en la anotación de los datos más significativos de las solicitudes en un formato de registro, para su control y trámite dentro de la organización. La unidad de correspondencia registra la comunicación oficial con los siguientes datos: nombre de la persona o entidad remitente o destinataria, nombre o código de la dependencia competente, número de radicación y nombre del funcionario responsable del trámite. 
      .row.justify-content-center(titulo="Distribución o reparto")
        .col-lg-11
          p.mb-3 El paso subsiguiente al de registro, es el de proceder a la distribución o reparto hacia las oficinas que deben realizar el proceso de atención y trámite correspondiente. Las entidades que cuenten con la unidad de correspondencia realizan este procedimiento por medio de un mensajero interno o patinador, el cual hace los recorridos en horas fijas, dando así inicio al control y seguimiento de las comunicaciones, el cual consiste en vigilar que las comunicaciones oficiales continúen con su procedimiento normal sin demora ni extravió, en toda la secuencia del trámite.
          .row
            .col-lg-9
              p De acuerdo con la unidad de correspondencia, para este procedimiento de control se elaboran planillas, formatos y controles manuales o automatizados que permiten certificar la recepción de los documentos, por parte de los funcionarios asignados para estas funciones. 
              p Finalmente, para que el trámite de un documento se realice adecuadamente, se requiere que, desde su nacimiento hasta su final, cumpla con unas condiciones a nivel técnico en su elaboración. Es decir, que incluya los principios adecuados en la composición de su cuerpo y que sea acorde con el objetivo que pretenda con su destinación, de acuerdo con la ley general de archivos. 
            .col-lg-3.d-none.d-lg-block
              img(src="@/assets/curso/temas/t5/acordion6.png", alt="")
      .row.justify-content-center(titulo="Despacho de documentos")
        .col-lg-11
          p Dentro de los procesos que debe cumplir un documento se encuentra el de trámite de despacho o envío; este se da, una vez culminada su etapa de producción; la unidad de correspondencia debe garantizar la llegada a su destino sin contratiempo. 
          p Los pasos en el despacho de documentos le corresponden a la unidad de correspondencia encargada de este procedimiento. 
      .row.justify-content-center(titulo="Traslado de documentos")
        .col-lg-11
          p Corresponde al paso de estos desde el área que lo origina a la unidad de correspondencia, para ser enviado a su destino final. Para ello, se cuenta con la ayuda de una persona encargada internamente de realizar este proceso, también llamada “patinador”, pero, cuando la correspondencia debe cumplir con su ciclo externamente, se cuenta con la colaboración de la mensajería o empresas especializadas en envíos de correspondencias. El traslado de documentos, tanto interno como externo, debe cumplir con los respectivos procedimientos para registrar su salida, mediante un formato diligenciado según las políticas de la compañía, su empaque en sobres, bolsas o cajas según el tipo de documento, la compilación de estos, anexos y copias respectivas, si requiere de soportes.


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
