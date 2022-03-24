<template>
  <div class="card border-white ">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="img" class="img-fluid rounded-start" :alt="alt">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="text-center display-5">Electronics Digitals es un <strong>Sistema Contable</strong> y de <strong>Facturación Digital en la Nube</strong>, diseñado para gerentes y <strong>hecho para Colombia</strong></h2>
          <p class="card-text fs-3 lead"><small class="text-muted">Muy fácil de usar <em>Regístrate gratis</em>.
            Prueba todas las funciones durante <em>15 días sin limitaciones.</em></small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hypercard",
  props:{
    img :String,
    alt:String,
  }
}
</script>

<style scoped>
strong{
  color: #01ff07;
}
</style>