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
