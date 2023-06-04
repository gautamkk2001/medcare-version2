import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  retUrl:any="";
  constructor(private fb:FormBuilder, private service:LoginService, private route:ActivatedRoute, private router:Router, private http:HttpClient) { }

  // login form validation
  loginForm=this.fb.group({
    userId:[,[Validators.required] ],
    password:[,[Validators.required]]
  })

  // called when form is Submitted
  validate(){
    this.http.get<any>("http://localhost:3000/registeredUser").subscribe(data=>{
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
