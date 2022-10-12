import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchlistRoutingModule } from './watchlist-routing.module';
import { WatchlistComponent } from './watchlist.component';
import { WatchlistProductComponent } from './watchlist-product/watchlist-product.component';


@NgModule({
  declarations: [
    WatchlistComponent,
    WatchlistProductComponent
  ],
  imports: [
    CommonModule,
    WatchlistRoutingModule
  ]
})
export class WatchlistModule { }
