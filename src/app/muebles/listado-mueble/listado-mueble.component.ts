import { Component, OnInit } from '@angular/core';
import { MuebleService } from '../../_service/mueble.service';
import { Mueble } from '../../_models/Mueble';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-listado-mueble',
  templateUrl: './listado-mueble.component.html',
  styleUrls: ['./listado-mueble.component.scss']
})
export class ListadoMuebleComponent implements OnInit {

  muebles:Mueble[];

  constructor(
    private muebleService:MuebleService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.muebleService.getAll().subscribe(response=>{
      this.muebles = response;
    });
  }

  ver(item:Mueble){
    this.router.navigate(['muebles/'+item.id+'/editar']);
  }
}
