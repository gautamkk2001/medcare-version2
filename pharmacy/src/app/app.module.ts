import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomepageComponent } from '.c:/Users/gauta/Desktop/project v2/pharacy/src/homepage/homepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { ProfileComponent } from './profile/profile.component';
import { Profile_accinfoComponent } from './profile_accinfo/profile_accinfo.component';
import { Profile_mywishlistComponent } from './profile_mywishlist/profile_mywishlist.component';
import { Profile_offersComponent } from './profile_offers/profile_offers.component';
import { Profile_prescriptionComponent } from './profile_prescription/profile_prescription.component';
import { Profile_addressComponent } from './profile_address/profile_address.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryDirective } from './gallery.directive';
import { NgImageSliderModule } from 'ng-image-slider';
import { AdminPageComponent } from './adminPage/adminPage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
      ProductComponent,
      LoginComponent,
      RegistrationComponent,
      CartpageComponent,
      ContactComponent,
      NavbarComponent,
      CartpageComponent,
      ForgotpasswordComponent,
      ProductdescriptionComponent,
      ProfileComponent,
      Profile_accinfoComponent,
      Profile_mywishlistComponent,
      Profile_offersComponent,
      Profile_prescriptionComponent,
      Profile_addressComponent,
      FooterComponent,
      GalleryDirective,
      AdminPageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule,NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
