import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-watchlist-product',
  templateUrl: './watchlist-product.component.html',
  styleUrls: ['./watchlist-product.component.css'],
})
export class WatchlistProductComponent implements OnInit {
  @Input()
  watchlistProducts$ = new Observable<Product[]>();

  @Output()
  removeFromWatchlistEvent = new EventEmitter<Product>();

  @Output()
  addToCartEvent = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  removeFromWatchlist(product: Product): void {
    this.removeFromWatchlistEvent.emit(product);
  }

  addToCart(product: Product): void {
    this.addToCartEvent.emit(product);
  }
}
