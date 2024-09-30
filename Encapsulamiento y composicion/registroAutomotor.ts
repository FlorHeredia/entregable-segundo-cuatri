class Vehiculo {
    /*private tipo: Tipo;*/
    private marca: string;
    private modelo: number;
    private patente: string;

constructor (/*tipo: Tipo,*/ marca: string, modelo: number, patente: string){
    /*this.tipo= tipo;*/
    this.marca= marca;
    this.modelo= modelo;
    this.patente= patente;
}

getMarca(): string {
    return this.marca;
}
setMarca(nuevaMarca: string): void {
    this.marca = nuevaMarca;
}

}


/*class Tipo {
    private tipo: string;

    constructor(tipoDeVehiculo: string){
        this.tipo= tipoDeVehiculo;
    }

    getTipo():string{
        return this.tipo;
    }
}

const tipoVehiculo = new Tipo ("Tipo");*/

const vehiculo1= new Vehiculo( "kawazaki", 2018, "FIN555")

console.log(vehiculo1);