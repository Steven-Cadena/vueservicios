<template>
    <div>
        <h1>Modificar departamento</h1>
        <router-link class="btn btn-info" to="/departamentos">
            Volver al listado
        </router-link>
        <div style="width:500px; margin:0 auto;" v-if="departamento">
            <form method="post" v-on:submit.prevent="updateDepartamento()">
                <div class="form-group">
                    <label> Número</label>
                    <input type="text" class="form-control" v-model="departamento.numero"/>
                </div>
                <div class="form-group">
                    <label> Nombre</label>
                    <input type="text" class="form-control" v-model="departamento.nombre"/>
                </div>
                <div class="form-group">
                    <label> Localidad</label>
                    <input type="text" class="form-control" v-model="departamento.localidad"/>
                </div>
                <button class="btn btn-danger"> 
                    Modificar datos
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import ServiceDepartamentos from './../../services/ServiceDepartamentos';
const service = new ServiceDepartamentos;
export default {
    name:"ModificarDepartamento",
    data(){
        return{
            departamento:null,
        }
    },methods: {
        buscarDepartamento(){
            service.buscarDepartamento(this.id).then(result=>{
                this.departamento = result;
            });
        },updateDepartamento(){
            this.departamento.numero = parseInt(this.departamento.numero);
            service.updateDepartamento(this.departamento).then(result=>{
                console.log(result);
                this.$router.push("/departamentos");
            });
        }
    },mounted(){
        this.id = this.$route.params.iddepartamento;
        this.buscarDepartamento();
    }

}
</script>