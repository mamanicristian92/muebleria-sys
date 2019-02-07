import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Categoria } from '../_models/Categoria';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private base_path = environment.base_path;
  constructor(
    private http:HttpClient,
  ) { }

  store(item:Categoria){
    return this.http.post<Categoria>(this.base_path + 'productos/categorias',item);
  }

  getAll(){
    return this.http.get<Categoria[]>(this.base_path + 'productos/categorias');
  }

  getBy(id:number){
    return this.http.get<Categoria>(this.base_path + 'productos/categorias/'+id);
  }

}
