import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CartService } from './cart.service';
import { LoginService } from '../login.service';
import { CartpageService } from '../cartpage.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css'],
})
export class CartpageComponent implements OnInit {
  cartData: any = ' ';
  // totalPrice:any="0";
  // shipping:any="50";
  // lastprice:any;
  qua: any = '';
//  offer:any;
  constructor(
    private data: ProductdataService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    // to add the total price in the cart
    // this.data.cartDataValues().subscribe((data)=>{
    //     this.cartData=data;
    //     for(let pro of this.cartData){
    //       this.totalPrice= parseInt (this.totalPrice)+parseInt(pro.originalAmount);
    //     }
    // this.lastprice=parseInt(this.totalPrice)+parseInt(this.shipping);
    // this.data.paymentTotal=this.lastprice;
    // })

  }

  offer = this.data.offer;
  subtotal:any=0;

  // quqntity changing
  increaseQuantity(item:any): void{
    if(item.cartQuantity < 3){
       item.cartQuantity++;
       item.subtotal= item.cartQuantity*item.originalAmount;
       this.subtotal= item.subtotal;
       this.data.updateCartItem(item).subscribe(()=>{
       this.adding();
       });
    }
  }

  decreaseQuantity(item:any): void{
    if(item.cartQuantity <= 3){
       item.cartQuantity--;
       item.subtotal= item.cartQuantity*item.originalAmount;
       this.subtotal= item.subtotal;
       this.data.updateCartItem(item).subscribe(()=>{
        this.adding();
       });
    }
  }


  //  delete
  delete(id: any) {
    this.data.deleteCartValues(id).subscribe((data) => {
    alert('Successfully deleted');
      // window.location.reload();
    });
  }

  apply() {
    let test = sessionStorage.getItem('userId');
    alert(test);
  }

  // popup
  popupp() {
    const orderpanel: any = document.querySelector('.popup');
    orderpanel.showModal();
    let test = sessionStorage.getItem(JSON.parse('userId'));
    alert(test);
  }

  logInUser: any = '';
  cartproducts:any=[];
  status:any;

  url: any = 'http://localhost:3000/cart-data';
  totalPrice: any = '0';
  shipping: any = '50';
  lastprice: any;



  ngOnInit() {
    const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }
    this.data.searchingCart(this.logInUser).subscribe((data) => {
      this.cartproducts = data;
      this.status= this.cartproducts.length;
      // to add the price of products
       this.adding();
    });
  }

  adding(){
    this.totalPrice = '0';
    this.lastprice='0';
    this.subtotal=0;
    for (let pro of this.cartproducts) {
      this.subtotal= pro.originalAmount*pro.cartQuantity;
      this.totalPrice = parseInt(this.totalPrice) + (pro.originalAmount*pro.cartQuantity);
    }
    this.lastprice = parseInt(this.totalPrice) + parseInt(this.shipping);
    this.data.paymentTotal = this.lastprice;
  }


}



























// searchTiming(info: any): Observable<any> {
//   return this.http.get<any>(this.url).pipe(
//     map((data) => {
//       return data.filter(
//         (item: any) =>
//           item.username === info.username && item.email === info.email
//       );
//     })
//   );
// }
