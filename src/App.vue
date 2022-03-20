<template>

  <PxHeader title="Electronics Digitals" toLink="/about" to-link_2="/" to-link_3="/showinvoice" f_option="Crear Factura" s_option="Ver Factura"></PxHeader>
  <div id="nav" class="bg-blue-400">
    <router-link to="/">Inicio</router-link> |
    <router-link to="/about" >Que perra</router-link> |
    <router-link to="/showinvoice" >Ver factura</router-link>
  </div>
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

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import PxHeader from "@/components/PxHeader";
export default {
  components: {PxHeader}
}
</script>

