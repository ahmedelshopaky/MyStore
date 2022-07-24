import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Product } from 'src/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  
  product: Product;
  private id: number = 0;
  constructor(
    private http: HttpService,
    private activatedRoute: ActivatedRoute,
    private cart: CartService,
  ) {
    this.product = new Product();
  }

  addToCart(product: Product): void {
    this.cart.addToCart(product);
    alert("Added to cart!");
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.id = param['id'];
    });

    this.http.getProducts().subscribe(
      (products: Product[]) => {
        this.product = products.filter((product: Product) => {
          return product.id == this.id;
        })[0];
      }
    );
  }
}
