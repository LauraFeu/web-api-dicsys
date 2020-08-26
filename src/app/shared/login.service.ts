import { Injectable } from '@angular/core';
import { Login } from './login.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  formData : Login;
  readonly rootURL= "https://localhost:44316/api"
  
  constructor(private http: HttpClient) { }

  postCredenciales(formData : Login){
    return this.http.post(this.rootURL+'/Credencial', formData);
   }
}
