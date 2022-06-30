import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/entitys/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {

  id:number;
  empleado:Empleado;
  constructor(private route:ActivatedRoute,private empleadoServicio:EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
  //  this.empleadoServicio.obtenerEmpleadoId(this.id).subscribe(dato => {
   //   this.empleado = dato;
   //   swal(`Detalles del empleado ${this.empleado.nombre}`);
   // });
  }

}