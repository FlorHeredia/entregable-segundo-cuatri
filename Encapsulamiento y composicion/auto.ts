export class Auto {
    color: string;
    modelo: number;
    patente: string;
    marca: string;
  

    constructor ( color:string, modelo: number, patente: string, marca:string){
        this.color=color;
        this.modelo=modelo;
        this.patente=patente;
        this.marca=marca;
       
    }

//metodos get:    
getColor(): string{
    return this.color;
}
getModelo(): number{
    return this.modelo;
}
getPatente(): string{
    return this.patente;
}
getMarca(): string{
    return this.marca;
}

//metodos set:

setColor(color:string) : void{
    this.color= color;
}
setModelo(modelo:number): void{
    this.modelo=modelo;
}
setPatente(patente:string): void{
    this.patente=patente;
}
setMarca(marca:string): void {
    this.marca=marca;
}
}

