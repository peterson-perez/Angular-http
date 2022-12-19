import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, Pages } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { DeleteproductComponent } from './components/deleteproduct/deleteproduct.component';
import { ListallproductsComponent } from './components/listallproducts/listallproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    Pages,
    AddproductComponent,
    EditproductComponent,
    DeleteproductComponent,
    ListallproductsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
