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
}
