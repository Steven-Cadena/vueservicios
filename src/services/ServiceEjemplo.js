import Global from './../components/Global';
import axios from 'axios';

export default class ServiceEjemplo{
    getSaludo(nombre){
        return "Welcome to my service, " + nombre;
    }

    getPromesa = new Promise(function(resolve,reject){
        var num = 0;
        if (num == 0 ){
            //DEBEMOS DEVOLVER ALGO EN RESOLVE O EN REJECT
            resolve("Alfajor xD");
        }else{
            reject("Respuesta Error");
        }
    });

    getPromesaSimple = new Promise(function(resolve){
            resolve("Ok");
    });

    getEmpleado(idempleado){
        return new Promise(function(resolve){
            var request = "/api/empleados/" + idempleado;
            var url = Global.urlapiempleados + request;
            var empleado = {
                apellido:"no soy nadie"
            };
            axios.get(url).then(res =>{
                empleado = res.data;
                resolve(empleado);
            });
        });
    }
    
}