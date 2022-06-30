import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/entitys/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleados : Empleado[];

  constructor(private empleadoService : EmpleadoService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  modificarEmpleadoId(id : number){
    this.router.navigate(['modificar-empleado']);
  }

  eliminarEmpleadoId(id : number){
    this.empleadoService.eliminarEmpleadoId(id).subscribe(dato =>{
      console.log(dato);
      this.obtenerEmpleados();
    });
  }

  obtenerEmpleados(){
    this.empleadoService.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  } 

}
