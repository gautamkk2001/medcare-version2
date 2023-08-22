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

    const tday = new Date("Aug 30, 2023");
   const twoDaysLater = new Date(tday);
twoDaysLater.setDate(tday.getDate() + 2);

console.log(`Today's date: ${tday.toDateString()}`);
console.log(`Date two days later: ${twoDaysLater.toDateString()}`);

  }

  logInUser: any = '';
  orderDates:any;
  currentDate= new Date();


menu:any=[];
date:any=[];
specificOrder:any;
history:any;
len:any;

// testing dates
 test(delivery:any){
 const dateDb = new Date(delivery);
 var status:Boolean=false;
 var date = dateDb.getDate();
 var month = dateDb.getMonth();
 var currentDay = this.currentDate.getDate();
 var currentMonth = this.currentDate.getMonth()+1;
 if(date >= currentDay && month == currentMonth){
  console.log(date);
  console.log(month);
  console.log(currentDay);
  console.log(currentMonth);
  return true;
 }
 else{
  return false;
 }
 }

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

showOrder:boolean=true;
showInvoice:boolean=false;
printing:boolean=false;

  proId:any;
  orderIdTotal:any=0;
  clicking(item:any) {
    this.showOrder=false;
    this.showInvoice=true;
    this.data.searchingOrderId(item).subscribe((data) => {
      this.proId=data;
      this.proId.forEach((item:any)=>{
          this.orderIdTotal = this.orderIdTotal + parseInt(item.price);
      })
  });
    // this.generate(item);
  }


  printForm(){
    window.print();
  }
  back(){
    this.printing=false;
    this.showInvoice=false;
    this.showOrder=true;
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
