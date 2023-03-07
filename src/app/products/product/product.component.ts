import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
    selector: 'ys-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
})
export class ProductComponent {
    @Input()
    product!: Product;

    @Output()
    addToWatchlistEvent = new EventEmitter<Product>();

    @Output()
    addToCartEvent = new EventEmitter<Product>();

    addToWatchlist(product: Product) {
        this.addToWatchlistEvent.emit(product);
    }

    addToCart(product: Product) {
        this.addToCartEvent.emit(product);
    }
}
