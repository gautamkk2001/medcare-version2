import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdataService } from '../productdata.service';
import { GalleryDirective } from '../gallery.directive';


interface Star {
  value: number;
  isActive: boolean;
}

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
offer:boolean;
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
    this.offer=this.data.offer;
}
 logInUser:any="";
  ngOnInit() {
    const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }
  }
cartdata:any=this.finaldescription;

  // Adding to Cart
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
  }

  // Adding to Wishlist
  wishlist(wish:any){
    var body={
      "title":wish.title,
      "description": wish.description,
      "Quantity": wish.Quantity,
      "rating": wish.rating,
      "originalAmount": wish.originalAmount,
      "email":this.logInUser.email,
      "username":this.logInUser.username
      }
    this.data.addtoWishlist(body).subscribe(data=>{
    })
    alert("added");
  }

// review
stars: Star[] = [
  { value: 1, isActive: false },
  { value: 2, isActive: false },
  { value: 3, isActive: false },
  { value: 4, isActive: false },
  { value: 5, isActive: false }
];

feedbackText: string = '';

rate(value: number): void {
  this.stars.forEach(star => {
    star.isActive = star.value <= value;
  });
}

submitFeedback(): void {
  // Perform your logic here, e.g., sending the rating and feedback to a server
  console.log('Rating:', this.getRating());
  console.log('Feedback:', this.feedbackText);
}

getRating(): number {
  return this.stars.filter(star => star.isActive).length;
}

}
