<template>
  <article class="card">
    <section class="d-flex">
      <label for="i-name" class="">Nombre:</label>
      <input
        type="text"
        id="i-name"
        class="form-control"
        v-model="name"

      />

      <label for="i-lastName">Apellido:</label>
      <input
        type="text"
        id="i-lastName"
        class="form-control"
        v-model="lastName"
      />

      <label for="i-id">Documento:</label>
      <input
        type="number"
        id="i-id"
        class="form-control"
        v-model="document"
      />
    </section>
    <section class="d-flex">
      <label for="i-phone">Numero de Telefono:</label>
      <input
        type="tel"
        id="i-phone"
        class="form-control"
        v-model="numberTel"
      />

      <label for="i-city">Dirección:</label>
      <input
        type="text"
        id="i-city"
        class="form-control"
        v-model="address"
      />
    </section>
  </article>
</template>

<script>
export default {
  name: "FormClient",
  data() {
    return {
      name: "",
      lastName: "",
      document: 0,
      numberTel: 0,
      address: "",
    }
  },
  methods : {
    getDataClient(){
      let dataClient = {
        name : this.name,
        lastName : this.lastName,
        document : this.document,
        numberTel : this.numberTel,
        address : this.address
      }
      return dataClient
    }
  }
};
</script>

<style>
.card {
  padding: 10px;
}
</style>
