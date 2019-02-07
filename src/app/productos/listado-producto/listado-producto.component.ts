import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../_service/producto.service';
import {Producto} from '../../_models/Producto';
import {Route,Router} from '@angular/router';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.scss']
})
export class ListadoProductoComponent implements OnInit {

  productos:Producto[];
  
  constructor(
    private productoService:ProductoService,
    private router:Router,
  ) { }
  ngOnInit() {
    this.productoService.getAll().subscribe(response=>{
      this.productos = response;
    })
  }
  ver(item:Producto){
    this.router.navigate(['productos/'+item.id+'/editar']);
  }
  nuevo() {
    this.router.navigate(['productos/nuevo']);
  }
  ver_foto(item:Producto){
    this.router.navigate(['productos/'+item.id+'/fotos']);
  }
}
/*

export class ListadoMuebleComponent implements OnInit {

  muebles:Mueble[];

  ver(item:Mueble){
    this.router.navigate(['muebles/'+item.id+'/editar']);
  }
  nuevo() {
    this.router.navigate(['muebles/nuevo']);
  }
}
*/