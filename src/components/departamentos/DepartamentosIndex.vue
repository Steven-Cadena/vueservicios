<template>
    <div>
        <h1>Departamentos</h1>
        <router-link to="/insertardepartamento" class="btn btn-info">
            Nuevo Departamento
        </router-link>
        <br/>
        <table v-if="departamentos.length > 0" class="table table-striped text-center">
            <thead class="thead-dark">
                <th>Número</th>
                <th>Nombre</th>
                <th>Localidad</th>
                <th>Detalles</th>
            </thead>
            <tbody>
                <tr v-for="(dept,index) in departamentos" :key="index">
                    <td> {{dept.numero}}</td>
                    <td> {{dept.nombre}}</td>
                    <td> {{dept.localidad}}</td>
                    <td>
                        <router-link class="btn btn-info"
                        :to="'/detallesdepartamento/' + dept.numero + '/' +
                        dept.nombre + '/' + dept.localidad">
                            Detalles
                        </router-link>
                        <router-link class="btn btn-success"
                        :to="'/modificardepartamento/' + dept.numero ">
                            Editar
                        </router-link>
                        <router-link class="btn btn-danger"
                        :to="'/eliminardepartamento/' + dept.numero ">
                            Eliminar
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceDepartamentos from './../../services/ServiceDepartamentos';

const service = new ServiceDepartamentos;

export default {
    name:"DepartamentosIndex",
    mounted(){
        this.cargarDepartamento();
    },methods:{
        cargarDepartamento(){
            service.getDepartamentos().then(result=>{
                this.departamentos = result;
            });
        }
    },data() {
        return{
            departamentos:[],
        }
    }
}
</script>