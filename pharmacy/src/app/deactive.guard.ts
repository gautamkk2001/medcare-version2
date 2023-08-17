import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface DeactivateComponent{
  canExit:()=>Observable<boolean> | Promise<boolean> |boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<DeactivateComponent> {
  canDeactivate(
    component: DeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canExit();
  }
  
}
