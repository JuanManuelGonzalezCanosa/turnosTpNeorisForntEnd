import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../entitys/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private urlEmpleados = "http://localhost:8080/empleados";


  constructor(private http: HttpClient) { }

  //LISTA DE EMPLEADOS
  obtenerListaDeEmpleados() : Observable<Empleado[]>{
    return this.http.get<Empleado[]>(`${this.urlEmpleados}`);
  }

  //CREAR EMPLEADO
  crearEmpleado(empleado:Empleado) : Observable<Object> {
    return this.http.post(`${this.urlEmpleados}`, empleado);
  }

  modificarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
    return this.http.put(`${this.urlEmpleados}/${id}`,empleado);
  }

  obtenerEmpleadoId(id:number) : Observable<Empleado>{
    return this.http.get<Empleado>(`${this.urlEmpleados}/${id}`);
  }


  eliminarEmpleadoId(id:number) : Observable<Object> {
    return this.http.delete(`${this.urlEmpleados}/${id}`);
  }

}
