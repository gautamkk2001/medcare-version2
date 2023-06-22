
 /*
  Title : MedCare - Pharmacy
  Author: Gautam
  Created at : Febrary 2023
  Updated at : 13/06/2023
  Comments  :  -
  Reviewed by : Gautam
  Reviewed at  : 13/06/2023 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  strotedData:any="";
  loggedInUser:any;
  paymentTotal:any;

  fullStory:any=""
  salePrice:boolean=false;
constructor(private http:HttpClient) { }

getproducts(){
  return this.http.get("http://localhost:3000/productdata")
}
getfeatured(){
  return this.http.get("http://localhost:3000/featured")
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
adminUser(){
  return this.http.get("http://localhost:3000/adminData")
}
getdrugsname(){
  return this.http.get("http://localhost:3000/druglist")
}
addToCart(body:any){
  return  this.http.post("http://localhost:3000/cart-data",body);
}
addtoWishlist(body:any){
  return  this.http.post("http://localhost:3000/wishlistData",body);
}
wishlistvalues(){
  return this.http.get("http://localhost:3000/wishlistData")
}
cartDataValues(){
  return this.http.get("http://localhost:3000/cart-data")
}

deleteCartValues(id:any){
  return this.http.delete("http://localhost:3000/cart-data"+"/"+id)
}

blogData(){
  return this.http.get("http://localhost:3000/blog-data")
}
}
