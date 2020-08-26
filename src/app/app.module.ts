import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { EmpleadoListComponent } from './empleados/empleado-list/empleado-list.component';
import { EmpleadoService } from './shared/Empleado.Service';
import { FormsModule } from "@angular/forms"; 
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { LoginService } from './shared/login.service';

//Rutas
import { app_routing } from "./app.routes";
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    EmpleadoListComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    app_routing,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
    
  ],
  providers: [EmpleadoService, 
              LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
