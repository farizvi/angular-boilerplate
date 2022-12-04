import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './features/products/components/list-products/list-products.component';
import { AddProductComponent } from './features/products/components/add-product/add-product.component';
import { EditProductComponent } from './features/products/components/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './common/shared-components/forms/text-input/text-input.component';
import { UserSignupComponent } from './features/users/user-signup/user-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    AddProductComponent,
    EditProductComponent,
    TextInputComponent,
    UserSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
