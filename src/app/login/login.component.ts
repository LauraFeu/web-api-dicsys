import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public service : LoginService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      IDEmpleado : null,
      Usuario : '',
      Password: ''
    }
  }
  onSubmit(form : NgForm){
this.insertRecord(form);
  }
  insertRecord(form : NgForm){
this.service.postCredenciales(form.value).subscribe(res => {
  this.resetForm(form)
})
  }
}
