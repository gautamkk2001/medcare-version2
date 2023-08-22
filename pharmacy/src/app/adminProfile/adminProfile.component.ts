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
        toggleProfile(){
          this.profile=true;
          this.edit=false;
          this.ngOnInit();
        }

// edit profile
      formEditProfile=this.fb.group({
        username:[,Validators.required],
        email:[,Validators.required],
        mobile:[,Validators.required],
        date:[,Validators.required],
        password1:[,Validators.required],
        cpassword1:[,Validators.required],
        gender:[,Validators.required],
      }
      );

  submitForm(){

      this.http.patch<any>(environment.editAdminProfile+this.logInUser.id, this.formEditProfile.value).subscribe(()=>{
        alert("Profile Edited Successfully");
    })

  }

  ngOnInit() {
    const sessionUser = sessionStorage.getItem('loggedInUser'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }

    this.formEditProfile.controls['username'].setValue(this.logInUser.username)
    this.formEditProfile.controls['mobile'].setValue(this.logInUser.mobile)
    this.formEditProfile.controls['email'].setValue(this.logInUser.email)
    this.formEditProfile.controls['date'].setValue(this.logInUser.date)
    this.formEditProfile.controls['password1'].setValue(this.logInUser.password1)
  }
}
