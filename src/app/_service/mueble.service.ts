import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Mueble } from '../_models/Mueble';
import { environment } from '../../environments/environment';
import { Producto } from '../_models/Producto';

@Injectable({
  providedIn: 'root'
})
export class MuebleService {

  private base_path = environment.base_path;
  constructor(
    private http:HttpClient,
  ) { }

  store(item:Mueble,producto:Producto){
    return this.http.post<Mueble>(this.base_path + 'muebles',
    {
      //atributos producto
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      cantidad: producto.cantidad,
      cantidad_min: producto.cantidad_minima,
      precio: producto.precio,
      precio_lista: producto.precio_lista,
      id_categoria:producto.id_categoria,
      //atributos muebles
      alto: item.alto,
      ancho: item.ancho,
      profundidad: item.profundidad,
      cantidad_puertas: item.cantidad_puertas,
      cantidad_cajones: item.cantidad_cajones,
      cantidad_estantes: item.cantidad_estantes,
      tapizado: item.tapizado,
    });
  }

  getAll(){
    return this.http.get<Mueble[]>(this.base_path + 'muebles');
  }

  getBy(id:number){
    return this.http.get<Mueble>(this.base_path + 'muebles/'+id);
  }
  update(item:Mueble,producto:Producto) {
    return this.http.put<Mueble>(this.base_path + 'muebles/'+item.id,
    {
      //atributos producto
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      cantidad: producto.cantidad,
      cantidad_min: producto.cantidad_minima,
      precio: producto.precio,
      precio_lista: producto.precio_lista,
      id_categoria:producto.id_categoria,
      //atributos muebles
      alto: item.alto,
      ancho: item.ancho,
      profundidad: item.profundidad,
      cantidad_puertas: item.cantidad_puertas,
      cantidad_cajones: item.cantidad_cajones,
      cantidad_estantes: item.cantidad_estantes,
      tapizado: item.tapizado,
    }
    );
  }
}