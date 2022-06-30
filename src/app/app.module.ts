import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { FormsModule } from '@angular/forms';
import { ModificarEmpleadoComponent } from './components/modificar-empleado/modificar-empleado.component';
import { EmpleadoDetallesComponent } from './components/empleado-detalles/empleado-detalles.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    CrearEmpleadoComponent,
    ModificarEmpleadoComponent,
    EmpleadoDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
