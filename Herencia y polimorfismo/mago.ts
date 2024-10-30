import {personajes} from "./personajes";

export class mago extends personajes{
    sabiduria: number;
    constructor (nombre:string, nivel:number, puntosDeVida:number, sabiduria:number){
        super(nombre,nivel,puntosDeVida);
        this.sabiduria=sabiduria;
 
    }

    //metodos de mago
    hacerTruco():void{
        console.log ("Utilizar truco de invisibilidad");

    }
    public getSabiduria():number{
        return this.sabiduria;
    }
    public setSabiduria(sabiduria:number): void{
        this.sabiduria=sabiduria;

    }        

}
