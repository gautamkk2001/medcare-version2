import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdataService } from '../productdata.service';
import { GalleryDirective } from '../gallery.directive';

@Component({
  selector: 'app-productdescription',
  templateUrl: './productdescription.component.html',
  styleUrls: ['./productdescription.component.css']
})
export class ProductdescriptionComponent implements OnInit {
prodescription:any;
searchdescription:any="";
finaldescription:any="";
detailsofproduct:any="";
constructor(private data:ProductdataService, private route:ActivatedRoute) {
  this.data.getproducts().subscribe(data=> {this.prodescription =data
    this.route.params.subscribe(paramdata=>
      {
        this.searchdescription=paramdata['check'];
        for(let pro of this.prodescription){

          if(pro.description==this.searchdescription){
            this.finaldescription=pro;
            this.detailsofproduct=pro;

            break;
          }
        }
      })
    });
}

  ngOnInit() {
  }
cartdata:any=this.finaldescription;
  addedCart(value:any){
    this.data.addToCart(value).subscribe(data=>{
    })
    alert("added");
  }
}
