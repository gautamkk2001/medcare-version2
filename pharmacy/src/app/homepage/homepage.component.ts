import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

constructor(){}

  ngOnInit() {
  }
  imgcollection: Array<object>=[
    {
      image:"../../assets/images/product-slider2.jpg",
      thumbimage:"../../assets/images/product-slider2.jpg",
      alt:"img1",
      title:"image1"
    },
    {
      image:"../../assets/images/product-slider2.jpg",
      thumbimage:"../../assets/images/product-slider2.jpg",
      alt:"img2",
      title:"image2"
    },
    {
      image:'../../assets/images/product-slider2.jpg',
      thumbimage:"../../assets/images/product-slider2.jpg",
      alt:"img3",
      title:"image3"
    },
   {
      image:"../../assets/images/product-slider2.jpg",
      thumbimage:"../../assets/images/product-slider4",
      alt:"img4",
      title:"image4"
    }
  ]

}
