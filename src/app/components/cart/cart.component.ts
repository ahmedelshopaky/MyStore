import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { CartService } from 'src/app/services/cart.service';
import { User } from 'src/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  user: User;
  products: Product[] = [];
  totalPrice: number = 0;

  creditNumberMaxLength: boolean = false;
  creditNumberMinLength: boolean = false;
  validateCreditNumber(arg: number) {
    this.creditNumberMaxLength = arg.toString().length > 16;
    this.creditNumberMinLength = arg.toString().length < 16;
  }
  constructor(
    private cart: CartService,
    private userService: UserService,
    private router: Router
  ) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.products = this.cart.getAllProducts();
    this.totalPrice = this.cart.getTotalPrice();
  }

  handleAmountChange(product: Product) {
    if (product.amount < 1) {
      this.cart.deleteProduct(product);
      alert('Removed from the cart!');
    }
    this.cart.changeAmount(product);
    this.totalPrice = this.cart.getTotalPrice();
  }

  submit(_user: User) {
    _user.totalPaid = this.totalPrice;
    _user.products = this.products;
    this.userService.create(_user);
    this.emptyCart();
    this.router.navigate(['confirmation'], {
      queryParams: { name: _user.name, price: _user.totalPaid },
    });
  }

  emptyCart() {
    this.products = this.cart.emptyCart();
    this.totalPrice = this.cart.getTotalPrice();
  }
}
