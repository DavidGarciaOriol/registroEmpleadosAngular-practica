export class Empleado{

    private nombre:string = "";
    private apellido:string = "";
    private cargo:string = "";
    private salario:number = 0

    constructor(nombre:string, apellido:string, cargo:string, salario:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.salario = salario;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    setApellidos(apellido:string){
        this.apellido = apellido;
    }

    setCargo(cargo:string){
        this.cargo = cargo;
    }

    setSalario(salario:number){
        this.salario = salario;
    }

    getNombre(){
        return this.nombre;
    }

    getApellido(){
        return this.apellido;
    } 
    
    getCargo(){
        return this.cargo;
    }

    getSalario(){
        return this.salario;
    }

}