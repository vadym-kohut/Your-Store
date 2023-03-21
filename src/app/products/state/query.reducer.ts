import * as AppState from '../../state/app.state';
import * as ProductQueryActions from './query.actions';
import { ProductQuery } from '../../interfaces/product-query';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export interface State extends AppState.State {
    productQuery: ProductQueryState;
}

export interface ProductQueryState {
    productQuery: ProductQuery;
}

const initialState: ProductQueryState = {
    productQuery: {
        searchQuery: '',
        categoryQuery: '',
        sortQuery: 'featured',
        priceFromQuery: null,
        priceToQuery: null,
        ratingQuery: ''
    }
};

// SELECTORS
const getProductQueryFeatureState = createFeatureSelector<ProductQueryState>('product query');

export const getProductQuery = createSelector(
    getProductQueryFeatureState,
    state => state.productQuery
);

export const getProductCategoryQuery = createSelector(
    getProductQueryFeatureState,
    state => state.productQuery.categoryQuery
);

// REDUCER
export const productQueryReducer = createReducer(
    initialState,
    on(ProductQueryActions.setProductQuery, (state, actions): ProductQueryState => {
        return {
            ...state,
            productQuery: { ...state.productQuery, ...actions }
        };
    })
);
