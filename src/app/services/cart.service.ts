import { Injectable } from '@angular/core';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: Product[] = [];
  constructor() { }

  addToCart(product: Product): void {
    if (this.getProduct(product)) {
      this.changeAmount(product);
    } else {
      this.cartProducts.push(product);
    }
  }

  changeAmount(product: Product): void {
    let amount = this.getProduct(product)?.amount as number;
    console.log(amount);
    amount += product.amount;
  }

  getProduct(product: Product): Product | undefined {
    return this.cartProducts.find((p: Product) => p.id == product.id);
  }

  getAllProducts(): Product[] {
    return this.cartProducts;
  }

  emptyCart(): Product[] {
    this.cartProducts = [];
    return this.cartProducts;
  }

  getTotalPrice(): number {
    const totalPrice = this.cartProducts.reduce((sum: number, product: Product) => sum + product.price * product.amount, 0);
    return totalPrice;
  }

  deleteProduct(product: Product): void {
    const index = this.cartProducts.findIndex((p: Product) => p.id == product.id);
    this.cartProducts.splice(index, 1);
  }
}
