import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  environment = environment;

  email:any="";
  constructor() { }

  send(){
    alert("Link Sent to the Email");
  }
  ngOnInit() {
  }

}
