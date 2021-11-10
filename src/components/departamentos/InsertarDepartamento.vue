<template>
    <div>
        <h1>Nuevo departamento</h1>
        <router-link to="/departamentos" class="btn btn-info">
            Volver
        </router-link>
        <div style="width:500px; margin:0 auto;">
            <form method="POST" v-on:submit.prevent="insertarDepartamento()">
                <div class="form-group">
                    <label> Número</label>
                    <input type="number" class="form-control" v-model="departamento.numero"/>
                </div>
                <div class="form-group">
                    <label> Nombre</label>
                    <input type="text" class="form-control" v-model="departamento.nombre"/>
                </div>
                <div class="form-group">
                    <label> Localidad</label>
                    <input type="text" class="form-control" v-model="departamento.localidad"/>
                </div>
                <button class="btn btn-success">
                    Insertar departamento
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import ServiceDepartamentos from './../../services/ServiceDepartamentos';
const service = new ServiceDepartamentos();
export default {
    name:"InsertarDepartamento",
    methods:{
        insertarDepartamento(){
            console.log(this.departamento);
            //CONVERTIR LOS DATOS STRING A INT PARA EL SERVICIO
            this.departamento.numero = parseInt(this.departamento.numero);
            service.insertarDepartamento(this.departamento).then(result=>{
                console.log(result);
                this.$router.push("/departamentos");
            });
        },
    },data(){
        return{
            mensaje:"",
            departamento:{
                numero: 0,
                nombre: "",
                localidad: ""
            }
        }
    }
}
</script>