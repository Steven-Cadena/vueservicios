import Vue from 'vue'
import App from './App.vue'
import Coches from './components/Coches.vue';
import VueRouter from 'vue-router';
import EmpleadosDetalles from './components/EmpleadosDetalle.vue';
import EmpleadosOficios from './components/EmpleadosOficios.vue';
import EjemploServicios from './components/EjemploServicios.vue';


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/coches", component: Coches},
  {path: "/empleadosdetalle", component: EmpleadosDetalles},
  {path: "/empleadosoficios", component: EmpleadosOficios},
  {path: "/ejemploservicios", component: EjemploServicios},
]

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
