import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { TipoMueble } from '../_models/TipoMueble';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoMuebleService {

  private base_path = environment.base_path;
  constructor(
    private http:HttpClient,
  ) { }

  store(item:TipoMueble){
    return this.http.post<TipoMueble>(this.base_path + 'muebles/tipos',item);
  }

  getAll(){
    return this.http.get<TipoMueble[]>(this.base_path + 'muebles/tipos');
  }

  getBy(id:number){
    return this.http.get<TipoMueble>(this.base_path + 'muebles/tipos/'+id);
  }

  update(item:TipoMueble){
    return this.http.put<TipoMueble>(this.base_path + 'muebles/tipos/'+item.id,item);
  }
}
