import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // ************************************************************* Fetching all product *************************************

  prodata: any = '';
  featureddata:any="";
  drugdata: any = '';
  modal:any;

  // loop varable for offer popup

  loop:boolean;

// filtering
filtercategory:any;

  constructor(private data: ProductdataService, private http: HttpClient) {
    this.data.getfeatured().subscribe((data) =>(this.featureddata = data));
    this.data.getdrugsname().subscribe((data) => (this.drugdata = data));
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
    this.http.get<any>("http://localhost:3000/"+'/'+this.value).subscribe(data=>{
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

    const offer_modal:any = document.querySelector(".offer-popup");
    offer_modal.showModal();

    this.data.getproducts().subscribe((data) => {this.prodata = data
     this.filtercategory=data;
    });

  }

// flash offer popup
 countdown = new Date("Jul 12, 2023 17:28:00").getTime();
 demo:any;
 x= setInterval( () =>{
  var now = new Date().getTime();
  var distance = this.countdown - now;
  var days = Math.floor(distance/(1000*60*60*24));
  var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  var seconds = Math.floor((distance % (1000*60)) / 1000);
  this.demo = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if(distance<0){
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


 filter(fil_category:String){
  this.filtercategory = this.prodata.filter((a:any)=>{
    if(a.category == fil_category || fil_category == '')
    {
     return a;
    }
  });
 }

//  bmi
 height:any;
 weight:any;
 heightM:any;
 result:any;
 bmi(){
  this.heightM=this.height/100;
  this.result=Math.floor(this.weight/(this.heightM*this.heightM));
 }

 imgCollection: Array<object> =[
  {
    image: '../../assets/images/slide-1.png',
    thumbImage: '../../assets/images/slide-1.png',


  },

  {
    image:  '../../assets/images/slide-3.png',
    thumbImage:  '../../assets/images/slide-3.png',

  },
  {
    image: '../../assets/images/slide-2.png',
    thumbImage:  '../../assets/images/slide-2.png',

  },
  {
    image: '../../assets/images/slide-5.png',
    thumbImage:  '../../assets/images/slide-5.png',
  },
  {
    image: '../../assets/images/slide-7.png',
    thumbImage:  '../../assets/images/slide-7.png',
  },
  {
    image: '../../assets/images/slide-8.jpg',
    thumbImage:  '../../assets/images/slide-8.jpg',
  },
  {
    image: '../../assets/images/slide-10.png',
    thumbImage:  '../../assets/images/slide-10.png',
  },

  {
    image:  '../../assets/images/slide-4.png',
    thumbImage:  '../../assets/images/slider-6.png',

  }

];

}
