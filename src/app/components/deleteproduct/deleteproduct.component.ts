import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-deleteproduct',
  standalone: true,
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  @Input() id?: number;
  @Output() delete: EventEmitter<number> = new EventEmitter()

  constructor(private service: ServiciosService) { }

  ngOnInit(): void {
  }

  deleteProduct() {
    if (!this.id) return
    
    this.service.deleteProduct(this.id).subscribe(() => this.delete.emit(this.id));
  }

}
