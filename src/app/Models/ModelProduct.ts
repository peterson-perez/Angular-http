export class ProductI {
    name: string
    description: string
    category: string
    stock: number
    price: number

    constructor(){
        this.name = '',
        this.description = '',
        this.category = '',
        this.stock = 0,
        this.price = 0
    }
}