
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
  return this.http.get(environment.getProducts)
}
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


getfeatured(){
  return this.http.get(environment.getFeaturedProducts)
}
getProductdescription(){
  return this.http.get(environment.getProductdescription)
}
addUserInformation(body:any){
  return  this.http.post(environment.getUser,body);
}
registereduser(){
  return this.http.get(environment.getUser)
}

deleteUsers(username:any){
  return this.http.delete(environment.getUser+"/"+username)
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

deleteCartValues(id:any){
  return this.http.delete(environment.getCartProducts+"/"+id);
}


deleteAllCart(){
  return this.http.delete(environment.getCartProducts);
}

deleteCartItem(id:number){
  return this.http.delete(environment.getCartProducts+id).subscribe((result)=>{

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

addUserAddress(values:any){
  return this.http.post(environment.getUserAddress,values);
}

getUserAddress(){
  return this.http.get(environment.getUserAddress);
}


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

// filter the user's cart products

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

// filter the user's wishlisted products

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
