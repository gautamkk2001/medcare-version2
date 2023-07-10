import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';

interface Star {
  value: number;
  isActive: boolean;
}


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


  // rating
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
