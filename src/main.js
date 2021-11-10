import Vue from 'vue'
import App from './App.vue'
import Coches from './components/Coches.vue';
import VueRouter from 'vue-router';
import EmpleadosDetalles from './components/EmpleadosDetalle.vue';
import EmpleadosOficios from './components/EmpleadosOficios.vue';
import EjemploServicios from './components/EjemploServicios.vue';
import EmpleadosServiciosOficios from './components/EmpleadosServiciosOficios.vue';
import DepartamentosIndex from './components/departamentos/DepartamentosIndex.vue';
import InsertarDepartamento from './components/departamentos/InsertarDepartamento.vue';
import DetallesDepartamento from './components/departamentos/DetallesDepartamento.vue';
import ModificarDepartamento from './components/departamentos/ModificarDepartamento.vue';
import EliminarDepartamento from './components/departamentos/EliminarDepartamento.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/departamentos", component: DepartamentosIndex},
  {path: "/insertardepartamento", component: InsertarDepartamento},
  // PARA PASAR PARAMETROS
  {path: "/detallesdepartamento/:iddepartamento/:nombre/:localidad", component: DetallesDepartamento},
  {path: "/modificardepartamento/:iddepartamento", component: ModificarDepartamento},
  {path: "/eliminardepartamento/:iddepartamento", component: EliminarDepartamento},
  {path: "/coches", component: Coches},
  {path: "/empleadosdetalle", component: EmpleadosDetalles},
  {path: "/empleadosoficios", component: EmpleadosOficios},
  {path: "/ejemploservicios", component: EjemploServicios},
  {path: "/empleadosserviciosoficios", component: EmpleadosServiciosOficios},
  
]

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
