import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from '../interfaces/product';
import * as CartActions from '../cart/state/cart.actions';
import { Store } from '@ngrx/store';
import { State } from '../products/state/product.reducer';
import * as WatchlistActions from '../watchlist/state/watchlist.actions';
import { HttpClient } from '@angular/common/http';

export interface ProductImageData {
    previewImageSrc: string;
    thumbnailImageSrc: string;
    alt: string;
    title: string;
}

@Component({
    selector: 'ys-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
    chosenProduct!: Product;
    chosenProductId!: number;
    chosenProductImages!: ProductImageData[];

    constructor(
        private route: ActivatedRoute,
        private store: Store<State>,
        private  http: HttpClient
    ) { }

    ngOnInit(): void {
        this.route.params
            .pipe(switchMap((params) => this.getProductById$(params['id'])))
            .subscribe((product) => {
                this.chosenProduct = product;
                this.chosenProductImages = this.chosenProduct.images.map(
                    (img, i) => ({
                        previewImageSrc: img,
                        thumbnailImageSrc: img,
                        alt: `Image ${i}`,
                        title: `Image ${i}`,
                    })
                );
            });
    }

    addToWatchlist(product: Product): void {
        this.store.dispatch(WatchlistActions.addToWatchlist({ product }));
    }

    addToCart(product: Product): void {
        this.store.dispatch(CartActions.addToCart({ product }));
    }

    //!! MOVE TO PRODUCT STATE
    getProductById$(id: number): Observable<Product> {
        return this.http.get<Product>(`https://dummyjson.com/products/${id}`);
    }
}
