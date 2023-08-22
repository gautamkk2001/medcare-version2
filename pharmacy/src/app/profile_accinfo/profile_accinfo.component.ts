import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { JsonPipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { cpasswordvalid } from '../cpasswordvalid';

@Component({
  selector: 'app-profile_accinfo',
  templateUrl: './profile_accinfo.component.html',
  styleUrls: ['./profile_accinfo.component.css']
})
export class Profile_accinfoComponent implements OnInit {


  updateUser:any=[];
   userValues:any=[];
  logInUser:any;
  showEdit:boolean=false;
  showDetails:boolean=true;
  environment=environment;

  constructor(private data:ProductdataService, private fb:FormBuilder, private http:HttpClient) {
    this.data.registereduser().subscribe((value)=>{
     this.updateUser=value;
    });
  }


  formRegister=this.fb.group({
    username:[,Validators.required],
    email:[,Validators.required],
    mobile:[,Validators.required],
    date:[,Validators.required],
    password1:[,Validators.required],
    gender:[,Validators.required],
  });

submitEdit(){

 this.http.patch<any>(environment.editProfile+this.logInUser.id, this.formRegister.value).subscribe(()=>{
  alert("Updated Successfully");
 })
 this.showDetails=true;
 this.showEdit=false;
}

toggleEdit(){
  this.showDetails=false;
  this.showEdit=true;
  this.ngOnInit();
}

return(){
  this.showDetails=true;
  this.showEdit=false;
}

show: boolean = false;
visiblePassword() {
  this.show = !this.show;
}

  ngOnInit() {
    const session = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    if (session) {
      this.logInUser = JSON.parse(session);
    }
    this.formRegister.controls['username'].setValue(this.logInUser.username)
    this.formRegister.controls['mobile'].setValue(this.logInUser.mobile)
    this.formRegister.controls['email'].setValue(this.logInUser.email)
    this.formRegister.controls['date'].setValue(this.logInUser.date)
    this.formRegister.controls['password1'].setValue(this.logInUser.password1)
  }



}
