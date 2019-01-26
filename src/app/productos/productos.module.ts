import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListadoProductoComponent } from './listado-producto/listado-producto.component';
import { ProductoCargaComponent } from './producto-carga/producto-carga.component';

@NgModule({
  declarations: [ListadoProductoComponent, ProductoCargaComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
