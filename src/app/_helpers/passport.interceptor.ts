import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PassportInterceptor implements HttpInterceptor{
    constructor(
        private router: Router,
    ){}
    intercept(request:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>> {
        let token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization:'Bearer '+token
                }
            });
        }
        return next.handle(request).catch(x=>this.handleAuthError(x));
    } 

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        if (err.status === 401 ){
            this.router.navigateByUrl('/login');
            return Observable.throw(err.error);
        }
        return Observable.throw(err);
    }

}