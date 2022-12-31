import { Component, Injectable, OnInit } from '@angular/core';
import { ProductI } from 'src/app/Models/ModelProductInt';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})

@Injectable({providedIn: 'root'})

export class DeleteproductComponent implements OnInit {

  products: ProductI[] = [];

  constructor(private service: ServiciosService) { }

  ngOnInit(): void {
  }

  deleteProduct(id: number) {
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
