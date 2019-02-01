import { NgModule } from '@angular/core';
import { ngfModule } from "angular-file";
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListadoProductoComponent } from './listado-producto/listado-producto.component';
import { ProductoCargaComponent } from './producto-carga/producto-carga.component';
import { ListadoFotoComponent } from './listado-foto/listado-foto.component';
import { FotoCargaComponent } from './foto-carga/foto-carga.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListadoProductoComponent, ProductoCargaComponent, ListadoFotoComponent, FotoCargaComponent],
  imports: [
    ngfModule,
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductosModule { }
