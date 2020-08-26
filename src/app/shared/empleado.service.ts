import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  
  formData : Empleado;
  list : Empleado[];
  readonly rootURL = "https://localhost:44316/api"

  constructor(private http: HttpClient) { }
  
  GetEmpleado(){
    this.http.get(this.rootURL+'/Empleado')
    .toPromise().then(res => this.list = res as Empleado[])
  }

  postEmpleado(formData : Empleado){
    return this.http.post(this.rootURL+'/Empleado', formData);

   }

   refreshList(){
     this.http.get(this.rootURL+'/Empleado')
     .toPromise().then(res => this.list = res as Empleado[])
   }

   putEmpleado(formData : Empleado){
    return this.http.put(this.rootURL+'/Empleado/'+formData.IDEmpleado, formData);

   }

   deleteEmpleado(id : number){
     return this.http.delete(this.rootURL+'/Empleado/'+id);
   }

}
