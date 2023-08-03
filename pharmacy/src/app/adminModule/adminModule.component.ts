import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-adminModule',
  templateUrl: './adminModule.component.html',
  styleUrls: ['./adminModule.component.css']
})
export class AdminModuleComponent implements OnInit {

  constructor(private fb:FormBuilder, private data:ProductdataService) { }

  addproducts=this.fb.group({
    title:[,Validators.required],
    description:[,Validators.required],
    details:[,Validators.required],
    price:[,Validators.required],
    rating:[,Validators.required],
    category:[,Validators.required],
  });

   productAdded(){
    if(this.addproducts.valid){
       this.data.postproducts(this.addproducts.value).subscribe(data=>{
        alert("Added");
      })
    }
    else{
      alert("Something went wrong");
    }
   }

   callEdit(){
    const editModal:any = document.querySelector('.editDialog');
    editModal.showModal();
   }

   callAdd(){
    const addModal:any = document.querySelector('.addDialog');
    addModal.showModal();
   }

   closeAll(){
    const addModal:any = document.querySelector('.addDialog');
    addModal.close();

    const editModal:any = document.querySelector('.editDialog');
    editModal.close();

   }

  ngOnInit() {
  }

}
