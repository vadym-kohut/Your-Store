import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { getWatchlistProducts, State } from './state/watchlist.reducer';
import * as CartActions from '../cart/state/cart.actions';
import * as WatchlistActions from './state/watchlist.actions';

@Component({
    selector: 'app-watchlist',
    templateUrl: './watchlist.component.html',
    styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
    watchlistProducts$ = new Observable<Product[]>();

    constructor(private store: Store<State>) {}

    ngOnInit(): void {
        this.watchlistProducts$ = this.store.select(getWatchlistProducts);
    }

    removeFromWatchlist(product: Product): void {
        this.store.dispatch(WatchlistActions.removeFromWatchlist({ product }));
    }

    addToCart(product: Product): void {
        this.store.dispatch(CartActions.addToCart({ product }));
    }
}
