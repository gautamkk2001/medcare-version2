import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomepageComponent } from '.c:/Users/gauta/Desktop/project v2/pharacy/src/homepage/homepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { ProfileComponent } from './profile/profile.component';
import { Profile_accinfoComponent } from './profile_accinfo/profile_accinfo.component';
import { Profile_mywishlistComponent } from './profile_mywishlist/profile_mywishlist.component';
import { Profile_prescriptionComponent } from './profile_prescription/profile_prescription.component';
import { Profile_addressComponent } from './profileNotification/profile_address.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryDirective } from './gallery.directive';
import { NgImageSliderModule } from 'ng-image-slider';
import { AdminPageComponent } from './adminPage/adminPage.component';
import { PaymentComponent } from './payment/payment.component';
import { BlogComponent } from './blog/blog.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { PricePipe } from './Price.pipe';
import { LoginMainComponent } from './login-main/login-main.component';
import { AdminOrderDetailsComponent } from './adminOrderDetails/adminOrderDetails.component';
import { AdminQueriesComponent } from './admin-queries/admin-queries.component';
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { ProductdataService } from './productdata.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminNotificationsComponent } from './adminNotifications/adminNotifications.component';
import { AdminProfileComponent } from './adminProfile/adminProfile.component';
import { AdminCustomerComponent } from './adminCustomer/adminCustomer.component';
import { AdminProductComponent } from './adminProduct/adminProduct.component';
import { AdminOfferComponent } from './adminOffer/adminOffer.component';
import { CheckoutPageComponent } from './checkoutPage/checkoutPage.component';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
      ProductComponent,
      RegistrationComponent,
      CartpageComponent,
      NavbarComponent,
      CartpageComponent,
      ForgotpasswordComponent,
      ProductdescriptionComponent,
      ProfileComponent,
      Profile_accinfoComponent,
      Profile_mywishlistComponent,
      Profile_prescriptionComponent,
      Profile_addressComponent,
      FooterComponent,
      GalleryDirective,
      AdminPageComponent,
      PaymentComponent,
      BlogComponent,
      BlogArticleComponent,
      PricePipe,
      ReversePipe,
      LoginMainComponent,
      AdminOrderDetailsComponent,
      AdminQueriesComponent,
      SidebarComponent,
      AdminNotificationsComponent,
      AdminProfileComponent,
      AdminCustomerComponent,
      AdminProductComponent,
      AdminOfferComponent,
      CheckoutPageComponent
   ],

  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule, NgImageSliderModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
