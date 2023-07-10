import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { CartpageService } from '../cartpage.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-profile_prescription',
  templateUrl: './profile_prescription.component.html',
  styleUrls: ['./profile_prescription.component.css']
})
export class Profile_prescriptionComponent implements OnInit {

  constructor(private data:ProductdataService) {
    this.data.ordergetdate().subscribe((data)=>{
      this.orderDates=data;
    })
  }


  logInUser: any = '';
  cartproducts: any = '';
  orderPrice:any;
  orderpaymentStatus:any=false;

deliveryDate:any;
orderDates:any;
currentDate= new Date().getDate();
final:any;
  ngOnInit() {
    const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }

    this.data.searchingCart(this.logInUser).subscribe((data) => {
      this.cartproducts = data;
      this.data.paymentTotal=this.orderPrice;
    });

    this.orderpaymentStatus=this.data.orderPayment;

    // this.orderDates=new Date();
    this.deliveryDate= new Date();
    this.deliveryDate.setDate(this.orderDates.getDate() + 3);


  }


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
