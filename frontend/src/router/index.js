import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
        path: '/productdetails',
        name: 'ProductDetails',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetails.vue')

    }
    ,
    {
        path: '/productlist',
        name: 'ProductList',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProductList.vue')

    }
]

const router = new VueRouter({
  routes
})

export default router
