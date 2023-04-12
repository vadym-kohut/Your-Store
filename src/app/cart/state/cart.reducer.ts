import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';
import * as AppState from '../../state/app.state';
import * as CartActions from './cart.actions';

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
};

// SELECTORS
const getCartFeatureState = createFeatureSelector<CartState>('cart');

export const getCartProducts = createSelector(
    getCartFeatureState,
    (state) => state.cartProducts
);

export const getDeliveryDate = createSelector(
    getCartFeatureState,
    state=> state.deliveryDate
);

export const getCartProductNumber = createSelector(
    getCartFeatureState,
    (state) => state.cartProducts.length
);

export const getCartProductsTotalAmount = createSelector(
    getCartFeatureState,
    (state) => {
        if (state.cartProducts.length) {
            return state.cartProducts
                .map((product) => product.price)
                .reduce((prev, next) => prev + next);
        } else {
            return 0;
        }
    }
);

// REDUCER
export const cartReducer = createReducer(
    initialState,
    on(CartActions.addToCart, (state, action): CartState => {
        if (
            !state.cartProducts.find(
                (element) => element.id === action.product.id
            )
        ) {
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.product]
            };
        } else {
            return {
                ...state
            };
        }
    }),
    on(CartActions.removeFromCart, (state, action): CartState => {
        return {
            ...state,
            cartProducts: state.cartProducts.filter(
                (product) => product !== action.product
            )
        };
    })
);
