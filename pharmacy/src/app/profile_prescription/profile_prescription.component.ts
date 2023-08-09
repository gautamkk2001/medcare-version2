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

  constructor(private data:ProductdataService) {
    this.data.ordergetdate().subscribe((data)=>{
      this.orderDates=data;
    })

  }

  logInUser: any = '';
  orderDates:any;
  currentDate= new Date().getDate();

menu:any=[];
date:any=[];
specificOrder:any;
history:any;
len:any;

  ngOnInit() {

    // ----> Session storage
    const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }

    // ----> Function for Upcoming orders
    this.data.searchingOrders(this.logInUser).subscribe((data) => {
        this.specificOrder=data;
    });

  //  --------> Function for Previous orders
   this.data.searchingOrderHistory(this.logInUser).subscribe((dt)=>{
    this.history=dt;
    this.len =  this.history.length;
      var n=0;
        for (let index = 0; index < this.len; index++) {
          var menu_length=this.history[index].Menu_Details.length;
          for (let ind = 0; ind < menu_length; ind++){
            this.menu[n]= this.history[index].Menu_Details[ind];
            this.date[n]=this.history[index].OrderDate;
            n+=1;
        }
      }
        console.log(this.menu);
   })
  }



details(){
  const detailBox:any = document.querySelector(".viewDetails");
  detailBox.showModal();
}


cancel()
{
  var result=confirm("Are you sure want to Cancel");
  if(result){
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
