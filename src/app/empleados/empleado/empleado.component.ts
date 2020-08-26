import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/shared/Empleado.Service';
import { NgForm } from '@angular/forms';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/shared/empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  constructor(public service: EmpleadoService,
    public toastr : ToastrService) { }
  

  ngOnInit(): void {
    this.resetform();
    this.service.refreshList();
  }

  resetform(form? : NgForm)  {
    if(form !=null)
    form.resetForm();
    this.service.formData = {
      IDEmpleado : null, 
      Legajo: null,
      Nombre: '',
      Apellido: '',
      DNI: null ,
      Email: '',
      Celular: null ,
      Empresa: '',
      Estado: '',
      Cargo: '',
    }
  }

  onSubmit(form : NgForm){
    if(form.value.IDEmpleado == null)
    this.insertRecord (form);
    else
    this.updateRecord(form);
  }

  insertRecord (form : NgForm){
    this.service.postEmpleado(form.value).subscribe(res => {
      this.toastr.success('Sus datos fueron Registrados Correctamente','¡EUREKA! ☺')
      this.resetform(form);
      this.service.refreshList();
    });
  }

 updateRecord (form : NgForm){
  this.service.putEmpleado(form.value).subscribe(res => {
    this.toastr.info('Sus datos fueron Modificados Correctamente', 'MODIFICACIÓN')
    this.resetform(form);
    this.service.refreshList();
  });
 }
  
populateForm(emp: Empleado){
  this.service.formData = Object.assign({},emp);
}

onDelete(id :number){
  if(confirm('¿Desea eliminar este empleado?')){
  this.service.deleteEmpleado(id).subscribe(res=>{
    this.service.refreshList();
    this.toastr.warning('Datos Borrados Satisfactoriamente')
  })
}}

}
