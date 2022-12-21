import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductI } from 'src/app/Models/ModelProduct';
import { ServiciosService } from 'src/app/servicios.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

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
