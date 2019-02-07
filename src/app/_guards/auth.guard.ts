import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
        if (localStorage.getItem('token')) {
            //logged in so return true
            return true;
        }
        this.router.navigate(['login'],{ queryParams: {returnUrl: state.url}});
        return false;
    }
}