import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cpasswordvalid } from '../cpasswordvalid';
import { ProductdataService } from '../productdata.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import { environment } from 'src/environments/environment';
import { NGXLogger } from 'ngx-logger';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  environment = environment;
  loginstatus=false;
  usersdata:any="";
  adminData:any="";

  // search:any ="Himalaya Anti Wrinkle";
  // redir:any="";

  constructor(  private fb:FormBuilder,private user:ProductdataService,private route:Router, private http:HttpClient, private log:LoginService, private logger: NGXLogger)
   {
    this.user.registereduser().subscribe( (user) =>{
      this.usersdata=user;
  } )
    this.user.adminUser().subscribe( (user)=>{
     this.adminData=user;
    })
    this.loginstatus=Boolean(sessionStorage.getItem('userName'))

    // alert(this.search);
    // this.user.searchingBar(this.search).subscribe(value=>{
    // this.redir=value;
    // });

   }

  //  searchHere(){
  //   alert(this.search);
  //   this.user.searchingBar(this.search).subscribe(value=>{
  //   this.redir=value;

  //   });
  //   this.route.navigate([`/${this.redir}`]);

  //  }

   logout(){
    this.loginstatus=false;
    sessionStorage.clear();
    // --->to store it in logData
    const logData = {
      message : `User Logout : ${sessionStorage.getItem('userName')}`,
      level : 'INFO',
      timestamp : new Date().toLocaleString()
    }
    this.logger.error(logData.message);
    this.http.post(environment.logUrl, logData).subscribe({
    });
    this.route.navigate(['home']);
  }

  ngOnInit() {
  //  this.logInUser=this.log.islogged
  }
}
