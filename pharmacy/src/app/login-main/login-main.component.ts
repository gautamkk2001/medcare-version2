import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:LoginService, private route:ActivatedRoute, private router:Router, private http:HttpClient, private user:ProductdataService) { }

  // login form validation
  loginForm=this.fb.group({
    userId:[,[Validators.required] ],
    password:[,[Validators.required]]
  })

  // login form validation
  loginMail:any="";
  loginPassword:any="";
  usersdata:any="";
  adminData:any="";
  isLoggedIn:boolean=false;
  displayname:any="";


   errors:any=false;

   login(){
    this.admins();
    this.users();
    if(this.errors){
     alert("Invalid");
      this.refresh();
    }

   }
   users(){
     this.http.get<any>("http://localhost:3000/registeredUser").subscribe(data=>{
       const users=data.find((b:any)=>{
           return b.email===this.loginForm.value.userId && b.cpassword1===this.loginForm.value.password
         });

         if(users){
           alert("Login Successfully");

           this.isLoggedIn=true;
          //  this.service.islogged=true;
           // this.loginForm.reset();
             this.user.loggedInUser = users;
            //  sessionStorage.setItem('loggedInUser', JSON.stringify(users));
            //  sessionStorage.setItem('userMail', users.email);
             sessionStorage.setItem('userName', JSON.stringify(users));
            //  sessionStorage.setItem('userId', users.id);
             this.router.navigate(['product'])
             // this.get();
             const loginpanel:any= document.querySelector(".Loginmodal");
             loginpanel.close();
         }
         else{
           this.errors=true
         }
       })

   }
   admins(){
     this.http.get<any>("http://localhost:3000/adminData").subscribe(res=>{
       const admins=res.find((a:any)=>{
         return a.email===this.loginForm.value.userId && a.password1===this.loginForm.value.password
       });
       if(admins){
         alert("Login Successfully");
           this.user.loggedInUser = admins;
           sessionStorage.setItem('loggedInUser', JSON.stringify(admins));
           this.router.navigate(['admin' ])
       }
       else{
         this.errors=true
       }
     })
   }

   refresh():void{
       window.location.reload();
   }
   logout(){
      this.isLoggedIn=false;
      window.location.reload();
   }


  ngOnInit() {
    // to retrieve the URL to navigate when login is completed

  }

}
