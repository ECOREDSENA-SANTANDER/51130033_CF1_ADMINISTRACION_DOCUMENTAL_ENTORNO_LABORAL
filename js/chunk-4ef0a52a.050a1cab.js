(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ef0a52a"],{"519b":function(t,e,s){},6189:function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[e("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":t.itemFullWidth},{row:t.row}],style:[{transform:`translate(${t.scrollVal}px,0px)`}]},[t._t("default")],2)])},l=[],a={name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data(){return{scrollVal:0,ids:[]}},watch:{selectedId(t){t.length&&this.scroll()}},mounted(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated(){this.getCords()},beforeDestroy(){window.removeEventListener("resize",this.scroll)},methods:{scroll(){var t;const e=null===(t=this.ids.find(t=>t.id===this.selectedId))||void 0===t?void 0:t.id,s=document.getElementById(e);if(!Object.keys(this.$slots.default).length||!this.selectedId.length||null===s)return;const i=this.$refs.hContainer,l=s.offsetWidth*this.ids.length;let a=s.offsetLeft;const d=i.offsetWidth/s.offsetWidth;d>1&&l-a<i.offsetWidth&&(a=l-i.offsetWidth),this.scrollVal=1===this.ids.length?0:-a},getCords(){this.$slots.default&&(this.ids=this.$slots.default.map(t=>({id:t.elm.id,key:t.key})))}}},d=a,n=(s("9d8e"),s("2877")),o=Object(n["a"])(d,i,l,!1,null,"c4e6906c",null);e["a"]=o.exports},"9d8e":function(t,e,s){"use strict";s("519b")},ab14:function(t,e,s){"use strict";e["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const t=this.elements.map(t=>t.id),e=t.indexOf(this.selected);if(e<0)return{};const s={};return 0===e?s.next=t[e+1]:(e+1===t.length||(s.next=t[e+1]),s.back=t[e-1]),s}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const s=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...s}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},c2c8:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pasos-b"},[e("div",{staticClass:"row flex-nowrap mx-0 pasos-b__header mb-4"},[e("div",{staticClass:"col-2 col-sm-auto px-0 me-sm-3"},[e("div",{staticClass:"pasos-b__header__btn--left",on:{click:function(e){t.selected=t.leftBtnId}}},[e("i",{staticClass:"fas fa-angle-left"})])]),e("div",{staticClass:"col-8 col-sm px-0"},[e("div",{staticClass:"row mx-0 flex-nowrap pasos-b__header__items"},[t.elements.length?e("ScrollHorizontal",{attrs:{selectedId:"pb-header-"+(t.selected-1)}},t._l(t.elements,(function(s,i){return e("div",{key:"pb-header-key-"+s.id,staticClass:"col-6 col-sm-4 px-0 pasos-b__header__item",class:t.itemClasses(s.id),attrs:{id:"pb-header-"+s.id}},[e("div",{staticClass:"pasos-b__header__item__line-container"},[e("div",{staticClass:"pasos-b__header__item__dot"},[e("span",{staticClass:"text-bold"},[t._v(t._s(i+1))]),e("i",{staticClass:"fas fa-check"})])]),e("div",{staticClass:"pasos-b__header__item__tittle px-2 text-small",domProps:{innerHTML:t._s(s.titulo)}})])})),0):t._e()],1)]),e("div",{staticClass:"col-2 col-sm-auto px-0 ms-sm-3 d-flex justify-content-end"},[e("div",{staticClass:"pasos-b__header__btn--right",on:{click:function(e){t.selected=t.rightBtnId},mouseover:function(e){t.mostrarIndicador=!1}}},[e("i",{staticClass:"fas fa-angle-right"}),t.mostrarIndicador?e("div",{staticClass:"indicador__container indicador--left"},[e("div",{staticClass:"indicador--click"})]):t._e()])])]),e("div",{staticClass:"linea-tiempo-c__content"},[t.elements.length?e("ScrollHorizontal",{attrs:{selectedId:"pb-content-"+t.selected,"item-full-width":""}},t._l(t.elements,(function(t){return e("div",{directives:[{name:"child",rawName:"v-child",value:t.elm,expression:"item.elm"}],key:"pb-content-key-"+t.id,staticClass:"linea-tiempo-c__content__item",attrs:{id:"pb-content-"+t.id}})})),0):t._e(),e("div",{staticClass:"hidden-slot"},[t._t("default")],2)],1)])},l=[],a=s("ab14"),d=s("6189"),n={name:"PasosB",components:{ScrollHorizontal:d["a"]},mixins:[a["a"]],data:()=>({headerSelected:0,mostrarIndicador:!0}),computed:{leftBtnId(){return this.selected-1===this.mainId?this.selected:this.selected-1},rightBtnId(){return this.selected+1===this.elements[this.elements.length-1].id+1?this.selected:this.selected+1}},watch:{elements(t,e){!e.length&&t.length&&(this.headerSelected=t[0].id)}},methods:{itemClasses(t){return[{"pasos-b__header__item--active":t===this.selected},{"pasos-b__header__item--before":t<this.selected},this.elements.length>6?"col-lg-2":"col-lg",this.elements.length>=4?"col-md-3":"col-md"]}}},o=n,r=s("2877"),c=Object(r["a"])(o,i,l,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-4ef0a52a.050a1cab.js.map