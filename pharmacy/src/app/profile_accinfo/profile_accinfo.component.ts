import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile_accinfo',
  templateUrl: './profile_accinfo.component.html',
  styleUrls: ['./profile_accinfo.component.css']
})
export class Profile_accinfoComponent implements OnInit {


  updateUser:any=[];
   userValues:any=[];
  logInUser:any;

  constructor(private data:ProductdataService) {
    this.data.registereduser().subscribe((value)=>{
     this.updateUser=value;

    });

    const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }


  }


  ngOnInit() {
    // const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    // if (sessionUser) {
    //   this.logInUser = JSON.parse(sessionUser);
    // }
  }

}
