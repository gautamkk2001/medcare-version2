import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-adminProduct',
  templateUrl: './adminProduct.component.html',
  styleUrls: ['./adminProduct.component.css']
})
export class AdminProductComponent implements OnInit {

  products:any=' ';
  environment=environment;

  constructor(private data: ProductdataService, private route: ActivatedRoute, private router:Router, private fb:FormBuilder, private http:HttpClient) {
    this.data.getproducts().subscribe((data)=>{
      this.products=data;

    });
   }

   callDelete(proName:any){

    if(confirm("Are you want to delete?")){
    this.data.dropproducts(proName).subscribe((value) =>{
      alert("Deleted");
    })
  }
  }

  editproducts=this.fb.group({
    title:[,Validators.required],
    description:[,Validators.required],
    details:[,Validators.required],
    originalAmount:[,Validators.required],
    offerPercentage:[,Validators.required],
    stock:[,Validators.required],
  });

  showEdit:boolean=false;
  showProducts:boolean=true;
  pro:any;

  callEdit(product:any){
   this.showEdit=true;
   this.showProducts=false;
    this.editproducts.controls['title'].setValue(product.title)
    this.editproducts.controls['description'].setValue(product.description)
    this.editproducts.controls['details'].setValue(product.details)
    this.editproducts.controls['originalAmount'].setValue(product.originalAmount)
    this.editproducts.controls['offerPercentage'].setValue(product.offerPercentage)
    this.editproducts.controls['stock'].setValue(product.stock)
    this.pro = product;
  }


  updateProduct(){
    var id= this.pro.id ;
    this.http.patch<any>(environment.getProducts+'/'+id, this.editproducts.value).subscribe(()=>{
      alert("updated");
    });

   }

   closeEdit(){
    this.showEdit=false;
    this.showProducts=true;
   }

  ngOnInit() {
  }

}
