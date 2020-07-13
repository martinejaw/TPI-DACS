import Vue from 'vue';
import vuerecaptcha from 'vue-recaptcha';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import vuetify from './plugins/vuetify';
import store from './plugins/vuex_store';

Vue.use(vuerecaptcha);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render(h) { return h(App); },
}).$mount('#app');
