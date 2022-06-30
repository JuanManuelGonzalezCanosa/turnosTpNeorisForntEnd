import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { EmpleadoDetallesComponent } from './components/empleado-detalles/empleado-detalles.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ModificarEmpleadoComponent } from './components/modificar-empleado/modificar-empleado.component';

const routes: Routes = [
  {path : 'empleados', component : EmpleadoComponent},
  {path : '', redirectTo : 'empleados', pathMatch : 'full'},
  {path : 'crear-empleado', component : CrearEmpleadoComponent},
  {path : 'modificar-empleado/:id', component : ModificarEmpleadoComponent},
  {path : 'empleado-detalles', component : EmpleadoDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
