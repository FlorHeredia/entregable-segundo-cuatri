import {personajes} from "./personajes";

export class luchador extends personajes{
    fuerza:number;
    constructor(nombre:string, nivel:number, puntosDeVida:number, fuerza:number){
    super(nombre, nivel, puntosDeVida);
    this.fuerza=fuerza;
    }

// metodos de luchador

hacerDestreza():void{
    console.log ("¡Lanzando patada voladora!")
}
getFuerza(): number {
    return this.fuerza;
}
setFuerza(fuerza:number): void{
   this.fuerza=fuerza;
}
public atacar(): void{
    console.log("Utilizar llave de derribo")

}
public defender(): void{
    console.log("Utilizar defensa cuerpo de roca")
}
}