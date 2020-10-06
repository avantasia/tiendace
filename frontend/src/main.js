import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import VueFuse from 'vue-fuse'

Vue.use(VueFuse)
Vue.use(VueLodash, { lodash: lodash })

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
