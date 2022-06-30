import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/entitys/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  empleado : Empleado = new Empleado();

  constructor(private empleadoService:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
  }

  crearEmpleado(){
    this.empleadoService.crearEmpleado(this.empleado).subscribe(dato =>{
      console.log(dato);
      this.volverListaEmpleados();
    }, error => console.log(error));
  }



  volverListaEmpleados(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(){
    this.crearEmpleado();
  }

}
