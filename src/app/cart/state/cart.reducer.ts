import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "src/app/interfaces/product";
import * as AppState from "../../state/app.state";
import * as CartActions from "./cart.actions";

export interface State extends AppState.State {
    cart: CartState;
}

export interface CartState {
    cartProducts: Product[];
    deliveryDate: string;
}

const initialState: CartState = {
    cartProducts: [],
    deliveryDate: ''
}

// Selectors
const getCartFeatureState = createFeatureSelector<CartState>('cart');

export const getCartProducts = createSelector(
    getCartFeatureState,
    state => state.cartProducts
);

export const getDeliveryDate = createSelector(
    getCartFeatureState,
    state => state.deliveryDate
);

// Reducer
export const cartReducer = createReducer(
    initialState,
    on(CartActions.addToCart, (state, action): CartState => {
        return {
            ...state,
            cartProducts: [...state.cartProducts, action.product]
        }
    }),
    on(CartActions.removeFromCart, (state, action): CartState => {
        return {
            ...state,
            cartProducts: state.cartProducts.filter(product => product !== action.product)
        }
    })
);
