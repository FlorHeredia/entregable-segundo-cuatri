import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";

class RegistroAutomotor {
    private Auto: string;
    private Moto: string;
    private Camion: string;

constructor ( auto: string, moto: string,camion: string){
    this.Auto=auto;
    this.Moto=moto;
    this.Camion=camion;
}
//metodos get
getAuto(): string {
    return this.Auto;
}
getMoto(): string{
    return this.Moto;
}
getCamion(): string{
    return this.Camion;
}



}
