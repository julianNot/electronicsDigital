<template>
  <div class="container mt-5">
      <h2>Datos Cliente</h2>
    <form action="" class="card">
      <section class="d-flex">
        <label for="i-name" class="">Nombre:</label>
        <input type="text" class="form-control" id="i-name">
        <label for="i-lastName">Apellido:</label>
        <input type="text" class="form-control" id="i-lastName">
        <label for="i-id">Documento:</label>
        <input type="tel" class="form-control" id="i-id">
      </section>
      <section class="d-flex">
        <label for="i-phone">Numero de Telefono:</label>
        <input type="tel" class="form-control" id="i-phone">
        <label for="i-city">Dirección:</label>
        <input type="text" class="form-control" id="i-city">
      </section>
    </form>
  </div>
</template>

<script>

export default {
  components : {
  }

}
</script>

<style>
form {
  padding: 10px;
  margin: 0 auto;
  max-width: 90%;
}

form label{
  display: inline-block;
  width: 90px;
  margin: 8px;
  font-size: 1.0rem;
  font-weight: 500;
}

form input{
  max-width: 190px;
  max-height: 35px;
  margin: 8px;
}

h2{
  text-align: left;
  font-size: 2.0rem;
  font-weight: 700;
}

</style>