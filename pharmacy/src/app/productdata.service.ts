import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  strotedData:any="";

constructor(private http:HttpClient) { }

getproducts(){
  return this.http.get("http://localhost:3000/productdata")
}
getProductdescription(){
  return this.http.get("http://localhost:3000/productdescription")
}
addUserInformation(body:any){
  return  this.http.post("http://localhost:3000/registeredUser",body);
}
registereduser(){
  return this.http.get("http://localhost:3000/registeredUser")
}
getdrugsname(){
  return this.http.get("http://localhost:3000/druglist")
}
addToCart(body:any){
  return  this.http.post("http://localhost:3000/cart-data",body);
}

}
