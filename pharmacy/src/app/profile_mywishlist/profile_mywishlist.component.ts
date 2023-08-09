import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-profile_mywishlist',
  templateUrl: './profile_mywishlist.component.html',
  styleUrls: ['./profile_mywishlist.component.css']
})
export class Profile_mywishlistComponent implements OnInit {
  wishlistdata:any;
  logInUser:any;

  constructor(private data:ProductdataService) {

  }

  ngOnInit() {

    const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }
    // ----> get the user wishlist product
    this.data.searchingWishlist(this.logInUser).subscribe(value=>{
      this.wishlistdata=value
    });

  }

}
