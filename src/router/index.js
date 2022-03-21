import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createinvoice',
    name: 'CreateInvoices',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateInvoices.vue')
  },
  {
    path: '/showinvoice',
    name: 'ShowInvoice',
    component: () => import('../views/ShowInvoice')
  },{
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
