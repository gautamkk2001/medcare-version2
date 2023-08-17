import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cpasswordvalid } from '../cpasswordvalid';
import { UserService } from '../user.service';
import { ProductdataService } from '../productdata.service';
import { environment } from 'src/environments/environment';
import { NGXLogger } from 'ngx-logger';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DeactivateComponent } from '../deactive.guard';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, DeactivateComponent {

  environment = environment;
  constructor(
    private logger : NGXLogger, private fb:FormBuilder,private user:UserService,private route:Router,private data:ProductdataService,  private http : HttpClient
  ) { }
  formRegister=this.fb.group({
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
    if(!this.formRegister.valid){
       alert("Enter all fields")
     }


    else if((this.formRegister.valid)){

      this.http.get<any>(environment.getUser).subscribe(data=>{
        const users=data.find((b:any)=>{
            return b.email===this.formRegister.value.email1
          });

        if(users){
         alert("Already Registered");
        }
        else{
         this.user.addUserInformation(this.formRegister.value).subscribe(data=>{
        alert("Form submitted");

        // ----> Store the registration details in log data
        const logData = {
          message : `Registered Successfully : ${this.formRegister.value.email1}`,
          level : 'INFO',
          timestamp : new Date().toLocaleString()
        }
        this.logger.error(logData.message);
        this.http.post(environment.logUrl, logData).subscribe({
        });
      });
      this.route.navigate(['/main']);
     }
    });
   }
}

  ngOnInit() {
  }
  canExit(){
    if(this.formRegister.invalid)
      {
      return confirm("Your content was not saved");
    }
    else{
      return true;
    }
  }

}
