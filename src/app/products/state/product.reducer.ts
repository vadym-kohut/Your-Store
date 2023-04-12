import {
    createFeatureSelector,
    createReducer,
    createSelector,
    on
} from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';
import * as AppState from '../../state/app.state';
import * as ProductActions from './product.actions';
import { ProductImageData } from '../../interfaces/productImageData';

export interface State extends AppState.State {
    product: ProductState;
}

export interface ProductState {
    productList: Product[];
    categoryList: string[];
    productDetails: Product | null;
    productImages: ProductImageData | null;
}

const initialState: ProductState = {
    productList: [],
    categoryList: [],
    productDetails: null,
    productImages: null
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

export const getProductDetails = createSelector(
  getProductFeatureState,
    (state) => state.productDetails
);

// REDUCER
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
    }),
    on(ProductActions.loadProductDetailsSuccess, (state, action): ProductState => {
        return {
            ...state,
            productDetails: action.product
        }
    }),
);
