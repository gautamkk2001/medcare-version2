import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { environment } from 'src/environments/environment';

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

  environment= environment;
constructor(private fb:FormBuilder, private contact:UserService){}
contactForm=this.fb.group({
  firstname1:[,Validators.required],
  lastname1:[,Validators.required],
  email1:[,Validators.required],
  mobile1:[,Validators.required],
  message1:[,Validators.required],
},
)

submitContactForm(){
  this.contact.addContactInformation (this.contactForm.value).subscribe(data=>{
    alert("Form submitted");
    this.contactForm.reset();
  })
}

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
    console.log('Rating:', this.getRating());
    console.log('Feedback:', this.feedbackText);
  }

  getRating(): number {
    return this.stars.filter(star => star.isActive).length;
  }

}
