import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VeeValidate from 'vee-validate';

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VeeValidate);

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

    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () => import(/* webpackChunkName: "about" */ '../views/Checkout.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
    },

]

const router = new VueRouter({
    routes
})

export default router


