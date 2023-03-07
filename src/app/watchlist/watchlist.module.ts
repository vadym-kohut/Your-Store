import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchlistRoutingModule } from './watchlist-routing.module';
import { WatchlistComponent } from './watchlist.component';
import { WatchlistProductComponent } from './watchlist-product/watchlist-product.component';
import { StoreModule } from '@ngrx/store';
import { watchlistReducer } from './state/watchlist.reducer';

@NgModule({
    declarations: [WatchlistComponent, WatchlistProductComponent],
    imports: [
        CommonModule,
        WatchlistRoutingModule,
        StoreModule.forFeature('watchlist', watchlistReducer),
    ],
})
export class WatchlistModule {}
