import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-adminNotifications',
  templateUrl: './adminNotifications.component.html',
  styleUrls: ['./adminNotifications.component.css']
})
export class AdminNotificationsComponent implements OnInit {

  lowStock:any;
  environment:any=environment;
  constructor(private data:ProductdataService, private http:HttpClient) {

  }

  ngOnInit() {
    this.data.searchingStock().subscribe((products)=>(this.lowStock=products));
  }

  refillStock(refill:any){
  var body={
    "stock":60
  }
  this.http.patch<any>(environment.getProducts+'/'+refill, body).subscribe(()=>{
    alert("Refilled Successfully");
    this.ngOnInit();
  })

  }

}
