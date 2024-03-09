import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductI } from 'src/app/Models/ModelProductInt';
import { ServiciosService } from 'src/app/servicios.service';


@Component({
  selector: 'app-getproductbyname',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './getproductbyname.component.html',
  styleUrls: ['./getproductbyname.component.css']
})
export class GetproductbynameComponent implements OnInit {

  @Output() find: EventEmitter<ProductI> = new EventEmitter()
  searchForm = new FormGroup({
    name: new FormControl('', Validators.required)
  })
  message: string = ''

  constructor(private service: ServiciosService) { }


  ngOnInit(): void {
  }

  search(name: string | null | undefined) {
    if (!name)return 
    this.service.getProductsByName(name).subscribe({
      next: (data: ProductI) => {
        this.find.emit(data)
      },
      error: (error) => this.message = `Este producto no existe, las mayusculas pueden influir en la busqueda`
    })
    
  }
}
