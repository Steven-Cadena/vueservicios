<template>
    <div>
        <h1>Empleados detalles Api</h1>
        <form method="post" v-on:submit.prevent="mostrarDetalleEmpleado">
            <label> Seleccione un empleado</label>
            <select class="form-control" v-model="idempleado">
                <option v-for="(empleado,index) in empleados" 
                :value="empleado.idEmpleado"
                :key="index">
                    {{empleado.apellido}}
                </option>
            </select><br/>
            <button class="btn btn-success">
                Mostrar detalles
            </button>
        </form>
        <hr/>
        <div v-if="empleado">
            <h1>Apellido: {{empleado.apellido}}</h1>
            <h1>Oficio: {{empleado.oficio}}</h1>
            <h1>Departamento: {{empleado.departamento}}</h1>
        </div>
    </div>
</template>

<script>
import Global from './Global';
import axios from 'axios';

export default {
    name:"EmpleadosDetalle",
    mounted(){
        this.cargarEmpleados();
    },
    methods:{
        cargarEmpleados(){
            var request = "/api/Empleados";
            var url = Global.urlapiempleados + request;
            axios.get(url).then(res=>{
                this.empleados = res.data
                //console.log(this.empleados);
            });
        }, mostrarDetalleEmpleado(){
            //NECESITO EL ID DE EMPLEADO
            var request = "/api/empleados/" + this.idempleado;
            var url = Global.urlapiempleados + request;
            axios.get(url).then(res =>{
                this.empleado = res.data;
                //console.log(this.empleado);
            });
        }
    },
    data(){
        return{
            empleados:[],
            idempleado:0,
            empleado:null,
        }
    }
}
</script>