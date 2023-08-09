import { Component } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-queries',
  templateUrl: './admin-queries.component.html',
  styleUrls: ['./admin-queries.component.css']
})
export class AdminQueriesComponent {

environment = environment;
prouser:any=' ';
products:any=' ';
userLen:any;
productLen:any;
loginstatus:any;

reviews:any;

  constructor(private data:ProductdataService, private fb:FormBuilder, private router:Router, private service:UserService) {
    this.data.registereduser().subscribe((data)=>{
      this.prouser=data;
      this.userLen=this.prouser.length;
    });
    this.data.getproducts().subscribe((data)=>{
      this.products=data;
      this.productLen=this.products.length;
    });
    this.service.getContactInformation().subscribe((data)=>{
     this.reviews=data;
    })
   }

   logInUser:any;

   logout(){
     this.loginstatus=false;
     sessionStorage.clear();
     this.router.navigate(['home']);
   }

   ngOnInIt(){
    const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }
   }
}
