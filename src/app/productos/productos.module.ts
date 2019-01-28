import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListadoProductoComponent } from './listado-producto/listado-producto.component';
import { ProductoCargaComponent } from './producto-carga/producto-carga.component';
import { ListadoFotoComponent } from './listado-foto/listado-foto.component';
import { FotoCargaComponent } from './foto-carga/foto-carga.component';

@NgModule({
  declarations: [ListadoProductoComponent, ProductoCargaComponent, ListadoFotoComponent, FotoCargaComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
