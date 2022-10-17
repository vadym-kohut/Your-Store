import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';
import { State } from '../state/product.reducer';
import * as CartActions from '../../cart/state/cart.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product!: Product;

  @Output()
  addToWatchlistEvent = new EventEmitter<Product>();

  @Output()
  addToCartEvent = new EventEmitter<Product>();

  constructor(private store: Store<State>) { }

  addToWatchlist(product: Product) {
    this.addToWatchlistEvent.emit(product);
  }

  addToCart(product: Product) {
    this.store.dispatch(CartActions.addToCart({ product }));
  }

}
