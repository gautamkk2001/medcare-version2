import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { CartpageService } from '../cartpage.service';
import { getLocaleDateFormat } from '@angular/common';
import { observable } from 'rxjs';

@Component({
  selector: 'app-profile_prescription',
  templateUrl: './profile_prescription.component.html',
  styleUrls: ['./profile_prescription.component.css']
})
export class Profile_prescriptionComponent implements OnInit {

orderDetails:any;
work:any;
productsMy:any;
  constructor(private data:ProductdataService) {
    this.data.ordergetdate().subscribe((data)=>{
      this.orderDates=data;
    })

    this.data.getOrderDetails().subscribe((values)=>{
     this.orderDetails=values;
    })

   this.data.getOrderedProducts(1).subscribe((values)=>{
    this.work = values;
   })

   this.data.getMyOrderedProducts().subscribe((all)=>{
    this.productsMy=all;
   })
  }

  loop:any;
  logInUser: any = '';
  cartproducts: any = '';
  orderPrice:any;
  orderpaymentStatus:any=false;

deliveryDate:any;
orderDates:any;
currentDate= new Date().getDate();
final:any;

menu:any=[];
date:any=[];
specificOrder:any;
history:any;
historyDate:any=[];

  ngOnInit() {
    const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }

    this.data.searchingCart(this.logInUser).subscribe((data) => {
      this.cartproducts = data;
      this.data.paymentTotal=this.orderPrice;
    });

    this.data.searchingOrders(this.logInUser).subscribe((data) => {
        this.specificOrder=data;

    });


   this.data.searchingOrderHistory(this.logInUser).subscribe((dt)=>{
    this.history=dt;
    this.len =  this.history.length;
      var n=0;
        for (let index = 0; index < this.len; index++) {
          var menu_length=this.history[index].Menu_Details.length;
          // this.historyDate[index]=this.history[index].OrderDate;
          for (let ind = 0; ind < menu_length; ind++){
            this.menu[n]= this.history[index].Menu_Details[ind];
            this.date[n]=this.history[index].OrderDate;
            n+=1;
        }
      }
        console.log(this.menu);
        console.log(this.historyDate)
   })


    this.orderpaymentStatus=this.data.orderPayment;

    // this.orderDates=new Date();
    this.deliveryDate= new Date();
    this.deliveryDate.setDate(this.orderDates.getDate() + 3);



  }
len:any;

rxUpload(){
  alert("uploaded");
}


details(){
  const detailBox:any = document.querySelector(".viewDetails");
  detailBox.showModal();
}


orderStatus:any="Arriving Jun 28,2023";
cancel()
{
  var result=confirm("Are you sure want to Cancel");

  if(result){
   this.orderStatus="Cancelled";
   const refund:any= document.querySelector(".refund");
   refund.showModal();
  }
}

closeModal(){
  const detailBox:any = document.querySelector(".viewDetails");
  detailBox.close();
  const refund:any= document.querySelector(".refund");
  refund.close();
}


}
