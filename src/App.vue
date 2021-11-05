<template>
  <div id="app">
    <Menu/>
    <!-- IMPORTANTE PARA PODER VISUALIZAR EL CONTENIDO DE LAS DEMAS PAGINAS -->
    <router-view></router-view> 
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>

</style>
