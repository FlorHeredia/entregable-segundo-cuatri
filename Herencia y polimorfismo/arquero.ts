import {personajes} from "./personajes";

export class arquero extends personajes{
    punteria:number;
    constructor(nombre:string, nivel:number, puntosDeVida:number, punteria:number){
    super(nombre, nivel, puntosDeVida);
    this.punteria=punteria;
    }

// metodos de luchador

 lanzarFlecha():void{
    console.log ("Lanzando flecha");
 }
 getPunteria():number{
    return this.punteria;
 }
 setPunteria(punteria:number):void{
    this.punteria=punteria;
 }
}