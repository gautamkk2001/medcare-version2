import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  cartData:any=" ";
  totalPrice:any="0";
  qua:any=""
  constructor(private data:ProductdataService, private fb: FormBuilder) {
    this.data.cartDataValues().subscribe((data)=>{
        this.cartData=data;
        for(let pro of this.cartData){
          this.totalPrice= parseInt (this.totalPrice)+parseInt(pro.originalAmount);
        }
    })
   }
   change !:number;
   input=this.fb.group({
    quantity:[,]
   })
   val:any=this.input.value.quantity
   changeQuantity(cart:any){
    var a=this.input.value.quantity;
  //  =this.input.value.quantity;

      var x;
      x=parseInt(cart.originalAmount) * this.val  ;

        alert(this.val);
   }
  ngOnInit() {
  }

}
