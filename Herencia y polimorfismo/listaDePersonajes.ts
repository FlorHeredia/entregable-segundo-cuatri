import { arquero } from "./arquero";
import { arqueroMaster } from "./arqueroMaster";
import { hechicero } from "./hechicero";
import { luchador } from "./luchador";
import {personajes} from "./personajes"

export class listaDePersonajes {
    public arrHechicero: hechicero[];
    public arrLuchador: luchador[];
    public arrArquero: arquero [];
    public arrArqueroM: arqueroMaster [];

    constructor(hechiceros: hechicero[], luchadores: luchador[], arqueros: arquero [], arqueroM: arqueroMaster[]){

        this.arrHechicero= hechiceros;
        this.arrLuchador= luchadores;
        this.arrArquero= arqueros;
        this.arrArqueroM= arqueroM;
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
    public agregarArqueroMaster(arqueroM: arqueroMaster): void {
        this.arrArqueroM.push(arqueroM);
      }
    
    public getPersonajes(): personajes[] {
        return this.arrHechicero;
        
    }
}
