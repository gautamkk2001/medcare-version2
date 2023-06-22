import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-profile_mywishlist',
  templateUrl: './profile_mywishlist.component.html',
  styleUrls: ['./profile_mywishlist.component.css']
})
export class Profile_mywishlistComponent implements OnInit {
  wishlistdata:any;
  constructor(private data:ProductdataService) {
    this.data.wishlistvalues().subscribe(value=>{this.wishlistdata=value})
  }

  ngOnInit() {
  }

}
