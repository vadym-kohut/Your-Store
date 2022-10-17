import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "src/app/interfaces/product";
import * as AppState from "../../state/app.state";
import * as WatchlistActions from './watchlist.actions';

export interface State extends AppState.State {
    watchlist: WatchlistState;
}

export interface WatchlistState {
    watchlistProducts: Product[];
}

const initialState: WatchlistState = {
    watchlistProducts: []
}

// Selectors
const getWatchlistFeatureState = createFeatureSelector<WatchlistState>('watchlist');

export const getWatchlistProducts = createSelector(
    getWatchlistFeatureState,
    state => state.watchlistProducts
);

// Reducer
export const watchlistReducer = createReducer(
    initialState,
    on(WatchlistActions.addToWatchlist, (state, action): WatchlistState => {
        return {
            ...state,
            watchlistProducts: [...state.watchlistProducts, action.product]
        }
    }),
    on(WatchlistActions.removeFromWatchlist, (state, action): WatchlistState => {
        return {
            ...state,
            watchlistProducts: state.watchlistProducts.filter(product => product !== action.product)
        }
    })
);
