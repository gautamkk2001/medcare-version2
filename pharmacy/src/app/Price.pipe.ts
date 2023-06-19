import { Pipe, PipeTransform } from '@angular/core';
import { ProductdataService } from './productdata.service';

@Pipe({
  name: 'Price'
})
export class PricePipe implements PipeTransform {
  loop:boolean=false;
  constructor(private data:ProductdataService){
   this.loop=this.data.salePrice;
  }
  discount:any;
  transform(value: any): any {
    if(this.loop){
      this.discount = value/2;
      return this.discount;
    }
    else{
      return value;
    }
  }

}
