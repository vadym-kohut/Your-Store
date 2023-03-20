import {
    createFeatureSelector,
    createReducer,
    createSelector,
    on
} from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';
import * as AppState from '../../state/app.state';
import * as ProductActions from './product.actions';

export interface State extends AppState.State {
    product: ProductState;
}

export interface ProductState {
    productList: Product[];
    categoryList: string[];
}

const initialState: ProductState = {
    productList: [],
    categoryList: []
};

// SELECTORS
const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(
    getProductFeatureState,
    (state) => state.productList
);

export const getCategories = createSelector(
    getProductFeatureState,
    (state) => state.categoryList
);

export const productReducer = createReducer(
    initialState,
    on(ProductActions.loadProductsSuccess, (state, action): ProductState => {
        return {
            ...state,
            productList: action.products
        };
    }),
    on(ProductActions.loadCategoriesSuccess, (state, action): ProductState => {
        return {
            ...state,
            categoryList: action.categories
        };
    })
);
