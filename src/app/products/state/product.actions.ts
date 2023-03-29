import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';

export const loadProducts = createAction('[Products] Load Products');

export const loadProductsSuccess = createAction(
    '[Products] Load Products Success',
    props<{ products: Product[] }>()
);

export const loadCategories = createAction('[Products] Load Categories');

export const loadCategoriesSuccess = createAction(
    '[Products] Load Categories Success',
    props<{ categories: string[] }>()
);

export const loadProductById = createAction(
    '[Products] Get Product By Id',
    props<{ product: Product }>()
);
