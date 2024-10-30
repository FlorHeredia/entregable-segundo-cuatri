

export class personajes{
    protected nombre: string;
    protected nivel: number;
    protected puntosDeVida: number;

    constructor(nombre:string, nivel:number, puntosDeVida: number){
        this.nombre=nombre;
        this.nivel=nivel;
        this.puntosDeVida=puntosDeVida;
    }

    //metodos getters
    public getNombre():string{
        return this.nombre;
    }
    public getNivel():number{
        return this.nivel;
    }
    public getPuntosDeVida():number{
        return this.nivel;
    }
    //metodos setters
    public setNombre(nombre:string){
        this.nombre=nombre;
    }
    public setNivel(nivel:number){
        this.nivel=nivel;
    }
    public setPuntosDeVida(puntosDeVida:number){
        this.puntosDeVida=puntosDeVida;
    }

    //otros metodos
    atacar():void{
        console.log("¡Activar ataque!");
    }
    defender():void{
        console.log("¡Activar defensa!");
    }
}
