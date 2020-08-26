import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/shared/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public service: LoginService, 
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetform();
  }

  resetform(form? : NgForm)  {
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      IDEmpleado : null, 
      Usuario: '',
      Password: '',
    }
  }
  onSubmit(form : NgForm){
    this.insertRecord (form);
  }
  insertRecord (form : NgForm){
    this.service.postCredenciales(form.value).subscribe(res => {
      this.toastr.success('Te has registrado correctamente')
      this.resetform(form)
    });
  }
}
