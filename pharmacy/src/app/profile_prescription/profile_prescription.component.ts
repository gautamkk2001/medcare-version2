import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile_prescription',
  templateUrl: './profile_prescription.component.html',
  styleUrls: ['./profile_prescription.component.css']
})
export class Profile_prescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
rxUpload(){
  alert("uploaded");
}
}
