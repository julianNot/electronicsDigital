<template>

  <PxHeader title="Electronics Digitals" toLink="/createinvoice" to-link_2="/" to-link_3="/showinvoice" to-link_4="/about" f_option="Crear Factura" s_option="Ver Factura" t_option="Sobre"></PxHeader>
 <router-view/>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

PxHeader a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import PxHeader from "@/components/PxHeader";
export default {
  components: {PxHeader}
}
</script>

