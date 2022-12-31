import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/Models/ModelProduct';
import { ServiciosService } from 'src/app/servicios.service';


@Component({
  selector: 'app-getproductbyname',
  templateUrl: './getproductbyname.component.html',
  styleUrls: ['./getproductbyname.component.css']
})
export class GetproductbynameComponent implements OnInit {

  products: Product[] = []

  inputName = new FormGroup({
    name: new FormControl('',Validators.required)
  })

  constructor(private service: ServiciosService) { }

  ngOnInit(): void {
  }

  search(name: any){
     this.service.getProductsByName(name).subscribe( data => {
      console.log(data)
     })
  }

}
