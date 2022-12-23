import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductI } from './Models/ModelProductInt';
import { Product } from './Models/ModelProduct';




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

  // delete

  deleteProduct(id: number): Observable<ProductI[]>{
    return this.http.delete<ProductI[]>('/api/ProductId' + id)
  }
}
