import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    error: './assets/gomennne.jpg',
    attempt: 1
});
Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
