import { hechicero } from "./hechicero";
import {luchador} from "./luchador";
import {arquero} from "./arquero";
import {listaDePersonajes} from "./listaDePersonajes";
import { arqueroMaster } from "./arqueroMaster";


//crear personajes

const hechicero1 = new hechicero ("Albus Dumbledore", 7, 20, 100)
const hechicero2 = new hechicero ("Hermione Granger", 9, 25, 80)
const luchador1 = new luchador ("Zoom cero", 9, 25, 150)
const luchador2 = new luchador ("Scorpion", 6, 27, 120)
const arquero1 = new arquero ("Robin Hood", 8, 20, 130)
const arquero2 = new arquero ("Legolas", 7, 25, 140)

const hechiceros = [hechicero1,hechicero2]
const luchadores = [luchador1, luchador2]
const arqueros = [arquero1, arquero2]

const listaPersonajes= new listaDePersonajes (hechiceros,luchadores,arqueros)

console.log (listaPersonajes)
console.log ("------------------------------")

//Crear nuevo hechicero
const hechicero3 = new hechicero( "Magui", 10, 30, 200)
//Agregar al arreglo
listaPersonajes.agregarHechicero(hechicero3);
console.log ("------------------------------")
//Mostrar de nuevo el arreglo
console.log (hechiceros);
console.log (`El arquero ${arquero1.getNombre()} ataca al hechicero ${hechicero1.getNombre()} utilizando su método:`);
console.log (arquero1.atacar());
console.log (`Como su puntería es nivel ${arquero1.getPunteria()} y la sabiduria del hechicero es ${hechicero1.getSabiduria()}, el arquero venció al hechicero. Esto proporcionó que el arquero eleve su nivel a ArqueroMaster`)

const arquero1 = new arqueroMaster ("Robin Hood",10, 30, 130, "Exacta" )

