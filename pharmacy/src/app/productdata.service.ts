
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
import { Observable, map } from 'rxjs';

// import * as nodemailer from 'nodemailer';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  strotedData:any="";
  loggedInUser:any;
  paymentTotal:any;

  fullStory:any=""
  salePrice:boolean=false;

  // to use in myorders page
  orderPayment:boolean=false;

  logInUser:any=""

  offer:boolean=true;

 constructor(private http:HttpClient) {
  const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
  if (sessionUser) {
    this.logInUser = JSON.parse(sessionUser);
  }
}

getproducts(){
  return this.http.get("http://localhost:3000/productdata")
}
postproducts(product:any){
  return this.http.post("http://localhost:3000/productdata",product)
}
dropproducts(name:any){
  return this.http.delete("http://localhost:3000/productdata"+"/"+name)
}
updateproducts(id:any, data:any){
  return this.http.put<any>("http://localhost:3000/productdata/"+id,data).pipe(map((res:any)=>{
    return res;
  }));
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

deleteUsers(username:any){
  return this.http.delete("http://localhost:3000/registeredUser"+"/"+username)
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
  return this.http.delete("http://localhost:3000/cart-data"+"/"+id);
}

private apiUrl = 'http://localhost:3000/cart-data';
deleteAllCart(){
  return this.http.delete(this.apiUrl);
}

deleteCartItem(id:number){
  return this.http.delete('http://localhost:3000/cart-data/'+id).subscribe((result)=>{

  })
}

orderConfirmed(body:any){
  return this.http.post("http://localhost:3000/ordersAll",body)
}

getOrderDetails(){
  let userStore = sessionStorage.getItem('userName');
  let userData = userStore && JSON.parse(userStore);
  return this.http.get<any>('http://localhost:3000/OrdersAll?Email_Id='+userData.email);
}

OrderList(){
  let userStore = sessionStorage.getItem('userName');
  let userData = userStore && JSON.parse(userStore);
  return this.http.get<any>('http://localhost:3000/OrdersAll?Email_Id='+userData.email);
}

postOrderedProducts(body:any){

  return this.http.post("http://localhost:3000/orderedProducts",body);
}

getMyOrderedProducts(){
  return this.http.get("http://localhost:3000/orderedProducts");
}
getOrderedProducts(id:any){
  return this.http.get<any>("http://localhost:3000/ordersAll/"+id);
}

blogData(){
  return this.http.get("http://localhost:3000/blog-data")
}

addUserAddress(values:any){
  return this.http.post("http://localhost:3000/useraddress",values);
}

getUserAddress(){
  return this.http.get("http://localhost:3000/useraddress");
}

orderUrl:any="http://localhost:3000/orderedProducts";
searchingOrders(info: any): Observable<any> {
  return this.http.get<any>(this.orderUrl).pipe(
    map((data) => {
      return data.filter(
        (item: any) =>
          item.email === info.email
      );
    })
  );
}

orderedUrl:any="http://localhost:3000/ordersAll";
searchingOrderHistory(info: any): Observable<any> {
  return this.http.get<any>(this.orderedUrl).pipe(
    map((data) => {
      return data.filter(
        (item: any) =>
          item.Email_Id === info.email
      );
    })
  );
}

// filter the user's cart products
url:any="http://localhost:3000/cart-data";
searchingCart(info: any): Observable<any> {
  return this.http.get<any>(this.url).pipe(
    map((data) => {
      return data.filter(
        (item: any) =>
          item.username === info.username && item.email === info.email
      );
    })
  );
}

// filter the user's wishlisted products
wishUrl:any="http://localhost:3000/wishlistData";
searchingWishlist(info: any): Observable<any> {
  return this.http.get<any>(this.wishUrl).pipe(
    map((data) => {
      return data.filter(
        (item: any) =>
          item.username === info.username && item.email === info.email
      );
    })
  );
}

productReviewUrl:any="http://localhost:3000/reviewProducts";
searchingProductReview(info:any): Observable<any> {
  return this.http.get<any>(this.productReviewUrl).pipe(
    map((data) => {
      return data.filter(
        (item: any) =>
          item.description === info.description
      );
    })
  );
}

ngOnInIt(){

}


orderPlaced(value:any){
  return this.http.post("http://localhost:3000/orderDate",value)
}

ordergetdate(){
  return this.http.get("http://localhost:3000/orderDate");
}

private carturl='http://localhost:3000/cart-data';
updateCartItem(item:any)  {
 const updateUrl = `${this.carturl}/${item.id}`;
 return this.http.put<any>(updateUrl, item);
}

postProductsReview(review:any){
  return this.http.post("http://localhost:3000/reviewProducts",review);
}

getProductsReview(){
  return this.http.get("http://localhost:3000/reviewProducts");
}

}
