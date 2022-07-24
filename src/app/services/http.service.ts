import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private products: Product[];
  constructor(private http: HttpClient) {
    this.products = [];
  }
  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json');
  }
}
