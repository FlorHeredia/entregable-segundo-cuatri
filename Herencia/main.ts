import { RegistroAutomotor,  } from "./registroAutomotor";
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";
import { vehiculo } from "./vehiculo";


//crear autos
const auto1= new Auto ("rojo", 1999, "FIN555", "Ford",5);
const auto2= new Auto ("azul", 2019, "DFC541", "Chevrolet", 4);
const auto3= new Auto ("violeta", 2019, "lfj456", "Chevrolet", 4);

const autos = [auto1, auto2];

//crear camiones
const camion1= new Camion ("gris", 2010, "LIS541", "Scania", 2)
const camion2= new Camion("rojo", 2017, "ERL685", "Ford", 2)
const camion3= new Camion("verde", 2020, "ERD543", "Ford", 2)

const camiones= [camion1, camion2];
//crear motos
const moto1= new Moto ("rojo", 2011, "EDF623", "Honda", 0)
const moto2= new Moto ("azul", 2020, "TRE477", "Yamaha", 0)
const moto3= new Moto ("verde", 2022, "WRF433", "Kawasaki", 0)

const motos= [moto1,moto2];
//crear registro automotor
const registro = new RegistroAutomotor(autos , camiones, motos);

// Muestro los autos que hay en el registro
console.log (registro.getAutos());
console.log ("-------------------------");
// Agrego un nuevo auto al arreglo
registro.agregarAuto(auto3);
console.log (registro.getAutos());
console.log ("-------------------------");
// Elimino un auto del arreglo
autos.splice(1,1);
console.log (registro.getAutos());
//Uso el metodo de autos para cambiar la propiedad puertas
auto1.setPuertas(3);
auto1.setModelo(2023);
console.log (registro.getAutos());


//Muestro las motos que hay en el arreglo
console.log (registro.getMotos());
console.log ("-------------------------");
// Agrego una moto y vuelvo a mostrar el registro
registro.agregarMoto(moto3);
console.log (registro.getMotos());
console.log ("-------------------------");
// Elimino una moto del arreglo
motos.splice(1,1);
console.log (registro.getMotos());


//Muestro los camiones que hay en el arreglo
console.log (registro.getCamiones());
console.log ("-------------------------");
// Agrego un camion y vuelvo a mostrar el registro
registro.agregarCamion(camion3);
console.log (registro.getCamiones());
 console.log ("-------------------------");
// Elimino un camion del arreglo
camiones.splice(0,2);
console.log (registro.getCamiones());
// Cambio una propiedad del camion
camion3.setPuertas(3);
//Muestro de nuevo el arreglo de camiones
console.log (registro.getCamiones());