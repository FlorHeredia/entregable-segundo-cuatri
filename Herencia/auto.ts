import { vehiculo } from "./vehiculo";

export class Auto extends vehiculo{
   puertas: number;

   constructor ( color:string, modelo: number, patente: string, marca:string, puertas: number){
        super(color, modelo, patente, marca);
        this.puertas=puertas;
       
    }

// metodos especificos de auto:
getPuertas(): number{
    return this.puertas;
}
setPuertas(puertas:number): void{
    this.puertas=puertas;
}



}

