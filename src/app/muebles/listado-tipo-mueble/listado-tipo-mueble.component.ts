import { Component, OnInit } from '@angular/core';
import { TipoMuebleService } from '../../_service/tipo.mueble.service';
import { TipoMueble } from '../../_models/TipoMueble';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-listado-tipo-mueble',
  templateUrl: './listado-tipo-mueble.component.html',
  styleUrls: ['./listado-tipo-mueble.component.scss']
})
export class ListadoTipoMuebleComponent implements OnInit {
  tipos_muebles:TipoMueble[];

  constructor(
    private tipoMuebleService:TipoMuebleService,
    private router: Router) {
    }

  ngOnInit() {
    this.tipoMuebleService.getAll().subscribe(response=>{
      this.tipos_muebles = response;
    })
  }

  ver(item:TipoMueble) {
    this.router.navigate(['muebles/tipos/'+item.id+'/editar']);
  }
}
/*
  ver(item:Mueble){
    this.router.navigate(['muebles/'+item.id+'/editar']);
  }
}
*/