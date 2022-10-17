import { cartReducer, CartState } from "../cart/state/cart.reducer";
import { productReducer, ProductState } from "../products/state/product.reducer";
import { watchlistReducer, WatchlistState } from "../watchlist/state/watchlist.reducer";

export interface State {
    cart: CartState;
    products: ProductState;
    watchlist: WatchlistState;
}

export const appReducer = {
    cart: cartReducer,
    products: productReducer,
    watchlist: watchlistReducer
}
