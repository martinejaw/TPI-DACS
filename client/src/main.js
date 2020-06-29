import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import vuetify from './plugins/vuetify';
import store from './plugins/vuex_store';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render(h) { return h(App); },
}).$mount('#app');
