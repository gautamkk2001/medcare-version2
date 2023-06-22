
 /*
  Title : MedCare - Pharmacy
  Author: Gautam
  Created at : Febrary 2023
  Updated at : 13/06/2023
  Comments  :  -
  Reviewed by : Gautam
  Reviewed at  : 13/06/2023 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

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
