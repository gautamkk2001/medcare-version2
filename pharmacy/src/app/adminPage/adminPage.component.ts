import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-adminPage',
  templateUrl: './adminPage.component.html',
  styleUrls: ['./adminPage.component.css']
})
export class AdminPageComponent implements OnInit {
environment = environment;
prouser:any=' ';
products:any=' ';
userLen:any;
productLen:any;
loginstatus:any;

  constructor(private data:ProductdataService, private fb:FormBuilder, private router:Router) {
    this.data.registereduser().subscribe((data)=>{
      this.prouser=data;
      this.userLen=this.prouser.length;
    });
    this.data.getproducts().subscribe((data)=>{
      this.products=data;
      this.productLen=this.products.length;
    });
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

  logInUser:any;

  logout(){
    this.loginstatus=false;
    sessionStorage.clear();
    this.router.navigate(['home']);
  }


  ngOnInit() {

    const sessionUser = sessionStorage.getItem('userName'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.logInUser = JSON.parse(sessionUser);
    }
  }

  title:any;
  id:any;

  callEdit(pro:any){
    const addModal:any = document.querySelector('.add-Dialog');
    addModal.close();
    
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
    const editModal:any = document.querySelector('.editDialog');
    editModal.close();
    const addModal:any = document.querySelector('.add-Dialog');
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
    const addModal:any = document.querySelector('.add-Dialog');
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
