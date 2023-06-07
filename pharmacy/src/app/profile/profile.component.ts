import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  logInUser:any=""
  constructor(private data:ProductdataService) { }

  ngOnInit() {

  // address_popup(){
  //   alert("its working");
  //   const addressBox:any = document.getElementsByClassName(".addres");
  //   addressBox.showModal();
  // }

  // session storage
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
