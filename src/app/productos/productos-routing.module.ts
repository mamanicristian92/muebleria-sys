import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoProductoComponent } from './listado-producto/listado-producto.component';
import { ListadoFotoComponent } from './listado-foto/listado-foto.component';
import { FotoCargaComponent } from './foto-carga/foto-carga.component';

const routes: Routes = [
  {
    path:'',
    component:ListadoProductoComponent,
    data: {
      title: 'Productos'
    }
  },
  {
    path:':id_producto/fotos',
    component:ListadoFotoComponent,
    data:{
      title:'listado foto',
    }
  },
  {
    path:':id_producto/fotos/nuevo',
    component:FotoCargaComponent,
    data:{
      title:'Fotos Nuevas',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }

/*
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuebleCargaComponent } from './mueble-carga/mueble-carga.component';
import { ListadoMuebleComponent } from './listado-mueble/listado-mueble.component';
import { TipoMuebleCargaComponent } from './tipo-mueble-carga/tipo-mueble-carga.component';
import { ListadoTipoMuebleComponent } from './listado-tipo-mueble/listado-tipo-mueble.component';

const routes: Routes = [{
  path:'nuevo',
  component:MuebleCargaComponent,
},{
  path:'',
  component:ListadoMuebleComponent,
},{
  path:':id_mueble/editar',
  component:MuebleCargaComponent,
},{
  path:'tipos',
  children:[
    {
      path:'nuevo',
      component:TipoMuebleCargaComponent,
    },{
      path:'',
      component:ListadoTipoMuebleComponent,
    },{
      path:':id_mueble/editar',
      component:TipoMuebleCargaComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MueblesRoutingModule { }
*/