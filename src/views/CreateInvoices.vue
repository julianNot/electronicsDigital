<template>
  <div class="container mt-5">
    <form action="">
      <h2>Datos Cliente</h2>
      <formClient/>
      <h2 class="mt-4">Datos Corporativos</h2>
      <formCorporation />
      <h2 class="mt-4">Productos</h2>
      <formProducts />
    </form>
  </div>
</template>

<script>
import formClient from '@/components/FormClient.vue'
import formCorporation from '@/components/FormCorporation.vue'
import formProducts from '@/components/FormProducts.vue'

export default {
  components : {
    formClient,
    formCorporation,
    formProducts
  },
  data(){
    return {

    }
  }

}
</script>

<style>
form {
  padding: 10px;
  margin: 0 auto;
  max-width: 90%;
}

h2 {
  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;
}

label {
  display: inline-block;
  width: 90px;
  margin: 8px;
  font-size: 1rem;
  font-weight: 500;
}


input {
  max-width: 190px;
  max-height: 35px;
  margin: 8px;
}
</style>