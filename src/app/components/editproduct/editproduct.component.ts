import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EditProductI } from 'src/app/Models/ModelEditProducts';
import { Product } from 'src/app/Models/ModelProduct';
import { ServiciosService } from 'src/app/servicios.service';


@Component({
  selector: 'app-editproduct',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  formEditProduct = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required])
  })

  public product: Product;
  public productId: number = 0

  constructor(private routes: Router, private service: ServiciosService, private activeRouter: ActivatedRoute,
  ) {
    this.product = {
      name : '',
      description: '',
      category : '',
      price: 0,
      stock: 0
    }


  }


  ngOnInit(): void {
    let productIdString: any = this.activeRouter.snapshot.paramMap.get('id')
    this.productId = Number(productIdString)
    this.service.getproductId(this.productId).subscribe( data => {
      this.product = data
      this.formEditProduct.setValue({
        'name' : this.product.name,
        'description' : this.product.description,
        'category' : this.product.category,
        'price' : this.product.price,
      })
    })

    console.log(this.formEditProduct.value)
  }

  edit = (form: any) => {
    console.log(form)
    this.service.putProduct(this.productId, form).subscribe(data => {
      this.product = data
    })
    this.routes.navigate(['/Products'])
  }

}
