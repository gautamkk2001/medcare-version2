import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { UserService } from '../user.service';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  expiryDate: string|undefined;

  paymentAmount:any;
  data: any = "";
  payment: FormGroup;
  paymentStatus: string = "Payment Done";

  constructor(private cartService: UserService, private http: HttpClient, private formBuilder: FormBuilder, private pro:ProductdataService) {
    this.payment = this.formBuilder.group({
      accountNumber: [, [Validators.required, Validators.pattern("[0-9]{0,16}"), Validators.minLength(16), Validators.maxLength(16)]],
      cardType: [, Validators.required],
      expiry: [, Validators.required],
      cvv: [, [Validators.required, Validators.pattern("[0-9]{0,16}"), Validators.minLength(3), Validators.maxLength(3)]]
    });
   this.paymentAmount=this.pro.paymentTotal;
  }
  ngOnInit() {
  }
  show(){
    let paymentModal: any = document.querySelector(".paymentModal");
    paymentModal.showModal();
  }
}
