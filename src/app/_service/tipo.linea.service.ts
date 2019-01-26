import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { TipoLinea } from '../_models/TipoLinea';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoLineaService {

  private base_path = environment.base_path;
  constructor(
    private http:HttpClient,
  ) {}
  /*
  store(item:TipoLinea){
    return this.http.post<TipoLinea>(this.base_path + 'muebles/tipos',item);
  }
*/
  getAll(){
    return this.http.get<TipoLinea[]>(this.base_path + 'muebles/tipos');
  }
/*
  getBy(id:number){
    return this.http.get<TipoLinea>(this.base_path + 'muebles/tipos/'+id);
  }*/
}
