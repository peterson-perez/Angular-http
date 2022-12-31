import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductI } from 'src/app/Models/ModelProductInt';
import { ServiciosService } from 'src/app/servicios.service';
import { DeleteproductComponent } from '../deleteproduct/deleteproduct.component';

@Component({
  selector: 'app-listallproducts',
  templateUrl: './listallproducts.component.html',
  styleUrls: ['./listallproducts.component.css']
})

export class ListAllproductsComponent implements OnInit {

  public products: ProductI[] = [];
  public lenghtProducts: number = 0;

  
  constructor(private service: ServiciosService, 
    private routes: Router, 
    private deleteProduct: DeleteproductComponent) {}

  ngOnInit(): void {
    this.service.getProductAll().subscribe(data => {
      this.products = data
      console.log(this.products)
       this.lenghtProducts = this.products.length
      console.log(this.lenghtProducts)
    })


  }

  onSubmit = () => {
    this.routes.navigate(['/AddProduct'])
  }

  edit = (id: number) => {
    this.routes.navigate(['/editProduct', id])
  }

  delete = (id: number) => {
    this.products.find((product) => {
      if (product.id === id) {
        this.service.deleteProduct(id).subscribe( data => {
          this.products = this.products.filter(products => products.id != id)
          return this.products   
        })
      }
    })
  }

}
