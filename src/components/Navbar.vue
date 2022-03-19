<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid container">
      <router-link class="navbar-brand" to="/" @click="cleanActivates">Inicio</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :class="activeCreate" @click="changeStateLink(1)" to="/create">Crear Factura</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="activeBuy" @click="changeStateLink(2)" to="/">Compras</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="activeSell" @click="changeStateLink(3)" to="/">Facturas</router-link>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  </header>
</template>

<script>
export default {
  data(){
    return{
      activeCreate : '',
      activeBuy : '',
      activeSell : '',
    }
  },
  methods : {
    changeStateLink(numbActive){
      this.cleanActivates()
      if (numbActive == 1){
        this.activeCreate = 'active'
      }else if(numbActive == 2){
        this.activeBuy = 'active'
      }else{
        this.activeSell = 'active'
      }
    },
    cleanActivates(){
      this.activeCreate = ''
      this.activeBuy = ''
      this.activeSell = ''
    }
  }
};
</script>

<style>
header{
  position: sticky;
  z-index: 1000;
  top: 0;
  min-width: 100%;
  box-shadow:0px 4px 3px rgba(0,0,0,.5);
}
</style>
