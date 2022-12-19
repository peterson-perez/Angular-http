import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductFormComponent } from './page/add-product-form/add-product-form.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProductTableComponent } from './page/product-table/product-table.component';


const routes: Routes = [
  {path:'', redirectTo: 'HomePage', pathMatch:'full'},
  {path:'HomePage', component:HomePageComponent},
  {path:'AddProduct', component:AddProductFormComponent},
  {path:'ProductTable', component:ProductTableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Pages = [HomePageComponent, AddProductFormComponent, ProductTableComponent];
