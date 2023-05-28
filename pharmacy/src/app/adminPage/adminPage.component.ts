import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
@Component({
  selector: 'app-adminPage',
  templateUrl: './adminPage.component.html',
  styleUrls: ['./adminPage.component.css']
})
export class AdminPageComponent implements OnInit {
prouser:any=' ';
products:any=' ';
  constructor(private data:ProductdataService) {
    this.data.registereduser().subscribe((data)=>(this.prouser=data));
    this.data.getproducts().subscribe((data)=>(this.products=data));
   }

  ngOnInit() {
  }

}
