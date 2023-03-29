import { cartReducer, CartState } from '../cart/state/cart.reducer';
import {
    productReducer,
    ProductState,
} from '../products/state/product.reducer';
import { userReducer, UserState } from '../user/state/user.reducer';
import {
    watchlistReducer,
    WatchlistState,
} from '../watchlist/state/watchlist.reducer';
import {  ProductQueryState } from '../products/state/productQuery.reducer';

export interface State {
    cart: CartState;
    products: ProductState;
    watchlist: WatchlistState;
    user: UserState;
    productQuery: ProductQueryState;
}

export const appReducer = {
    cart: cartReducer,
    products: productReducer,
    watchlist: watchlistReducer,
    user: userReducer,
    // productQuery: productQueryReducer
};
