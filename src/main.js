import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* Importar Boostrap */
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
/* Importar hoja de estilos */
import './css/style.css'

createApp(App).use(store).use(router).mount('#app')
