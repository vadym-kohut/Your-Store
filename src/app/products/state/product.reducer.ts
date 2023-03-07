import {
    createFeatureSelector,
    createReducer,
    createSelector,
    on,
} from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';
import * as AppState from '../../state/app.state';
import * as ProductActions from './product.actions';

export interface State extends AppState.State {
    product: ProductState;
}

export interface ProductState {
    productList: Product[];
}

const initialState: ProductState = {
    productList: [],
};

// Selectors
const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(
    getProductFeatureState,
    (state) => state.productList
);

export const productReducer = createReducer(
    initialState,
    on(ProductActions.loadProductsSuccess, (state, action): ProductState => {
        return {
            ...state,
            productList: action.products,
        };
    })
);
