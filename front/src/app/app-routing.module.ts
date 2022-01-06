import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {ErrorComponent} from "./pages/error/error.component";
import {ShopComponent} from "./pages/shop/shop.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {CartComponent} from "./pages/cart/cart.component";
import {CompareComponent} from "./pages/compare/compare.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {WishlistComponent} from "./pages/wishlist/wishlist.component";
import {ProductComponent} from "./pages/product/product.component";
import {BlogDetailsComponent} from "./pages/blog-details/blog-details.component";
import {AccountComponent} from "./pages/account/account.component";
import {ForgotPasswordComponent} from "./pages/forgot-password/forgot-password.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {CartEmptyComponent} from "./pages/cart-empty/cart-empty.component";
import {FaqComponent} from "./pages/faq/faq.component";
import {ThankYouComponent} from "./pages/thank-you/thank-you.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'compare', component: CompareComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'product', component: ProductComponent},
  {path: 'account', component: AccountComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cart-empty', component: CartEmptyComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'thank-you', component: ThankYouComponent},
  {path: 'shop/product', component: ProductComponent},
  {path: 'blog/details', component: BlogDetailsComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
