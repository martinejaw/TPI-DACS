import Vue from 'vue';
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

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/recursos',
    name: 'Recursos',
    component: Recursos,
  },
  {
    path: '/vermedicos',
    name: 'Medicos',
    component: Medicos,
  },
  {
    path: '/consultas',
    name: 'Consultas',
    component: Consultas,
  },
  {
    path: '/consultadiagnostico',
    name: 'ConsultaDiagnostico',
    component: ConsultaDiagnostico,
    props: true,
  },
  {
    path: '/casos',
    name: 'Casos',
    component: Casos,
  },
  {
    path: '/caso',
    name: 'Caso',
    component: Caso,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
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
  },
  {
    path: '/partemedico',
    name: 'ParteMedico',
    component: ParteMedico,
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

export default router;
