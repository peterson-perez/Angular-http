import { Injectable } from '@angular/core';
import { map, Observable, ObservedValueOf } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductI } from './Models/ModelProductInt';
import { Product } from './Models/ModelProduct';
import { EditProductI } from './Models/ModelEditProducts';
import { EditStockI } from './Models/ModelProductStock';




@Injectable({providedIn: 'root'})

export class ServiciosService {

  public url: string;

  constructor(public http:HttpClient) { 
   this.url = environment.urlApi
  }

  // post
  postProduct(form: Product): Observable<ProductI>{
    return this.http.post<ProductI>('/api/Product', form)
  }


  // get
  getProductAll(): Observable<ProductI[]>{
   return this.http.get<ProductI[]>("/api/ProductAll")
  }

  // get Product id

  getproductId(id: number): Observable<ProductI>{
    return this.http.get<ProductI>('/api/ProductId?id=' + id)
  }

  getProductsByName(name: any): Observable<ProductI>{
    return this.http.get<ProductI>('/api/ProductName?name=' + name)
  }

  // delete

  deleteProduct(id: number): Observable<string>{
    return this.http.delete<string>('/api/ProductId?id=' + id)
  }

  //edit
  
  putProduct(id: number, form: EditProductI): Observable<ProductI>{
    return this.http.put<ProductI>('/api/ProductId?id=' + id, form)
  }

  //EditStock

  putProductStock(id: number, newStock: EditStockI): Observable<ProductI>{
  return this.http.put<ProductI>('/ProductStock?id=' + id, '&newStock=' + newStock)
  }

}

