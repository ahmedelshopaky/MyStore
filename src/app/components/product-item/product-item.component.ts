import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() selectProduct = new EventEmitter<void>();
  constructor(private cart: CartService) {
    this.product = new Product();
  }

  addToCart(product: Product): void {
    this.selectProduct.emit();
    this.cart.addToCart(product);
    alert("Added to cart!");
  }
  
  ngOnInit(): void {}
}
