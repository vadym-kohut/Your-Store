import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/interfaces/product";

export const addToWatchlist = createAction(
    '[Watchlist] Add To Watchlist',
    props<{ product: Product }>()
);

export const removeFromWatchlist = createAction(
    '[Watchlist] Remove From Watchlist',
    props<{ product: Product }>()
);
