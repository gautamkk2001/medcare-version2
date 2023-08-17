import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminOffer',
  templateUrl: './adminOffer.component.html',
  styleUrls: ['./adminOffer.component.css']
})
export class AdminOfferComponent implements OnInit {

  constructor(private fb:FormBuilder ,private route:Router,private data:ProductdataService,private http : HttpClient ) { }

  formOffer=this.fb.group({
    offerName:[,Validators.required],
    start:[,Validators.required],
    end:[,Validators.required],
    discount:[,Validators.required],
  })

  submitForm(){
    this.data.postOfferDetails(this.formOffer.value).subscribe(data=>{
      alert("Offer Added");
    })
  }
  ngOnInit() {
  }

}
