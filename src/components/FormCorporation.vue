<template>
  <section class="card">
      <section class="d-flex">
          <label for="i-nameC">Nombre Empresa</label>
          <InputC typeInput="text" idInput="i-nameC"/>
      </section>
      <section></section>
  </section>
</template>

<script>
import InputC from '@/components/InputC.vue';

export default {
    components : {
        InputC,
    }
}
</script>

<style>

</style>