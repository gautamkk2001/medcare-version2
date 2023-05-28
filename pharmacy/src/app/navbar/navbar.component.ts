import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cpasswordvalid } from '../cpasswordvalid';
import { ProductdataService } from '../productdata.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(  private fb:FormBuilder,private user:ProductdataService,private route:Router, private http:HttpClient)
   {
    this.user.registereduser().subscribe( (user) =>{
      this.usersdata=user;
  } )
    this.user.adminUser().subscribe( (user)=>{
     this.adminData=user;
    })
   }

  //  ************************************************** Register Form Validation **************************

  formRegister=this.fb.group({
    username:[,Validators.required],
    email:[,Validators.required],
    mobile:[,Validators.required],
    date:[,Validators.required],
    password1:[,Validators.required],
    cpassword1:[,Validators.required],
    gender:[,Validators.required],
  },
     {validator : cpasswordvalid  ('password1','cpassword1')}
  );


// ******************************************************** Register  ***************************************

  submitForm(){
    if(!this.formRegister.valid){
       alert("Enter all fields")
     }
    else if(this.formRegister.valid){
      this.user.addUserInformation(this.formRegister.value).subscribe(data=>{
        alert("Form submitted");
      })
     }
}

// **********************************************  login Validation ********************************************

loginForm=this.fb.group({
  userId:[,[Validators.required] ],
  password:[,[Validators.required]]
})

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
          // this.loginForm.reset();
            this.user.loggedInUser = users;
            sessionStorage.setItem('loggedInUser', JSON.stringify(users));
            this.route.navigate(['product'])
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
          this.route.navigate(['admin' ])
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

  }


// *************************************************** Modal  **************************************]

  loginmodal(){
    const loginpanel:any= document.querySelector(".Loginmodal");
    const registerpanel:any=document.querySelector(".Registermodal");
    registerpanel.close();
    loginpanel.showModal();
  }
  close(){
    const loginpanel:any= document.querySelector(".Loginmodal");
    loginpanel.close();
  }


  registermodal(){
    const loginpanel:any= document.querySelector(".Loginmodal");
    const registerpanel:any=document.querySelector(".Registermodal");
    loginpanel.close();
    registerpanel.showModal();
  }
  logInUser:any="";
  //  get(){


  // }
  ngOnInit() {

  }
}
