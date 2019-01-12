import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Mueble } from '../_models/Mueble';
import { environment } from '../../environments/environment';
import { TipoMueble } from '../_models/TipoMueble';

@Injectable({
  providedIn: 'root'
})
export class MuebleService {

  private base_path = environment.base_path;
  constructor(
    private http:HttpClient,
  ) { }

  store(item:Mueble){
    return this.http.post<Mueble>(this.base_path + 'muebles',item);
  }

  getAll(){
    return this.http.get<Mueble[]>(this.base_path + 'muebles');
  }

  getBy(id:number){
    return this.http.get<Mueble>(this.base_path + 'muebles/'+id);
  }
  getTiposMueble(){
    return this.http.get<TipoMueble[]>(this.base_path + 'muebles/tipos');
  }
}
