import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductI } from './Models/ModelProduct';




@Injectable({providedIn: 'root'})

export class ServiciosService {

  public url: string;

  constructor(public http:HttpClient) { 
   this.url = environment.urlApi
  }

  postProduct(form: ProductI): Observable<ProductI>{
    return this.http.post<ProductI>('/api/Product', form)
  }

  getProductAll(): Observable<ProductI[]>{
   return this.http.get<ProductI[]>("/api/ProductAll")
  }
}
