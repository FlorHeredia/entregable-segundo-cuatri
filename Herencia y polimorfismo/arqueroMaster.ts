import { arquero } from "./arquero";


export class arqueroMaster extends arquero {
    precision: string;
    constructor(nombre: string, nivel: number, puntosDeVida: number, punteria: number, precision: string){
    super(nombre,nivel,puntosDeVida,punteria);
    this.precision=precision;
    }

//metodo de arqueroMaster:
 lanzarFlechaDistancia(): void{
    console.log("El arquero lanza su flecha con precision a kilometros de distancia")
 }
 getPrecision ():string{
    return this.precision
 }
 setPrecision (precision: string): void{
    this.precision = precision

 }
}