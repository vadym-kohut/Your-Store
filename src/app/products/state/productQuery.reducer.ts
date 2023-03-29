import * as AppState from '../../state/app.state';
import * as ProductQueryActions from './productQuery.actions';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export interface State extends AppState.State {
    productQuery: ProductQueryState;
}

export interface ProductQueryState {
    searchQuery: string;
    categoryQuery: string;
    sortQuery: string;
    priceFromQuery: number | null;
    priceToQuery: number | null;
    ratingQuery: string;
}

const initialState: ProductQueryState = {
    searchQuery: '',
    categoryQuery: '',
    sortQuery: 'featured',
    priceFromQuery: null,
    priceToQuery: null,
    ratingQuery: ''
};

// SELECTORS
const getProductQueryFeatureState = createFeatureSelector<ProductQueryState>('product query');

export const getProductQuery = createSelector(
    getProductQueryFeatureState,
    state => state
);

export const getProductCategoryQuery = createSelector(
    getProductQueryFeatureState,
    state => state.categoryQuery
);

// REDUCER
export const productQueryReducer = createReducer(
    initialState,
    on(ProductQueryActions.setProductQuery, (state, actions): ProductQueryState => {
        return {
            ...state,
            ...actions
        };
    })
);
