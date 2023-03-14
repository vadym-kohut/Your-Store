import {
    createFeatureSelector,
    createReducer,
    createSelector,
    on
} from '@ngrx/store';
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
    cartProducts: [
        {
            id: 19,
            title: 'Skin Beauty Serum.',
            description:
                'Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m',
            price: 46,
            discountPercentage: 10.68,
            rating: 4.42,
            stock: 54,
            brand: 'ROREC White Rice',
            category: 'skincare',
            thumbnail: 'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
            images: [
                'https://i.dummyjson.com/data/products/19/1.jpg',
                'https://i.dummyjson.com/data/products/19/2.jpg',
                'https://i.dummyjson.com/data/products/19/3.png',
                'https://i.dummyjson.com/data/products/19/thumbnail.jpg'
            ]
        },
        {
            'id': 29,
            'title': 'Handcraft Chinese style',
            'description': 'Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate',
            'price': 60,
            'discountPercentage': 15.34,
            'rating': 4.44,
            'stock': 7,
            'brand': 'luxury palace',
            'category': 'home-decoration',
            'thumbnail': 'https://i.dummyjson.com/data/products/29/thumbnail.webp',
            'images': [
                'https://i.dummyjson.com/data/products/29/1.jpg',
                'https://i.dummyjson.com/data/products/29/2.jpg',
                'https://i.dummyjson.com/data/products/29/3.webp',
                'https://i.dummyjson.com/data/products/29/4.webp',
                'https://i.dummyjson.com/data/products/29/thumbnail.webp'
            ]
        }
    ],
    deliveryDate: ''
};

// Selectors
const getCartFeatureState = createFeatureSelector<CartState>('cart');

export const getCartProducts = createSelector(
    getCartFeatureState,
    (state) => state.cartProducts
);

export const getDeliveryDate = createSelector(
    getCartFeatureState,
    (state) => state.deliveryDate
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

// Reducer
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
