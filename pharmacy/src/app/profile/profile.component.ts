import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  logInUser:any=""
  dat:any=sessionStorage.getItem('userId');
  constructor(private data:ProductdataService) { }

  ngOnInit() {


  // session storage
  const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
  if (sessionUser) {
    this.logInUser = JSON.parse(sessionUser);
  } else if (this.data.loggedInUser !== null) {
    this.logInUser = this.data.loggedInUser;
  } else {
    alert('You are Loggedout. Login to continue');
  }
 }

}
