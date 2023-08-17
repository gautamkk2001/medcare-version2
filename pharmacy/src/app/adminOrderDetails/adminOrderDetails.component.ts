import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-adminOrderDetails',
  templateUrl: './adminOrderDetails.component.html',
  styleUrls: ['./adminOrderDetails.component.css']
})
export class AdminOrderDetailsComponent implements OnInit {

 environment = environment;
 orderData:any;
 history:any;
 menu:any=[];
 date:any=[];
 logInUser:any;
 len:any;
 loginstatus:any;
 products:any=' ';


  constructor(private data: ProductdataService, private route: ActivatedRoute, private router:Router) {
    this.data.getproducts().subscribe((data)=>{
      this.products=data;

    });
   }

  logout(){
    this.loginstatus=false;
    sessionStorage.clear();

    this.router.navigate(['home']);
  }

  ngOnInit() {
    let EmailId = this.route.snapshot.paramMap.get('order');

    this.logInUser={
      "email":EmailId
    };
     this.data.searchingOrderHistory(EmailId).subscribe((res)=>{
      this.orderData = res;
      console.log(this.orderData)
    })


   this.data.searchingOrderHistory(this.logInUser).subscribe((dt)=>{
    this.history=dt;
    this.len =  this.history.length;
      var n=0;
        for (let index = 0; index < this.len; index++) {
          var menu_length=this.history[index].Menu_Details.length;
          // this.historyDate[index]=this.history[index].OrderDate;
          for (let ind = 0; ind < menu_length; ind++){
            this.menu[n]= this.history[index].Menu_Details[ind];
            this.date[n]=this.history[index].OrderDate;
            n+=1;
        }
      }
      console.log(this.menu);
   })

  }

}
