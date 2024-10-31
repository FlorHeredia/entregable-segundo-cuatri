import {personajes} from "./personajes";

export class hechicero extends personajes{
    sabiduria: number;
    constructor (nombre:string, nivel:number, puntosDeVida:number, sabiduria:number){
        super(nombre,nivel,puntosDeVida);
        this.sabiduria=sabiduria;
 
    }

    //metodos de hechicero
    hacerTruco():void{
        console.log ("Utilizar truco de invisibilidad");

    }
    public getSabiduria():number{
        return this.sabiduria;
    }
    public setSabiduria(sabiduria:number): void{
        this.sabiduria=sabiduria;

    }
    public atacar(): void{
        console.log("Lanzar hechizo")

    }
    public defender(): void{
        console.log("Utilizar varita mágica")
    }

}
