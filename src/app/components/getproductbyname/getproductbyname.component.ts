import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductI } from 'src/app/Models/ModelProductInt';
import { ServiciosService } from 'src/app/servicios.service';


@Component({
  selector: 'app-getproductbyname',
  templateUrl: './getproductbyname.component.html',
  styleUrls: ['./getproductbyname.component.css']
})
export class GetproductbynameComponent implements OnInit {

  @Output() find: EventEmitter<ProductI> = new EventEmitter()
  searchForm = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  constructor(private service: ServiciosService) { }


  ngOnInit(): void {
  }

  search(name: string | null | undefined) {
    if (!name) return
    this.service.getProductsByName(name).subscribe(data => this.find.emit(data))
  }

}
