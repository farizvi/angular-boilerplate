import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductComponent } from './features/products/components/add-product/add-product.component';
import { EditProductComponent } from './features/products/components/edit-product/edit-product.component';
import { ListProductsComponent } from './features/products/components/list-products/list-products.component';
import { UserSignupComponent } from './features/users/user-signup/user-signup.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'register', component: UserSignupComponent},
  {path: 'products', component: ListProductsComponent},
  {path: 'products/add', component: AddProductComponent},
  {path: 'products/edit/:id', component: EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
