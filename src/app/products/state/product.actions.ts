import { createAction, props } from '@ngrx/store';
import { Product, ProductCategory } from 'src/app/interfaces/product';

// LOAD PRODUCTS
export const loadProducts = createAction(
    '[Products] Load Products'
);

export const loadProductsSuccess = createAction(
    '[Products] Load Products Success',
    props<{ products: Product[] }>()
);

// LOAD CATEGORIES
export const loadCategories = createAction(
    '[Products] Load Categories'
);

export const loadCategoriesSuccess = createAction(
    '[Products] Load Categories Success',
    props<{ categories: ProductCategory[] }>()
);

// LOAD PRODUCT DETAILS
export const loadProductDetails = createAction(
    '[Products] Load Product Details',
    props<{ id: number }>()
);

export const loadProductDetailsSuccess = createAction(
    '[Products] Load Product Details Success',
    props<{ product: Product }>()
);
