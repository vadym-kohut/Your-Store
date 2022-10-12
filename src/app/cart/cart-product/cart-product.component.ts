import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Component({
    selector: 'app-cart-product',
    templateUrl: './cart-product.component.html',
    styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent {
    @Input()
    cartProducts$ = new Observable<Product[]>();

    @Output()
    removeFromCartEvent = new EventEmitter<Product>();

    constructor() { }

    removeFromCart(product: Product): void {
        this.removeFromCartEvent.emit(product);
    }
}
