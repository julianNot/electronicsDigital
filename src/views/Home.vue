<template>
  <div class="card home">
    <img :src="img" class="img-fluid" :alt="name">
    <div class="card-img-overlay row align-items-center">
      <div class="col-md-8 col-lg-7 my-5">
        <h1 class="display-2 fw_regular mb16 mt0">La <b>Facturación</b> <br>en línea más fácil</h1>
        <h4 class="mb0 fw_regular">Gestiona contratos, crea facturas recurrentes, <br>factura hojas de horas, cobra más rápido.</h4>
        <router-link class="mt32 mb8 btn btn-primary o_btn_cta" to="/about">Empieza ahora. ¡Es gratis!</router-link>
        <br>

        <div class="o_schedule_demo ">

          <button class="btn btn-link">Conoce un experto</button>


        </div>
        <br>
        <p class="small mt-4">Free, forever, with unlimited users. <a href="#" class="o_internal_tooltip_link" data-placement="right" data-delay="0" title="" data-original-title="Your first app is always free with Odoo, including free hosting &amp; support. You'll only have to pay if you install more applications.">(Why?)</a></p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'Home',
  components: {

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
