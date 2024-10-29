import { vehiculo } from "./vehiculo";
export class Moto extends vehiculo{
    puertas: number;

    constructor ( color:string, modelo: number, patente: string, marca:string, puertas:number){
        super(color, modelo, patente, marca);
        this.puertas=puertas;

    }
//metodos especificos de moto:
getPuertas():number{
    return this.puertas;
}
setPuertas(puertas:number): void{
    this.puertas=puertas;
}   
}