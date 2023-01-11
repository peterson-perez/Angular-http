import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './components/addproduct/add-products-form.component';
import { DeleteproductComponent } from './components/deleteproduct/deleteproduct.component';
import { EditStockComponent } from './components/edit-stock/edit-stock.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { GetproductbynameComponent } from './components/getproductbyname/getproductbyname.component';
import { ListAllproductsComponent } from './components/listallproducts/listallproducts.component';
import { ProductsFormComponent } from './page/add-product-form/products-form.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProductsComponent } from './page/product-table/products.component';


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
    path: 'Products',
    component: ProductsComponent
  },
  {
    path: 'editProduct/:id',
    component: EditproductComponent
  },
  {
    path: 'AddProduct',
    component: ProductsFormComponent
  },
  {
    path: 'EditStock/:id',
    component: EditStockComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Pages = [HomePageComponent, EditproductComponent, ListAllproductsComponent, ProductsComponent, AddProductsComponent, ProductsFormComponent, GetproductbynameComponent, DeleteproductComponent, EditStockComponent];
