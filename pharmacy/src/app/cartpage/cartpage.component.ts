import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import { CartpageService } from '../cartpage.service';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css'],
})
export class CartpageComponent implements OnInit {

  environment = environment;
 
  constructor(private data: ProductdataService, private fb: FormBuilder,private http: HttpClient) {

  }

  offer = this.data.offer;
  subtotal:any=0;

  //-----------> quantity changing
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


  //-------->  delete cart items
  delete(id: any) {
    this.data.deleteCartValues(id).subscribe((data) => {
    alert('Successfully deleted');

    });
  }



  //------> popup
  popup() {
    const orderpanel: any = document.querySelector('.popup');
    orderpanel.showModal();

  }

  logInUser: any = '';
  cartproducts:any=[];
  status:any;

  url: any = environment.getCartProducts;
  totalPrice: any = '0';
  shipping: any = '50';
  lastprice: any;



  ngOnInit() {
    const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }
    //---> calling the service to find the user cart products
    this.data.searchingCart(this.logInUser).subscribe((data) => {
      this.cartproducts = data;
      this.status= this.cartproducts.length;
      //----> to add the price of products
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

