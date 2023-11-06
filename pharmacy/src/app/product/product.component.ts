import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // ************************************************************* Fetching all product *************************************

 environment=environment;
  prodata: any = '';
  featureddata:any="";
  drugdata: any = '';
  modal:any;

  // loop varable for offer popup
  loop:boolean;

// filtering
filtercategory:any;

// offer from db
offerDb:any;
calOfferDate:any;


  constructor(private data: ProductdataService, private http: HttpClient) {
    this.data.getfeatured().subscribe((data) =>(this.featureddata = data));
    this.data.getproducts().subscribe((data) =>{
      this.filtercategory=data
      this.prodata = data
    });

    // this.data.getdrugsname().subscribe((data) => (this.drugdata = data));
    this.data.salePrice=true;
    this.loop=this.data.offer;

  }

  pro_title: any = '';
  pro_description: any = '';
  pro_amount: any = '';
  value:any=this.data.strotedData;
  finalData:any=""
  logInUser:any=""



  ngOnInit() {


    this.http.get<any>(environment.url+'/'+this.value).subscribe(data=>{
    this.finalData=data;
    });

    const sessionUser = sessionStorage.getItem('loggedInUser'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    } else if (this.data.loggedInUser !== null) {
      this.logInUser = this.data.loggedInUser;
    } else {
      alert('You are Loggedout. Login to continue');
    }
    this.data.getproducts().subscribe((data) => {this.prodata = data
     this.filtercategory=data;
    });



    // if(this.data.loginBoolean != true){
    //   const offer_modal:any = document.querySelector(".offer-popup");
    //   offer_modal.showModal();
    //   }

   this.data.getOfferDetails().subscribe((offer)=>(this.offerDb=offer));

  this.calOfferDate = new Date(this.offerDb.start).getDate();
   alert(this.calOfferDate);
  // calculateDate2 = new Date("2023-08-18").getDate();


  }

// flash offer popup



calculateDate = new Date("2023-08-16").getDate();
calculateMonth = new Date("2023-08-15").getMonth();

calculateDate2 = new Date("2023-08-18").getDate();
today = new Date().getDate();
todayMonth = new Date().getMonth();


// 14 15
// date(){
// if(this.calculateDate==this.today && this.calculateMonth==this.todayMonth){
//  alert("offer work");
// }
// }

 countdown = new Date("Jul 12, 2023 17:28:00").getTime();

 demo:any;
 x= setInterval( () =>{
  var now = new Date().getTime();
  var offerTime = this.countdown - now;
  var days = Math.floor(offerTime/(1000*60*60*24));
  var hours = Math.floor((offerTime % (1000*60*60*24)) / (1000*60*60));
  var minutes = Math.floor((offerTime % (1000*60*60)) / (1000*60));
  var seconds = Math.floor((offerTime % (1000*60)) / 1000);
  this.demo = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if(offerTime<0){
    clearInterval(this.x);
    this.demo = "Expired";
    this.loop=false;
    this.data.offer=false;
  }
 },1000)

 offer(){
  const offer_modal:any = document.querySelector(".offer-popup");
  offer_modal.showModal();
 }

 closeOffer(){
  const offer_modal:any = document.querySelector(".offer-popup");
  offer_modal.close();
 }

// ---> Filteration based on Category
 filter(fil_category:String){
  this.filtercategory = this.prodata.filter((a:any)=>{
    if(a.category == fil_category || fil_category == '')
    {
     return a;
    }
  });
 }

//------>  bmi
 height:any;
 weight:any;
 heightM:any;
 result:number =0;
 bmi(){
  this.heightM=this.height/100;
  this.result=Math.floor(this.weight/(this.heightM*this.heightM));
 }


 imgCollection: Array<object> =[
  {
    thumbImage: environment.imageProductSlider1,
  },
  {
    thumbImage: environment.imageProductSlider2,
  },
  {
    thumbImage:  environment.imageProductSlider3,
  },
  {
    thumbImage:  environment.imageProductSlider4,
  },
  {
    thumbImage:  environment.imageProductSlider5,
    
  },
  {
    thumbImage: environment.imageProductSlider6,
  },
  {
    thumbImage:  environment.imageProductSlider7,
  },
  {
    thumbImage:  environment.imageProductSlider8,
  }
];

}
