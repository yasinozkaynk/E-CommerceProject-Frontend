import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VatAddedPipe } from './components/pipes/vat-added.pipe';
import { FilterPipePipe } from './components/pipes/filter-pipe.pipe';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { FavoriteSummaryComponent } from './components/favorite-summary/favorite-summary.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { OpportunityProductsComponent } from './components/opportunity-products/opportunity-products.component';
import { ProductCommentComponent } from './components/product-comment/product-comment.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserUpdateComponent } from './components/user-detail/user-update/user-update/user-update.component';
import { UserCartComponent } from './components/user-detail/user-cart/user-cart/user-cart.component';
import { DiscountProductComponent } from './components/discount-product/discount-product.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent,
    RegisterComponent,
    FavoriteSummaryComponent,
    ProductDetailComponent,
    OpportunityProductsComponent,
    ProductCommentComponent,
    UserDetailComponent,
    UserUpdateComponent,
    UserCartComponent,
    DiscountProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    [IvyCarouselModule],
    NgbModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    SwiperModule,
    JwtModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-left"}),
      JwtModule.forRoot({
        config:{
          tokenGetter: tokenGetter,
        }
      }),
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
