import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/shared/Empleado.Service';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.scss']
})
export class EmpleadoListComponent implements OnInit {

  constructor(public service : EmpleadoService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
