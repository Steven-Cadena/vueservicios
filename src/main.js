import Vue from 'vue'
import App from './App.vue'
import Coches from './components/Coches.vue';
import VueRouter from 'vue-router';
import EmpleadosDetalles from './components/EmpleadosDetalle.vue'


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/coches", component: Coches},
  {path: "/empleadosdetalle", component: EmpleadosDetalles},
]

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
