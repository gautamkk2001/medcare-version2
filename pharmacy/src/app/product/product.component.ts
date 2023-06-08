import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { HttpClient } from '@angular/common/http';

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
  constructor(private data: ProductdataService, private http: HttpClient) {
    this.data.getproducts().subscribe((data) => (this.prodata = data));
    this.data.getfeatured().subscribe((data) =>(this.featureddata = data));
    this.data.getdrugsname().subscribe((data) => (this.drugdata = data));
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
  }


}
