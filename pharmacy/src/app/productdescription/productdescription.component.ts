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
 logInUser:any="";
  ngOnInit() {
    const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }
  }
cartdata:any=this.finaldescription;
  addedCart(value:any){
    var body={
    "title":value.title,
    "description": value.description,
    "Quantity": value.Quantity,
    "rating": value.rating,
    "originalAmount": value.originalAmount,
    "email":this.logInUser.email,
    "username":this.logInUser.username
    }
    this.data.addToCart(body).subscribe(data=>{
    })
    // alert("added");
  }

  wishlist(wish:any){
    this.data.addtoWishlist(wish).subscribe(data=>{

    })
    alert("added");

  }
}
