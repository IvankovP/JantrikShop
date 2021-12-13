import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {ErrorComponent} from "./error/error.component";
import {ShopComponent} from "./shop/shop.component";
import {BlogComponent} from "./blog/blog.component";
import {CartComponent} from "./cart/cart.component";
import {CompareComponent} from "./compare/compare.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {WishlistComponent} from "./wishlist/wishlist.component";

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
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
