import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListAllproductsComponent } from 'src/app/components/listallproducts/listallproducts.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ListAllproductsComponent
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor( private routes: Router ) {

  }
  
  ngOnInit(): void {
    
  }

}
