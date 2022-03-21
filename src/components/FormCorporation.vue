<template>
  <section class="card">
    <section class="d-flex">
      <label for="i-nameC">Nombre Empresa:</label>
      <input type="text" id="i-nameC" class="form-control" v-model="corporationForm.nameCorpo">
      <label for="i-nit">Nit:</label>
      <input type="text" id="i-nit" class="form-control" v-model="corporationForm.nit">
      <label for="i-city">Dirección:</label>
      <input type="text" class="form-control" v-model="corporationForm.addressCorpo">
    </section>
    <section></section>
  </section>
</template>

<script>

export default {
  name : 'FormCorporation',
  components: {
  },
  data(){
      return {
          corporationForm : {
              nameCorpo : '',
              nit : 0,
              addressCorpo : ''
          }
      }
  }
};
</script>

<style></style>
