import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    cuit: 0,
    dni: 0,
    isMedico: false,
    isAdmin: false,
    nombre: '',
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    setMedico: (state, estado) => {
      state.isMedico = estado;
    },
  },
});

export default store;
