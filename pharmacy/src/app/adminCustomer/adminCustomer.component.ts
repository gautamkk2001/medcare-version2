import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-adminCustomer',
  templateUrl: './adminCustomer.component.html',
  styleUrls: ['./adminCustomer.component.css']
})
export class AdminCustomerComponent implements OnInit {

  prouser:any=' ';

  constructor(private data:ProductdataService) {
    this.data.registereduser().subscribe((data)=>{
      this.prouser=data;

    });
  }

  ngOnInit() {
  }

}
