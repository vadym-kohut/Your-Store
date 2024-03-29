import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCartProductNumber } from '../cart/state/cart.reducer';
import { UserData } from '../interfaces/user-data';
import { State } from '../state/app.state';
import { getUserData } from '../user/state/user.reducer';
import { getWatchlistProductNumber } from '../watchlist/state/watchlist.reducer';

@Component({
    selector: 'ys-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    cartProductsNumber$ = new Observable<number>();
    watchlistProductNumber$ = new Observable<number>();
    userData$ = new Observable<UserData | undefined>();

    constructor(private store: Store<State>) {
    }

    ngOnInit(): void {
        this.cartProductsNumber$ = this.store.select(getCartProductNumber);
        this.watchlistProductNumber$ = this.store.select(getWatchlistProductNumber);
        this.userData$ = this.store.select(getUserData);
    }
}
