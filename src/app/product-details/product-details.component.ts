import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { Store } from '@ngrx/store';
import { getProductDetails, State } from '../products/state/product.reducer';
import * as WatchlistActions from '../watchlist/state/watchlist.actions';
import * as CartActions from '../cart/state/cart.actions';
import * as ProductActions from '../products/state/product.actions';

@Component({
    selector: 'ys-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    productDetails$: Observable<Product | null> = this.store.select(getProductDetails);

    constructor(
        private route: ActivatedRoute,
        private store: Store<State>
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const id = Number(params['id']);
            this.store.dispatch(ProductActions.loadProductDetails({ id }));
        });
    }

    addToWatchlist(product: Product): void {
        this.store.dispatch(WatchlistActions.addToWatchlist({ product }));
    }

    addToCart(product: Product): void {
        this.store.dispatch(CartActions.addToCart({ product }));
    }
}
