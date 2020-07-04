import Vue from 'vue';
import jwt from 'jwt-simple';
import VueRouter from 'vue-router';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Medico from '../views/HomeMedico.vue';
import Home from '../views/Home.vue';
import Casos from '../views/Casos.vue';
import Consultas from '../views/Consultas.vue';
import Recursos from '../views/Recursos.vue';
import Medicos from '../views/VerMedicos.vue';
import ConsultaDiagnostico from '../views/ConsultaDiagnostico.vue';
import Caso from '../views/VerCaso.vue';
import ParteMedico from '../views/AddParteMedico.vue';
import Administrador from '../views/HomeAdmin.vue';

import store from '../plugins/vuex_store';

Vue.use(VueRouter);

const ifMedico = (to, from, next) => {
  if (store.state.isMedico) {
    next();
  } else {
    next('/login');
  }
};

const ifAdmin = (to, from, next) => {
  if (store.state.isAdmin) {
    next();
  } else {
    next('/login');
  }
};

const ifAuth = (to, from, next) => {
  if (store.state.isMedico) {
    next('/medico');
  } else if (store.state.isAdmin) {
    next('/admin');
  } else {
    next('/login');
  }
};

const ifAuthLogin = (to, from, next) => {
  if (store.state.isMedico) {
    next('/medico');
  } else if (store.state.isAdmin) {
    next('/admin');
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: ifAuth,
  },
  {
    path: '/recursos',
    name: 'Recursos',
    component: Recursos,
    beforeEnter: ifAdmin,
  },
  {
    path: '/vermedicos',
    name: 'Medicos',
    component: Medicos,
    beforeEnter: ifAdmin,
  },
  {
    path: '/consultas',
    name: 'Consultas',
    component: Consultas,
    beforeEnter: ifMedico,
  },
  {
    path: '/consultadiagnostico',
    name: 'ConsultaDiagnostico',
    component: ConsultaDiagnostico,
    props: true,
    beforeEnter: ifMedico,
  },
  {
    path: '/casos',
    name: 'Casos',
    component: Casos,
    beforeEnter: ifMedico,
  },
  {
    path: '/caso',
    name: 'Caso',
    component: Caso,
    props: true,
    beforeEnter: ifMedico,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: ifAuthLogin,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/medico',
    name: 'Medico',
    component: Medico,
    beforeEnter: ifMedico,
  },
  {
    path: '/admin',
    name: 'Administrador',
    component: Administrador,
    beforeEnter: ifAdmin,
  },
  {
    path: '/partemedico',
    name: 'ParteMedico',
    component: ParteMedico,
    props: true,
    beforeEnter: ifMedico,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component() {
      return import(/* webpackChunkName: "about" */ '../views/About.vue');
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('user-token');
  console.log(store.state.cuit);
  console.log(store.state.dni);
  if (token != null) {
    const user = jwt.decode(token, 'pass');
    console.log(user);
    if (user.rol === 'medico') {
      store.commit('setMedico', true);
      store.state.isAdmin = false;
      store.state.dni = user.dni;
      store.state.cuit = user.cuit;
    } else if (user.rol === 'admin') {
      store.state.isAdmin = true;
      store.state.isMedico = false;
      store.state.cuit = user.cuit;
      store.state.dni = user.dni;
    } else {
      store.state.isAdmin = false;
      store.state.isMedico = false;
    }
  }
  next();
});

export default router;
