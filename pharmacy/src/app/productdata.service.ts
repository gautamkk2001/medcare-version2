
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
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  strotedData:any="";
  loggedInUser:any;
  paymentTotal:any;
  fullStory:any=""
  salePrice:boolean=false;
  logInUser:any=""
  offer:boolean=true;
  loginBoolean!:boolean;
 constructor(private http:HttpClient) {
  const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
  if (sessionUser) {
    this.logInUser = JSON.parse(sessionUser);
  }
}

// -----> get the products in user side - Used in product
getproducts(){
  return this.http.get(environment.getProducts)
}

// -----> Update, post, delete the products - Used in adminside
postproducts(product:any){
  return this.http.post(environment.getProducts,product)
}
dropproducts(name:any){
  return this.http.delete(environment.getProducts+"/"+name)
}
updateproducts(id:any, data:any){
  return this.http.put<any>(environment.getProducts+"/"+id,data).pipe(map((res:any)=>{
    return res;
  }));
}

// -----> get the featured products - Used in Productpage
getfeatured(){
  return this.http.get(environment.getFeaturedProducts)
}

// -----> post the new users value - Used in registration
addUserInformation(body:any){
  return  this.http.post(environment.getUser,body);
}
registereduser(){
  return this.http.get(environment.getUser)
}

deleteUsers(username:any){
  return this.http.delete(environment.getUser+username)
}

adminUser(){
  return this.http.get(environment.getAdminUser)
}

addToCart(body:any){
  return  this.http.post(environment.getCartProducts,body);
}
addtoWishlist(body:any){
  return  this.http.post(environment.getWishlistProducts,body);
}
wishlistvalues(){
  return this.http.get(environment.getWishlistProducts)
}
cartDataValues(){
  return this.http.get(environment.getCartProducts)
}

// ----> used to delete the user cart products -cartpage
deleteCartValues(id:any){
  return this.http.delete(environment.getCartProducts+"/"+id);
}

// ---> used to delete the user cart products - Payment
deleteCartItem(id:number){
  return this.http.delete(environment.getCartProducts+"/"+id).subscribe((result)=>{

  })
}

orderConfirmed(body:any){
  return this.http.post(environment.getOrdersAll,body)
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
  return this.http.post(environment.getOrderedProducts,body);
}

getMyOrderedProducts(){
  return this.http.get(environment.getOrderedProducts);
}
getOrderedProducts(id:any){
  return this.http.get<any>(environment.getOrdersAll+"/"+id);
}

blogData(){
  return this.http.get(environment.getBlogDetails)
}

// ------> post and fetch the user address - used in profile_address

addUserAddress(values:any){
  return this.http.post(environment.getUserAddress,values);
}
getUserAddress(){
  return this.http.get(environment.getUserAddress);
}

// ----> return the user ordered products - Used in Profile_prescription

searchingOrders(info: any): Observable<any> {
  return this.http.get<any>(environment.getOrderedProducts).pipe(
    map((data) => {
      return data.filter(
        (item: any) =>
          item.email === info.email
      );
    })
  );
}

// try
searchingOrderId(info: any): Observable<any> {
  return this.http.get<any>(environment.getOrderedProducts).pipe(
    map((data) => {
      return data.filter(
        (item: any) =>
          item.orderId === info.orderId
      );
    })
  );
}

// ----> return the user ordered products - Used in Profile_prescription

searchingOrderHistory(info: any): Observable<any> {
  return this.http.get<any>(environment.getOrdersAll).pipe(
    map((data) => {
      return data.filter(
        (item: any) =>
          item.Email_Id === info.email
      );
    })
  );
}

//----> filter the user's cart products - Used in Cartpage

searchingCart(info: any): Observable<any> {
  return this.http.get<any>(environment.getCartProducts).pipe(
    map((data) => {
      return data.filter(
        (item: any) =>
          item.username === info.username && item.email === info.email
      );
    })
  );
}

// filter the user's wishlisted products - Used in Profile_mywishlist

searchingWishlist(info: any): Observable<any> {
  return this.http.get<any>(environment.getWishlistProducts).pipe(
    map((data) => {
      return data.filter(
        (item: any) =>
          item.username === info.username && item.email === info.email
      );
    })
  );
}


searchingStock(): Observable<any> {
  return this.http.get<any>(environment.getProducts).pipe(
    map((data) => {
      return data.filter(
        (item: any) =>
          item.stock <=20
      );
    })
  );
}

refillStockProduct(name:any){

}

postOfferDetails(details:any){
  return this.http.post("http://localhost:3000/offer", details)
}

getOfferDetails(){
  return this.http.get("http://localhost:3000/offer");
}

searchingProductReview(info:any): Observable<any> {
  return this.http.get<any>(environment.getReviewProducts).pipe(
    map((data) => {
      return data.filter(
        (item: any) =>
          item.description === info.description
      );
    })
  );
}

// getting User Details
searchingAdminUser(info:any): Observable<any> {
  return this.http.get<any>(environment.getCartProducts).pipe(
    map((data) => {
      return data.filter(
        (item: any) =>
          item.username === info.username && item.email === info.email
      );
    })
  );
}

ngOnInIt(){

}

orderPlaced(value:any){
  return this.http.post(environment.getOrderDate,value)
}

ordergetdate(){
  return this.http.get(environment.getOrderDate);
}


updateCartItem(item:any)  {
 const updateUrl = `${environment.getCartProducts}/${item.id}`;
 return this.http.put<any>(updateUrl, item);
}

postProductsReview(review:any){
  return this.http.post(environment.getReviewProducts,review);
}

getProductsReview(){
  return this.http.get(environment.getReviewProducts);
}

}
