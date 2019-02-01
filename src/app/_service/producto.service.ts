import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Producto, ProductoFoto } from '../_models/Producto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private base_path = environment.base_path;
  constructor(
    private http:HttpClient,
  ) { }
/*
  store(item:Producto){
    return this.http.post<Producto>(this.base_path + 'productos',item);
  }
*/
  getAll(){
    return this.http.get<Producto[]>(this.base_path + 'productos');
  }
  fotos(id_producto:number){
    return this.http.get<ProductoFoto[]>(this.base_path + 'productos/'+id_producto+'/fotos');
  }
  alta_foto(file,id_producto){
    var form = new FormData();
    form.append("foto",file);
    return this.http.post(this.base_path + 'productos/'+id_producto+'/fotos',form);
  }
  foto(productoFoto:ProductoFoto){
    return this.http.get(this.base_path+'productos/'+productoFoto.id_producto+'/fotos/'+productoFoto.id,{responseType:'blob'})
  }
/*
  getBy(id:number){
    return this.http.get<Producto>(this.base_path + 'productos/'+id);
  }
  */
}
