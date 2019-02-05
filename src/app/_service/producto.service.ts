import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Producto } from '../_models/Producto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private base_path = environment.base_path;
  constructor(
    private http:HttpClient,
  ) { }

  store(item:Producto){
    return this.http.post<Producto>(this.base_path + 'productos',item);
  }

  getAll(){
    return this.http.get<Producto[]>(this.base_path + 'productos');
  }
/*
  getBy(id:number){
    return this.http.get<Producto>(this.base_path + 'productos/'+id);
  }
  */
}
