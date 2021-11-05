<template>
    <div>
        <h1>Empleados oficios</h1>
        <label> Seleccione un oficio</label>
        <select v-model="selectOficio" v-on:change="cargarEmpleados">
            <option v-for="(oficio,index) in oficios" 
            :value="oficio"
            :key="index">
                {{oficio}}
            </option>
        </select>
        <br/>
        <table v-if="empleados.length > 0" class="table table-striped text-center">
            <thead class="thead-dark">
                <th>Id Empleado</th>
                <th>Apellido</th>
                <th>Oficio</th>
                <th>Departamento</th>
            </thead>
            <tbody>
                <tr v-for="(empleado,index) in empleados" :key="index">
                    <td> {{empleado.idEmpleado}}</td>
                    <td> {{empleado.apellido}}</td>
                    <td> {{empleado.oficio}}</td>
                    <td> {{empleado.departamento}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Global from './Global';
import axios from 'axios';

export default {
    name:"EmpleadosOficios",
    mounted(){
        this.cargarOficios();
    },methods: {
        cargarOficios(){
            var request = "/api/empleados/oficios";
            var url = Global.urlapiempleados + request;
            axios.get(url).then(res => {
                this.oficios = res.data;
                //console.log(this.oficios);
            });
        }, cargarEmpleados(){
            var request = "api/Empleados/EmpleadosOficio/" + this.selectOficio;
            var url = Global.urlapiempleados + request;
            axios.get(url).then(res => {
                this.empleados = res.data;
            });
        }
    },data(){
        return{
            oficios:[],
            empleados:[],
            selectOficio:null,
        }
    }
}
</script>