import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminProduct',
  templateUrl: './adminProduct.component.html',
  styleUrls: ['./adminProduct.component.css']
})
export class AdminProductComponent implements OnInit {

  products:any=' ';
  constructor(private data: ProductdataService, private route: ActivatedRoute, private router:Router) {
    this.data.getproducts().subscribe((data)=>{
      this.products=data;

    });
   }
  ngOnInit() {
  }

}
