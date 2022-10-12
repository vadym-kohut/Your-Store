import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { CartDBService } from '../services/cart-db.service';
import { WatchlistDBService } from '../services/watchlist-db.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  watchlistProducts$ = new Observable<Product[]>();

  constructor(
    private watchlistDB: WatchlistDBService,
    private cartDB: CartDBService
  ) {}

  ngOnInit(): void {
    this.watchlistProducts$ = this.watchlistDB.getWatchlist$();
  }

  removeFromWatchlist(product: Product): void {
    this.watchlistDB.removeFromWatchlist(product);
  }

  addToCart(product: Product): void {
    this.cartDB.addToCart(product);
  }
}
