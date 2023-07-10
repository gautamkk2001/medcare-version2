import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-adminPage',
  templateUrl: './adminPage.component.html',
  styleUrls: ['./adminPage.component.css']
})
export class AdminPageComponent implements OnInit {
prouser:any=' ';
products:any=' ';
  constructor(private data:ProductdataService, private fb:FormBuilder) {
    this.data.registereduser().subscribe((data)=>(this.prouser=data));
    this.data.getproducts().subscribe((data)=>(this.products=data));
   }
  // alert(this.prouser.length);
   addproducts=this.fb.group({
    title:[,Validators.required],
    description:[,Validators.required],
    details:[,Validators.required],
    price:[,Validators.required],
    rating:[,Validators.required],
    category:[,Validators.required],
  });

  editproducts=this.fb.group({
    title:[,Validators.required],
    description:[,Validators.required],
    details:[,Validators.required],
    price:[,Validators.required],
    rating:[,Validators.required],
    category:[,Validators.required],
  });

  ngOnInit() {
  }

  title:any;
  id:any;
  callEdit(pro:any){
    const editModal:any = document.querySelector('.editDialog');
    editModal.showModal();

    this.title = pro.description;
    this.id = pro.id;

   }

   updateProduct(){
    var id=this. id ;
    this.data.updateproducts(id, this.editproducts.value).subscribe((value)=>{
      alert("updated");
    })


   }

   callAdd(){
    const addModal:any = document.querySelector('.addDialog');
    addModal.showModal();
   }

   callDelete(proName:any){

    if(confirm("Are you want to delete?")){
    this.data.dropproducts(proName).subscribe((value) =>{
      alert("Deleted");
    })
  }
   }

   closeAdd(){
    const addModal:any = document.querySelector('.addDialog');
    addModal.close();
   }

   closeEdit(){
    const editModal:any = document.querySelector('.editDialog');
    editModal.close();

   }

   productAdded(){

       this.data.postproducts(this.addproducts.value).subscribe(data=>{
        alert("Added");
      })

   }

  truncateUser(name:any){
   if(confirm("Are you sure want to delete ?")){
    this.data.deleteUsers(name).subscribe((value)=>{
      alert(name + " is Deleted");
    })
  }
}

}
