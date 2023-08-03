import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cpasswordvalid } from '../cpasswordvalid';
import { ProductdataService } from '../productdata.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginstatus=false;
  usersdata:any="";
  adminData:any="";

  constructor(  private fb:FormBuilder,private user:ProductdataService,private route:Router, private http:HttpClient, private log:LoginService)
   {
    this.user.registereduser().subscribe( (user) =>{
      this.usersdata=user;
  } )
    this.user.adminUser().subscribe( (user)=>{
     this.adminData=user;
    })
    this.loginstatus=Boolean(sessionStorage.getItem('userName'))
   }

   logout(){
    this.loginstatus=false;
    sessionStorage.clear();

    this.route.navigate(['home']);
  }
  
  ngOnInit() {
  //  this.logInUser=this.log.islogged
  }
}
