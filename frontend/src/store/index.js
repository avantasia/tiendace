import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '../modules/authmodule'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth
    }
})
