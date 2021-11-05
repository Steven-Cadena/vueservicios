<template>
    <div>
        <h1>Empleados Servicios Oficios</h1>
        <label> Seleccione un oficio</label>
        <select v-model="selectOficio" v-on:change="cargarEmpleados">
            <option v-for="(oficio,index) in oficios" 
            :value="oficio"
            :key="index">
                {{oficio}}
            </option>
        </select>

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

import ServiceEmpleados from './../services/ServicioEmpleados';
const service = new ServiceEmpleados;
export default {
    name:"EmpleadosServiciosOficios",
    data(){
        return{
            oficios:[],
            selectOficio:null,
            empleados:[],
        }
    }, mounted(){
        console.log(this.selectOficio);
        service.getOficios().then(result=>{
            this.oficios = result;
        });

    },methods:{
        cargarEmpleados(){
            service.getEmpleadosOficios(this.selectOficio).then(result=>{
            this.empleados = result;
        });
        }
    }

}
</script>