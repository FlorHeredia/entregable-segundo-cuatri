import { arquero } from "./arquero";
import { hechicero } from "./hechicero";
import { luchador } from "./luchador";
import {personajes} from "./personajes"

export class listaDePersonajes {
    public arrHechicero: hechicero[];
    public arrLuchador: luchador[];
    public arrArquero: arquero [];

    constructor(hechiceros: hechicero[], luchadores: luchador[], arqueros: arquero []){

        this.arrHechicero= hechiceros;
        this.arrLuchador= luchadores;
        this. arrArquero= arqueros;
    }

    public agregarHechicero(hechicero: hechicero): void {
        this.arrHechicero.push(hechicero);
      }
    public agregarLuchador(luchador: luchador): void {
        this.arrLuchador.push(luchador);
      }
    public agregarArquero(arquero: arquero): void {
        this.arrArquero.push(arquero);
      }
    
    public getPersonajes(): personajes[] {
        return this.arrHechicero;
        
    }
}
