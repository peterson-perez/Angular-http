import { CurrencyPipe } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "src/app/Models/ModelProduct";
import { EditStockI } from "src/app/Models/ModelProductStock";
import { ServiciosService } from "src/app/servicios.service";


@Component({
    selector: 'app-edit-stock',
    standalone: true,
    imports: [
        ReactiveFormsModule, CurrencyPipe
    ],
    templateUrl: './edit-stock.component.html',
    styleUrls: ['./edit-stock.component.css']
})

export class EditStockComponent {
    editStock = new FormGroup({
        stock: new FormControl<number>(0, [Validators.required])
    })


    public product: Product;
    public productId: number = 0;

    constructor(private service: ServiciosService, private activeRouter: ActivatedRoute, private routes: Router) {
        this.product = {
            name: '',
            description: '',
            category: '',
            price: 0,
            stock: 0
        }
        // this. product = this.service.getproductId()
    }

    ngOnInit(): void {
        let productIdString: any = this.activeRouter.snapshot.paramMap.get('id')
        this.productId = Number(productIdString)
        this.service.getproductId(this.productId).subscribe(data => {
            this.product = data
        })
        this.editStock.setValue({
            stock: this.product.stock
        })
    }


    edit(stock: any) {
        if (stock !== null && stock !== undefined) {
            this.service.putProductStock(this.productId, stock).subscribe(data => {
                console.log(data);
                this.routes.navigate(['/Products'])
            }
            )
        }
    }
}