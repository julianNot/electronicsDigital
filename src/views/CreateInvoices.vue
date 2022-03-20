<template>
  <div class="container mt-5">
    <form action="">
      <h2>Datos Cliente</h2>
      <formClient/>
      <h2 class="mt-4">Datos Corporativos</h2>
      <formCorporation />
    </form>
  </div>
</template>

<script>
import formClient from '@/components/FormClient.vue'
import formCorporation from '../components/FormCorporation.vue'

export default {
  components : {
    formClient,
    formCorporation,
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
  font-size: 2rem;
  font-weight: 700;
}

label {
  display: inline-block;
  width: 90px;
  margin: 8px;
  font-size: 1rem;
  font-weight: 500;
}
</style>