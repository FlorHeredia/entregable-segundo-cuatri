import {personajes} from "./personajes"
export class listaDePersonajes {
    protected listaDePersonajes: personajes[];

    constructor(){
        this.listaDePersonajes=[];
    }

    public agregarPersonaje(personaje: personajes): void {
        this.listaDePersonajes.push(personaje);
      }
    
    public getListaDePersonajes(): personajes[] {
        return this.listaDePersonajes;
    }
}
