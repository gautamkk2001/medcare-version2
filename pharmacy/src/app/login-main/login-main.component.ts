import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductdataService } from '../productdata.service';
import { environment } from 'src/environments/environment';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {

environment=environment;
  constructor(private fb:FormBuilder, private service:LoginService, private route:ActivatedRoute, private router:Router, private http:HttpClient, private user:ProductdataService, private logger: NGXLogger) { }

  // login form validation
  loginForm=this.fb.group({
    userId:[,[Validators.required] ],
    password:[,[Validators.required]]
  })


// variable used in login()
  isLoggedIn:boolean=false;
  errors:any=false;


  // common login Function
   login(){
    this.admins();
    this.users();

    // --->If any error in users() & admins() if clause activated
    if(this.errors){
     alert("Invalid");

    // --->to store it in logData
     const logData = {
      message : "Invalid Login Attempt",
      level : 'ERROR',
      timestamp : new Date().toLocaleString()
    }
    this.logger.error(logData.message);
    this.http.post(environment.logUrl, logData).subscribe({

    });
    this.refresh();
    }
   }


   users(){
     this.http.get<any>(environment.getUser).subscribe(data=>{
       const users=data.find((b:any)=>{
           return b.email===this.loginForm.value.userId && b.cpassword1===this.loginForm.value.password
         });

         if(users){
           alert("Login Successfully");

          // --->to store it in logData
          const logData = {
            message : `User Logged In : ${users.email}`,
            level : 'INFO',
            timestamp : new Date().toLocaleString()
          }
          this.logger.info(logData.message);
          this.http.post(environment.logUrl, logData).subscribe({
          });
           this.isLoggedIn=true;
           this.service.islogged=true;
           this.user.loggedInUser = users;
           this.user.loginBoolean = true;
          //  ---> Storing the user details in SessionStorage
           sessionStorage.setItem('userName', JSON.stringify(users));
           this.router.navigate(['/product'])

         }
         else{
           this.errors=true
         }
       })
   }

   admins(){
     this.http.get<any>(environment.getAdminUser).subscribe(res=>{
       const admins=res.find((a:any)=>{
         return a.email===this.loginForm.value.userId && a.password1===this.loginForm.value.password
       });
       if(admins){
         alert("Login Successfully");

         // --->to store it in logData
         const logData = {
          message : `User Logged In : ${admins.email}`,
          level : 'INFO',
          timestamp : new Date().toLocaleString()
        }
        this.logger.info(logData.message);
        this.http.post(environment.logUrl, logData).subscribe({
        });

         this.router.navigate(['/admin' ])
           this.user.loggedInUser = admins;
           //  ---> Storing the user details in SessionStorage
           sessionStorage.setItem('loggedInUser', JSON.stringify(admins));

       }
       else{
         this.errors=true
       }
     })
   }

   refresh():void{
       window.location.reload();
   }

   show: boolean = false;

  visiblePassword() {
    this.show = !this.show;
  }
  
  ngOnInit() {


  }

}
