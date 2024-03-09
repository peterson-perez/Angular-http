import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductI } from 'src/app/Models/ModelProductInt';
import { ServiciosService } from 'src/app/servicios.service';
import { GetproductbynameComponent } from '../getproductbyname/getproductbyname.component';
import { DeleteproductComponent } from '../deleteproduct/deleteproduct.component';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-listallproducts',
  standalone: true,
  imports: [
    GetproductbynameComponent,
    DeleteproductComponent,
    CurrencyPipe,
    CommonModule
  ],
  templateUrl: './listallproducts.component.html',
  styleUrls: ['./listallproducts.component.css']
})

export class ListAllproductsComponent implements OnInit {

  public products: ProductI[] = [];
  public lenghtProducts: number = 0;


  constructor(private service: ServiciosService,
    private routes: Router) { }

  ngOnInit(): void {
    this.service.getProductAll().subscribe(data => {
      this.products = data
      this.lenghtProducts = this.products.length
    })
  }

  onSubmit = () => {
    this.routes.navigate(['/AddProduct'])
  }

  edit = (id: number) => {
    this.routes.navigate(['/editProduct', id])
  }

  onDelete(id: number) {
    this.products = this.products.filter(products => products.id !== id)
  }

  onFind(product: ProductI) {
    this.products = [product]
  }

  watch(id: number) {
    this.routes.navigate(['/EditStock', id])
  }

}
