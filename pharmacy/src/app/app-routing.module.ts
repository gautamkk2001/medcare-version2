import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpageComponent } from './cartpage/cartpage.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { RegistrationComponent } from './registration/registration.component';
import { GalleryDirective } from './gallery.directive';
import { ProfileComponent } from './profile/profile.component';
import { Profile_accinfoComponent } from './profile_accinfo/profile_accinfo.component';
import { Profile_mywishlistComponent } from './profile_mywishlist/profile_mywishlist.component';
import { Profile_prescriptionComponent } from './profile_prescription/profile_prescription.component';
import { Profile_addressComponent } from './profile_address/profile_address.component';
import { AdminPageComponent } from './adminPage/adminPage.component';



const routes: Routes = [
  {
   path:'', redirectTo:'/product',pathMatch:'full'
  },

  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"registration",
    component:RegistrationComponent
  },
  {
    path:"forgot",
    component:ForgotpasswordComponent
  },
  {
    path:"product",
    component:ProductComponent,
    children:[
      {
        path:"a",
        component:ProductComponent
      },
    ]
  },
  {
    path:'product/:check',
    component:ProductdescriptionComponent
  },
  {
    path:"accountdetail",
    component:ProfileComponent,
    children:[
     {
      path:"details",
      component:Profile_accinfoComponent
     },
     {
      path:"wishlist",
      component:Profile_mywishlistComponent
     },
     {
      path:"prescription",
      component:Profile_prescriptionComponent
     },
     {
      path:"address",
      component:Profile_addressComponent
     }
    ]
  },
  {
    path:"cart",
    component:CartpageComponent
  },
  {
   path:"description",
   component:ProductdescriptionComponent
  },
  {
    path:"home",
    component:HomepageComponent
  },

  {
    path:"b",
    component:ProductComponent
  },
  {
    path:"admin",
    component:AdminPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule { }
