<template>
    <div>
        <h1>Coches</h1>
        <div>
           <div class="card" style="width:18rem; float:left ; height: 20em" 
           v-for="(coche,index) in coches" :key="index">
               <img :src="coche.imagen" class="car-img-top" :title="coche.marca"/>
               <div class="card-body">
                   <h5 class="card-title"> {{coche.marca + " " + coche.modelo}}</h5>
                   <p class="card-text">{{coche.conductor}}</p>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
//AQUI PODEMOS DECLARAR VARIABLES GLOBALES PARA TODO EL COMPONENTE 
var urlapicoches ="https://apicochespaco.azurewebsites.net/";
export default {
    name:"Coches",
    mounted(){
        this.cargarCoches();
    },
    methods: {
        cargarCoches(){
            var request = "/webresources/coches";
            var url = urlapicoches + request;
            axios.get(url).then(res=>{
                this.coches = res.data;
                //console.log(this.coches);
            })
        }
    },data(){
        return{
            coches:[],
        }
    }
}
</script>