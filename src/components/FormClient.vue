<template>
  <article class="card">
      <section class="d-flex">
        <label for="i-name" class="">Nombre:</label>
        <inputC typeInput="text" idInput="i-name" />
        <label for="i-lastName">Apellido:</label>
        <inputC typeInput="text" idInput="i-lastName"/>
        <label for="i-id">Documento:</label>
        <inputC typeInput="number" idInput="i-id" />
      </section>
      <section class="d-flex">
        <label for="i-phone">Numero de Telefono:</label>
        <inputC typeInput="tel" idInput="i-phone" />
        <label for="i-city">Dirección:</label>
        <inputC typeInput="text" idInput="i-city" />
        <inputC typeInput="password" idInput="pass" />
      </section>
  </article>
</template>

<script>
import inputC from '@/components/InputC.vue'

export default {
    components : {
        inputC
    }
};
</script>

<style>

label {
  display: inline-block;
  width: 90px;
  margin: 8px;
  font-size: 1rem;
  font-weight: 500;
}

.card{
    padding: 10px;
}

</style>
