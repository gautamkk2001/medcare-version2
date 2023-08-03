import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductdataService } from '../productdata.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  retUrl:any="";
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
     this.http.get<any>(environment.getUser).subscribe(data=>{
       const users=data.find((b:any)=>{
           return b.email===this.loginForm.value.userId && b.cpassword1===this.loginForm.value.password
         });

         if(users){
           alert("Login Successfully");

           this.isLoggedIn=true;
           this.service.islogged=true;
           // this.loginForm.reset();
             this.user.loggedInUser = users;
             sessionStorage.setItem('loggedInUser', JSON.stringify(users));
             this.router.navigate(['product'])
             // this.get();
             const loginpanel:any= document.querySelector(".Loginmodal");
             loginpanel.close();
             let box=document.getElementById('kk');
             box?.click()
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

  // called when form is Submitted
  validate(){
    this.http.get<any>(environment.getUser).subscribe(data=>{
      const users=data.find((b:any)=>{
          return b.email===this.loginForm.value.userId && b.cpassword1===this.loginForm.value.password
        });

        // If it match, users=true and enter into if class
        if(users){
          alert("Login Successfully");
          if(this.retUrl!=null){
            this.service.islogged=true;
            this.router.navigate([this.retUrl]);
          }
        }
        else{
          alert("Check login credentials");
        }
      })

  }
  ngOnInit() {
    // to retrieve the URL to navigate when login is completed
    this.route.queryParamMap.subscribe(parama=>{
      this.retUrl=parama.get('retUrl');
    })
  }

}
