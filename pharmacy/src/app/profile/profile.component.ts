import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  address_popup(){
    alert("its working");
    const addressBox:any = document.getElementsByClassName(".addres");
    addressBox.showModal();

  }
}
