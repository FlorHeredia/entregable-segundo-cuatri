import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";



export class RegistroAutomotor {
    private arrAutos: Auto[];
    private arrMotos: Moto[];
    private arrCamiones: Camion[];

    public constructor(autos: Auto[], camiones: Camion[], motos:Moto[] ) {
        this.arrAutos = autos
        this.arrCamiones = camiones;
        this.arrMotos = motos;
    }


    
    agregarAuto(auto: Auto):void{
                this.arrAutos.push(auto);
        }
    agregarMoto(moto:Moto): void{
        this.arrMotos.push(moto);
    }
    agregarCamion(camion:Camion):void{
        this.arrCamiones.push(camion)
    }

  
//metodos get
getAutos(): Auto [] {
    return this.arrAutos;
}
getMotos(): Moto [] {
    return this.arrMotos;
}
getCamiones(): Camion [] {
    return this.arrCamiones;
}

//Metodos para eliminar un vehiculo
public darDeBaja(index: number): void {
    this.arrAutos.splice(index, 1);
}
}
