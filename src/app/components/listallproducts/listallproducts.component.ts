import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductI } from 'src/app/Models/ModelProductInt';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-listallproducts',
  templateUrl: './listallproducts.component.html',
  styleUrls: ['./listallproducts.component.css']
})

export class ListAllproductsComponent implements OnInit {

  public products: ProductI[] = []

  constructor(private service:ServiciosService, private routes: Router) { 
  }

  ngOnInit(): void {
    this.service.getProductAll().subscribe( data => {
      this.products = data
      console.log(this.products)
    })
  }

  onSubmit = () => {
    this.routes.navigate(['/AddProduct'])
  }

   edit = (id: number) => {
    this.routes.navigate(['/editProduct'])
  }

  delete = (id: number) => {

  }

}
