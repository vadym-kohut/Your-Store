import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { CartDBService } from '../services/cart-db.service';
import { UserDBService } from '../services/user-db.service';
import { WatchlistDBService } from '../services/watchlist-db.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartProductsNumber$ = new Observable<number>();
  watchlistProductNumber$ = new Observable<number>();
  userData$ = new Observable<User | undefined>();

  constructor(
    private cartDB: CartDBService,
    private watchlistDB: WatchlistDBService,
    private userDB: UserDBService
  ) { }

  ngOnInit(): void {
    this.cartProductsNumber$ = this.cartDB.getCartProductsNumber$();
    this.watchlistProductNumber$ = this.watchlistDB.getWatchlistProductNumber$();
    this.userData$ = this.userDB.getUserData$();
  }
}
