import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { UserService } from '../user.service';
import { ProductdataService } from '../productdata.service';
import { CartpageService } from '../cartpage.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  environment = environment;
  expiryDate: string|undefined;

  paymentAmount:any;
  data: any = "";
  payment: FormGroup;
  paymentStatus: string = "Payment Done";

  logInUser:any="";
  cartValues:any;
  products:any=' ';

  constructor(private cartService: UserService, private http: HttpClient, private formBuilder: FormBuilder, private pro:ProductdataService, private route:Router) {

    const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }

    this.payment = this.formBuilder.group({
      accountNumber: [, [Validators.required, Validators.pattern("[0-9]{0,16}"), Validators.minLength(16), Validators.maxLength(16)]],
      cardType: [, Validators.required],
      expiry: [, Validators.required],
      cvv: [, [Validators.required, Validators.pattern("[0-9]{0,16}"), Validators.minLength(3), Validators.maxLength(3)]]
    });

   this.paymentAmount=this.pro.paymentTotal;
   this.pro.searchingCart(this.logInUser).subscribe((value)=>{
   this.cartValues=value;
   })

   this.pro.getproducts().subscribe((value)=>{
    this.products=value;
   })
  }

  ngOnInit() {
  }

  show(){
    let paymentModal: any = document.querySelector(".paymentModal");
    paymentModal.showModal();
  }

  cardNumber="";
  expDate="";
  cvv="";

  orderDate = new Date();
ordered= this.orderDate.getDate()

value={
  'date':this.orderDate.toISOString().split('T')[0],
  'tomorrow':this.orderDate.getDate()+2

}

  update(){


    let orderDetails = {
      Username: this.logInUser.username,
      Email_Id: this.logInUser.email,
      Mobile_No: this.logInUser.mobile,
      Total_Amount: this.paymentAmount,
      Menu_Details: this.cartValues,
      OrderDate: this.value.date
    }

  if(this.payment.valid){

    const tday = new Date();
   const twoDaysLater = new Date(tday);
   twoDaysLater.setDate(tday.getDate() + 2);
   alert(twoDaysLater);
    const orderId = Math.floor(Math.random()*900000)+100000;

    this.cartValues.forEach((item:any)=>{
      var body={
        "price" :item.originalAmount,
        "product"  :item.description,
        "email"  :item.email,
        "date":this.orderDate.toISOString().split('T')[0],
        "orderDate":this.orderDate.getDate(),
        "deliveryDate": twoDaysLater.getDate(),
        "deliveryMonth": twoDaysLater.getUTCMonth(),
        "orderId": orderId,
        "delivered":twoDaysLater.getDate()+'-'+ twoDaysLater.getMonth()+'-'+this.orderDate.getFullYear()
        }
       this.pro.postOrderedProducts(body).subscribe((value)=>{
        });
    });

    // ---> To delete the cart items after payment
    this.cartValues.forEach((item:any)=>{
      this.pro.deleteCartItem(item.id);
    });

    // this.route.navigate(['/home']);
    this.pro.orderConfirmed(orderDetails).subscribe((res)=>{
      if(res){
          this.route.navigate(['/home']);
      }
    })

     this.pro.orderPlaced(this.value).subscribe((data)=>{

     })
  }
  else{
    alert("Fill all the fields")
  }
  }
}
