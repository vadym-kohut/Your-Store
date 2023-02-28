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
    watchlistProducts: [{
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    }]
}

// Selectors
const getWatchlistFeatureState = createFeatureSelector<WatchlistState>('watchlist');

export const getWatchlistProducts = createSelector(
    getWatchlistFeatureState,
    state => state.watchlistProducts
);

export const getWatchlistProductNumber = createSelector(
    getWatchlistFeatureState,
    state => state.watchlistProducts.length
);

// Reducer
export const watchlistReducer = createReducer(
    initialState,
    on(WatchlistActions.addToWatchlist, (state, action): WatchlistState => {
        if (!state.watchlistProducts.find(element => element.id === action.product.id)) {
            return {
                ...state,
                watchlistProducts: [...state.watchlistProducts, action.product]
            }
        } else {
            return {
                ...state
            }
        }
    }),
    on(WatchlistActions.removeFromWatchlist, (state, action): WatchlistState => {
        return {
            ...state,
            watchlistProducts: state.watchlistProducts.filter(product => product !== action.product)
        }
    })
);
