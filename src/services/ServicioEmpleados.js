import Global from './../components/Global';
import axios from 'axios';

export default class ServicioEmpleados{

    getOficios(){
        return new Promise(function(resolve){
            var request = "/api/empleados/oficios";
            var url = Global.urlapiempleados + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        });
    }
    getEmpleadosOficios(oficio){
        return new Promise(function(resolve){
            var request = "/api/empleados/empleadosoficio/" + oficio;
            var url = Global.urlapiempleados + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        });
    }
}