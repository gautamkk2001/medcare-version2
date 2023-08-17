import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-adminPage',
  templateUrl: './adminPage.component.html',
  styleUrls: ['./adminPage.component.css']
})
export class AdminPageComponent implements OnInit {
environment = environment;
prouser:any=' ';
products:any=' ';
userLen:any;
productLen:any;

loginstatus:any;
reviews:any;
  constructor(private data:ProductdataService, private fb:FormBuilder, private router:Router) {
    this.data.registereduser().subscribe((data)=>{
      this.prouser=data;
      this.userLen=this.prouser.length;
    });
    this.data.getproducts().subscribe((data)=>{
      this.products=data;
      this.productLen=this.products.length;
    });

  }



  ngOnInit() {

  }
}

