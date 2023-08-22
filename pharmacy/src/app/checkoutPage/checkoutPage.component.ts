import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ProductdataService } from '../productdata.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkoutPage',
  templateUrl: './checkoutPage.component.html',
  styleUrls: ['./checkoutPage.component.css']
})
export class CheckoutPageComponent implements OnInit {

  // payment:any;
  // formShipping:any;
  cardNumber="";
  expDate="";
  cardholderName="";
  cvv="";
  environment=environment;

  shipping:boolean =true;
  paymentSection:boolean=false;
  paymentSuccess:boolean =false;

  logInUser:any="";

  cartValues:any;
  paymentAmount:any;



  constructor(private formBuilder: FormBuilder, private data:ProductdataService, private route:Router, private http:HttpClient) {

    const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }

    this.data.searchingCart(this.logInUser).subscribe((value)=>{
      this.cartValues=value;
      })

    this.paymentAmount=this.data.paymentTotal;
   }



   formShipping =this.formBuilder.group({
    fullname:[,Validators.required],
    address:[,Validators.required],
    phone:[,Validators.required],
    city:[,Validators.required],
    state:[,Validators.required],
    pincode:[,Validators.required]
  });

  payment = this.formBuilder.group({
    accountNumber: [, [Validators.required, Validators.pattern("[0-9]{0,16}"), Validators.minLength(16), Validators.maxLength(16)]],
    cardHolder: [, Validators.required],
    expiry: [, Validators.required],
    cvv: [, [Validators.required, Validators.pattern("[0-9]{0,3}"), Validators.minLength(3), Validators.maxLength(3)]]
  });

   orderDate = new Date();
ordered= this.orderDate.getDate()

value={
  'date':this.orderDate.toISOString().split('T')[0],
  'tomorrow':this.orderDate.getDate()+2

}

   toggleCard(){

    if(!this.formShipping.valid){
      alert("Enter all fields")
    }
    else if((this.formShipping.valid)){
      this.shipping= false;
      this.paymentSection=true;
      this.paymentSuccess=false;
      this.ngOnInit();
    }
   }

   toggleStatus(){

    if(!this.payment.valid){
      alert("Enter all fields")
    }
    else if((this.payment.valid)){
    this.shipping= false;
    this.paymentSection=false;
    this.paymentSuccess=true;


    let orderDetails = {
      Username: this.logInUser.username,
      Email_Id: this.logInUser.email,
      Mobile_No: this.logInUser.mobile,
      Total_Amount: this.paymentAmount,
      Menu_Details: this.cartValues,
      OrderDate: this.value.date
    }


    const tday = new Date();
   const twoDaysLater = new Date(tday);
   twoDaysLater.setDate(tday.getDate() + 2);
    const orderId = Math.floor(Math.random()*900000)+100000;

    this.cartValues.forEach((item:any)=>{
      var body={
        "price" :item.originalAmount,
        "product"  :item.description,
        "email"  :item.email,
        "date":this.orderDate.toISOString().split('T')[0],
        "orderDate":this.orderDate.getDate(),
        "deliveryDate": twoDaysLater.getDate(),
        "deliveryMonth": twoDaysLater.getMonth()+1,
        "orderId": orderId,
        "delivered":twoDaysLater.getDate()+'-'+ (twoDaysLater.getMonth()+1)+'-'+this.orderDate.getFullYear(),
        "checkDate":this.orderDate.getFullYear()+'-'+ (twoDaysLater.getMonth()+1)+'-'+twoDaysLater.getDate()
        }
       this.data.postOrderedProducts(body).subscribe((value)=>{
        });
    });

    //  ----> To reduce the stock quantity

    this.cartValues.forEach((item:any)=>{
      var stock:number = item.stock-1;
      alert(item.id);
      var body={
        "stock":stock
      }
      this.http.patch(environment.getProducts+'/'+item.originalId, body).subscribe({

      })
    });

    // ---> To delete the cart items after payment
    this.cartValues.forEach((item:any)=>{
      this.data.deleteCartItem(item.id);
    });

    // this.route.navigate(['/home']);
    this.data.orderConfirmed(orderDetails).subscribe((res)=>{
      if(res){
          this.route.navigate(['/home']);
      }
    })

     this.data.orderPlaced(this.value).subscribe((data)=>{

     })
     this.ngOnInit();
    }
 }


  ngOnInit() {
  }

}
