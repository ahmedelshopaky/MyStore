import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../../models/product';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  isSelected: boolean = false;
  productList: Product[] = [];
  subscription: Subscription = new Subscription();
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getProducts().subscribe(
      (products: Product[]) => {
        this.productList = products;
      }
    );
  }

  selectProduct() {
    this.isSelected = true;
  }

}
