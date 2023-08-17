import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { cpasswordvalid } from '../cpasswordvalid';

@Component({
  selector: 'app-adminProfile',
  templateUrl: './adminProfile.component.html',
  styleUrls: ['./adminProfile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private fb:FormBuilder, private http:HttpClient) { }

  logInUser:any="";
  environment = environment;
  profile:boolean=true;
  edit:boolean=false;

        // edit profile

        toggleEdit(){

          this.profile=false;
          this.edit=true;
          this.ngOnInit();
        }

  ngOnInit() {
    const sessionUser = sessionStorage.getItem('loggedInUser'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }
  }


// edit profile
      formEditProfile=this.fb.group({
        fullname1:[,Validators.required],
        email1:[,Validators.required],
        mobile1:[,Validators.required],
        date:[,Validators.required],
        password1:[,Validators.required],
        cpassword1:[,Validators.required],
        gender:[,Validators.required],
      },
      {validator : cpasswordvalid
             ('password1','cpassword1')
       }
      );

  submitForm(){

    var body={
      "username": this.formEditProfile.value.fullname1,
      "email": this.formEditProfile.value.email1,
      "mobile": this.formEditProfile.value.mobile1,
      "date": this.formEditProfile.value.date,
      "password1": this.formEditProfile.value.password1,
      "cpassword1": this.formEditProfile.value.cpassword1,
      "gender": this.formEditProfile.value.gender

    }

    if(!this.formEditProfile.valid){
       alert("Enter all fields")
     }
    else if((this.formEditProfile.valid)){
      this.http.patch<any>(environment.getAdminUser+'/'+this.logInUser.username, body).subscribe(()=>{
        alert("Profile Edited Successfully");
    })
  }
  }
}
