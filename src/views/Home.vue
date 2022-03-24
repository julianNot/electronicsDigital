<template>
  <div class="card border-white home">
    <img  :src="img" class="img-fluid" :alt="name">
    <div class="card-img-overlay img-fluid row align-items-center">
      <div class="col-md-8 col-lg-7 my-5">

        <h1 class="display-2 fw_regular mb16 mt0">La <b>Facturación</b> <br>en línea más fácil</h1>
        <h4 class="mb0 fw_regular">Gestiona contratos, crea facturas recurrentes, <br>factura hojas de horas, cobra más rápido.</h4>
        <router-link to="/createinvoice"><btn-arrow name="Prueba gratis!"></btn-arrow></router-link>
        <br>
        <a href="https://memegenerator.net/img/instances/73899383.jpg" target="_blank" class="btn btn-link">Conoce un
          experto</a>
        <br>
       </div>
    </div>
  </div>
  <hypercard img="https://www.alegra.com/static/a08eb81ee640b89c02fe508b31b86f18/36b0b/img_banner_col.webp" alt="PORTADA 2"></hypercard>

</template>

<script>
import BtnArrow from "@/components/BtnArrow";
import Hypercard from "@/components/hypercard";
export default {
  name: 'Home',
  components: {
    Hypercard,
    BtnArrow

  },
  data(){
    return {
      img: "https://odoocdn.com/openerp_website/static/src/img/2016/invoicing/invoicing_top_banner.jpg",
      name: "Portada",
      darkmode:false,
    }
  },

  methods: {

  }

}
</script>

<style>

</style>
