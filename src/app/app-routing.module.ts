import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProductTableComponent } from './page/product-table/product-table.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'HomePage',
    pathMatch: 'full'
  },
  {
    path: 'HomePage',
    component: HomePageComponent
  },
  {
    path: 'ProductTable',
    component: ProductTableComponent
  },
  {
    path: 'editProduct',
    component: EditproductComponent
  },
  {
    path: 'AddProduct',
    component: AddproductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Pages = [HomePageComponent, ProductTableComponent, EditproductComponent, AddproductComponent];
