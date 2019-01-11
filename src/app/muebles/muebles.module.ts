import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MueblesRoutingModule } from './muebles-routing.module';
import { MuebleCargaComponent } from './mueble-carga/mueble-carga.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoMuebleComponent } from './listado-mueble/listado-mueble.component';
import { ListadoTipoMuebleComponent } from './listado-tipo-mueble/listado-tipo-mueble.component';
import { TipoMuebleCargaComponent } from './tipo-mueble-carga/tipo-mueble-carga.component';

@NgModule({
  declarations: [MuebleCargaComponent, ListadoMuebleComponent, ListadoTipoMuebleComponent, TipoMuebleCargaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MueblesRoutingModule
  ]
})
export class MueblesModule { }
