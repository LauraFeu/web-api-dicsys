import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { EmpleadoComponent } from "./empleados/empleado/empleado.component";
import { EmpleadoListComponent } from "./empleados/empleado-list/empleado-list.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

const app_routes: Routes = [
{ path: 'empleado-list', component: EmpleadoListComponent },
{ path: 'empleado', component: EmpleadoComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);