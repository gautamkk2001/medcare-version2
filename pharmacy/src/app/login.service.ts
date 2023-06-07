import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor() { }

 islogged:boolean=false;
 userLoggedIn():boolean{
  return this.islogged;
 }
 login(username:string,password:string){

  this.islogged=true;
  return of(this.islogged);
}
}
