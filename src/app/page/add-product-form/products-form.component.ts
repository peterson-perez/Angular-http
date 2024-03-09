import { Component, OnInit } from '@angular/core';
import { AddProductsComponent } from 'src/app/components/addproduct/add-products-form.component';

@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [
    AddProductsComponent
  ],
  templateUrl: './products-form.component.html',
  styleUrls: ['products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
