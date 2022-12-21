import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductI } from 'src/app/Models/ModelProduct';
import { ServiciosService } from 'src/app/servicios.service';


@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  public products: ProductI[] = []

  constructor(private service:ServiciosService, private routes: Router ) {}

  ngOnInit(): void {
    this.service.getProductAll().subscribe( data => {
      this.products = data
      console.log(this.products)
    })
  }

  onSubmit = () => {
    this.routes.navigate(['/AddProduct'])
  }

   edit = () => {
    this.routes.navigate(['/editProduct'])
  }

}
