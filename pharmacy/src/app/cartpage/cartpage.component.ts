import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  cartData:any=" ";
  totalPrice:any="0";
  shipping:any="50";
  lastprice:any;
  qua:any=""
  constructor(private data:ProductdataService, private fb: FormBuilder, private http:HttpClient) {
    // to add the total price in the cart
    this.data.cartDataValues().subscribe((data)=>{
        this.cartData=data;
        for(let pro of this.cartData){
          this.totalPrice= parseInt (this.totalPrice)+parseInt(pro.originalAmount);
        }
    this.lastprice=parseInt(this.totalPrice)+parseInt(this.shipping);
    this.data.paymentTotal=this.lastprice;
    })

   }

  //  change the quantity
  //  change !:number;
  //  input=this.fb.group({
  //   quantity:[,]
  //  })
  //  val:any=this.input.value.quantity
  //  changeQuantity(cart:any){
  //   var a=this.input.value.quantity;
  //  =this.input.value.quantity;

  //     var x;
  //     x=parseInt(cart.originalAmount) * this.val  ;

  //       alert(this.val);
  //  }


  //  delete
  delete(id:any){
    this.data.deleteCartValues(id).subscribe(data=>{
      alert("Successfully deleted");
      window.location.reload();
    })
  }


// popup
popupp(){
  const orderpanel:any= document.querySelector(".popup");
  orderpanel.showModal();
}

  ngOnInit() {

  }

}
