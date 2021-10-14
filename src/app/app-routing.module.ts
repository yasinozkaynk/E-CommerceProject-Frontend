import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { DiscountProductComponent } from './components/discount-product/discount-product.component';
import { FavoriteSummaryComponent } from './components/favorite-summary/favorite-summary.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductCommentComponent } from './components/product-comment/product-comment.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { UserCartComponent } from './components/user-detail/user-cart/user-cart/user-cart.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserUpdateComponent } from './components/user-detail/user-update/user-update/user-update.component';
import { LoginGuard } from './quards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},
  {path:"products",component:ProductComponent},
  {path:"login",component:LoginComponent},
  {path:"login/register",component:RegisterComponent},
  {path:"products/cartItem",component:CartSummaryComponent},
  {path:"favorite",component:FavoriteSummaryComponent},
  {path:"products/add",component:ProductAddComponent,canActivate:[LoginGuard]},
  {path:"products/category/:categoryId",component:ProductComponent},
  {path:"products/:productId",component:ProductDetailComponent},
  {path:"user",component:UserDetailComponent},
  {path:'user/update',component:UserUpdateComponent},
  {path:"cart/:userId",component:UserCartComponent},
  {path:'discounts',component:DiscountProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
