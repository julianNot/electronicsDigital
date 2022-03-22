<template>
  <section class="card">
    <section class="d-flex">
      <label for="i-nameC">Nombre Empresa:</label>
      <input
        type="text"
        id="i-nameC"
        class="form-control"
        v-model="nameCorpo"
      />
      <label for="i-nit">Nit:</label>
      <input
        type="text"
        id="i-nit"
        class="form-control"
        v-model="nit"
      />
      <label for="i-city">Dirección:</label>
      <input
        type="text"
        class="form-control"
        v-model="addressCorpo"
      />
    </section>
    <section></section>
  </section>
</template>

<script>
export default {
  name: "FormCorporation",
  components: {},
  data() {
    return {
      nameCorpo: "",
      nit: 0,
      addressCorpo: "",
    }
  },
  methods : {
    getDataCoorp(){
      let dataCoorp = {
        name : this.nameCorpo,
        nit : this.nit,
        address : this.addressCorpo
      }
      return dataCoorp
    }
  }
};
</script>

<style></style>
