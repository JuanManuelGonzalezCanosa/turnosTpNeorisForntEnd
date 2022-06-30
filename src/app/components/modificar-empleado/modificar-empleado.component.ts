import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/entitys/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-modificar-empleado',
  templateUrl: './modificar-empleado.component.html',
  styleUrls: ['./modificar-empleado.component.css']
})
export class ModificarEmpleadoComponent implements OnInit {

  id:number;
  empleado:Empleado = new Empleado();
  constructor(private empleadoService:EmpleadoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.obtenerEmpleadoId(this.id).subscribe(dato =>{
      this.empleado = dato;
    },error => console.log(error));
  }
}


