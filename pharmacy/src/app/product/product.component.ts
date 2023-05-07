import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // ************************************************************* Fetching all product *************************************

  prodata: any = '';
  drugdata: any = '';
  constructor(private data: ProductdataService, private http: HttpClient) {
    this.data.getproducts().subscribe((data) => (this.prodata = data));
    this.data.getdrugsname().subscribe((data) => (this.drugdata = data));
  }

  pro_title: any = '';
  pro_description: any = '';
  pro_amount: any = '';
  value:any=this.data.strotedData;
  finalData:any=""
  a() {
    this.data.strotedData = "aProduct";
    
  }
  b() {
    this.data.strotedData = "bProduct";
  }
  c() {
    this.data.strotedData = 3;
  }
  ngOnInit() {
    this.http.get<any>("http://localhost:3000/"+'/'+this.value).subscribe(data=>{
    this.finalData=data;
    })
  }


}
