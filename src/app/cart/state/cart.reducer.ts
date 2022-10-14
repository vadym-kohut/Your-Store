import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "src/app/interfaces/product";
import * as AppState from "../../state/app.state";
import * as CartActions from "./cart.actions";

export interface State extends AppState.State {
    cart: CartState;
}

export interface CartState {
    cartProducts: Product[];
    cartProductsNumber: number;
    cartProductsTotalAmount: number;
    deliveryDate: string;
}

const initialState: CartState = {
    cartProducts: [],
    cartProductsNumber: 0,
    cartProductsTotalAmount: 0,
    deliveryDate: ''
}

// Selectors
const getCartFeatureState = createFeatureSelector<CartState>('cart');

export const getCartProducts = createSelector(
    getCartFeatureState,
    state => state.cartProducts
);

export const getCartProductsNumber = createSelector(
    getCartFeatureState,
    state => state.cartProductsNumber
);

export const getCartProductsTotalAmount = createSelector(
    getCartFeatureState,
    state => state.cartProductsTotalAmount
);

export const getDeliveryDate = createSelector(
    getCartFeatureState,
    state => state.deliveryDate
);

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