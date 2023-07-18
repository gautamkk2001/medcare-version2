
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

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private client:HttpClient) { }
orderUrl:any="";
addUserInformation(body:any){
  return this.client.post("http://localhost:3000/users",body);
}
order(orderData:any){
  return this.client.post(`${this.orderUrl}`, orderData)
}

addContactInformation(body:any){
  return this.client.post("http://localhost:3000/contactForm",body);
}

getContactInformation(){
  return this.client.get("http://localhost:3000/contactForm");
}

}
