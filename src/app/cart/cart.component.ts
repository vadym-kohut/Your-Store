import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

import * as CartActions from "./state/cart.actions";
import { Store } from '@ngrx/store';
import { getCartProductNumber, getCartProducts, getCartProductsTotalAmount, State } from './state/cart.reducer';

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
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.cartProducts$ = this.store.select(getCartProducts);
    this.cartProductsNumber$ = this.store.select(getCartProductNumber);
    this.cartProductsTotalAmount$ = this.store.select(getCartProductsTotalAmount);
  }

  removeFromCart(product: Product): void {
    this.store.dispatch(CartActions.removeFromCart({ product }));
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
