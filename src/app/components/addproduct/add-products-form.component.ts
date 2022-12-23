import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/servicios.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './add-products-form.component.html',
  styleUrls: ['./add-products-form.component.css']
})
export class AddProductsComponent implements OnInit {

  productForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required]),
    category : new FormControl('',[Validators.required]),
    stock : new FormControl(0, [Validators.required]),
    price : new FormControl(0, [Validators.required])

  })

  constructor(private service: ServiciosService, private routes: Router) {

   }

  ngOnInit(): void {
  }

  onSubmit = (form: any) => {
    this.service.postProduct(form).subscribe(error => {
      this.routes.navigate(['/ProductTable'])
    })
  }

}
