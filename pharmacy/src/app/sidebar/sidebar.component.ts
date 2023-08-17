import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  environment=environment

  constructor(private route: Router, private logger:NGXLogger, private http:HttpClient) { }

  openSideBar(){
    let  home_content:any="";
     let btn:any = document.querySelector("#btn");
  let sidebar:any = document.querySelector(".sidebar");
  let searchBtn:any = document.querySelector(".bx-search");
    sidebar.classList.toggle("active");
    home_content.classList.toggle("activehome");


  }
  success:any=true;
  failure:any=false;
  logout(){
    sessionStorage.clear();
    // --->to store it in logData
    const logData = {
      message : `User Logout : ${sessionStorage.getItem('userName')}`,
      level : 'INFO',
      timestamp : new Date().toLocaleString()
    }
    this.logger.error(logData.message);
    this.http.post(environment.logUrl, logData).subscribe({
    });
    this.route.navigate(['home']);

  }



  ngOnInit() {

  }


}
