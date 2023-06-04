import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardloginGuard implements CanActivate {
  constructor(private service: LoginService, private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
  if(!this.service.userLoggedIn()){
   alert("You are not logged in to view the page");
   this.route.navigate(["log"],{queryParams:{retUrl:route.url}});
  return false;
  }
    return true;
  }


}
