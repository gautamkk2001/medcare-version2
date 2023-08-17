import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-profile_address',
  templateUrl: './profileNotification.component.html',
  styleUrls: ['./profile_address.component.css']
})
export class Profile_addressComponent implements OnInit {

  logInUser:any="";
  savedAddress:any="";

  specificOrder:any;

  offers:any="";

  constructor(private fb:FormBuilder, private user:ProductdataService) {
    const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }

    this.user.getUserAddress().subscribe((value)=>{
     this.savedAddress=value;
    })

   this.user.getOfferDetails().subscribe((value)=>(this.offers=value))

  }


  formaddress=this.fb.group({
    fullname1:[,Validators.required],
    address1:[,Validators.required],
    mobile1:[,Validators.required],
    district1:[,Validators.required],
    state1:[,Validators.required],
    pincode1:[,Validators.required],
    gender:[,Validators.required],
  }
  );

  ngOnInit() {
  }
  submitForm(){
    if(!this.formaddress.valid){
      alert("Enter all fields")
    }
   else if((this.formaddress.valid)){
     this.user.addUserAddress( this.formaddress.value).subscribe(data=>{
       alert("Address submitted");

     })
    }
}

}
