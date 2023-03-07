import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Component({
    selector: 'ys-watchlist-product',
    templateUrl: './watchlist-product.component.html',
    styleUrls: ['./watchlist-product.component.css'],
})
export class WatchlistProductComponent {
    @Input()
    watchlistProducts$ = new Observable<Product[]>();

    @Output()
    removeFromWatchlistEvent = new EventEmitter<Product>();

    @Output()
    addToCartEvent = new EventEmitter<Product>();

    removeFromWatchlist(product: Product): void {
        this.removeFromWatchlistEvent.emit(product);
    }

    addToCart(product: Product): void {
        this.addToCartEvent.emit(product);
    }
}
