import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Usuario } from '../_models/usuario';
import { Mueble } from '../_models/Mueble';
import {map} from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private base_path = environment.base_path;
  constructor(
    private http:HttpClient,
  ) { }

  login(usuario:Usuario){
      return this.http.post(this.base_path + 'login', usuario)
      .pipe(map((user:any) => {
        console.log(user);
          if (user && user.token){
              localStorage.setItem('token',JSON.stringify(user.token));
              localStorage.setItem('usuario',JSON.stringify(user));
          }
      }));
  }
  register(usuario:Usuario){
      return this.http.post(this.base_path + 'register', usuario)
      .pipe(map((user:any) => {
        if (user && user.token){
            localStorage.setItem('token',JSON.stringify(user.token));
            localStorage.setItem('usuario',JSON.stringify(user));
            
        } 
    }));

  }

  store(item:Mueble){
    return this.http.post<Mueble>(this.base_path + 'muebles',item);
  }

  getAll(){
    return this.http.get<Mueble[]>(this.base_path + 'muebles');
  }

  getBy(id:number){
    return this.http.get<Mueble>(this.base_path + 'muebles/'+id);
  }
}