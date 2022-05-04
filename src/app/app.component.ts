import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Empleados';

  empleados:Empleado[] = [

    new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "Martín", "Directora", 5000),
    new Empleado("María", "Fernández", "Jefa Sección", 3500),
    new Empleado("David", "García", "Adminstrativo", 2500),

  ];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this.empleados.push(miEmpleado)
  }


}
