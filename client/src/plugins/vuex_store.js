import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    cuit: 212121,
    dni: 4100325,
    user: false,
    isMedico: true,
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
});

export default store;
