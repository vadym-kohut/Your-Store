import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { CartDBService } from '../services/cart-db.service';

import * as CartActions from "./state/cart.actions";
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts$!: Observable<Product[]>;
  cartProductsNumber$!: Observable<number>;
  cartProductsTotalAmount$!: Observable<number>;
  deliveryDate = this.getDeliveryDate();

  constructor(
    private cartDB: CartDBService,
    private store: Store<any> //! change to State
  ) { }

  ngOnInit(): void {
    this.cartProducts$ = this.cartDB.getCartProducts$();
    this.cartProductsNumber$ = this.cartDB.getCartProductsNumber$();
    this.cartProductsTotalAmount$ = this.cartDB.getCartProductsTotalAmount$();
  }

  removeFromCart(product: Product): void {
    this.cartDB.removeFromCart(product);
  }

  getDeliveryDate(): string {
    function padTo2Digits(num: number) {
      return num.toString().padStart(2, '0');
    }
    const date = new Date(new Date().setDate(new Date().getDate() + 2));
    return [
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('/');
  }
}
