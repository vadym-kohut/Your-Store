import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'cart',
        loadChildren: () =>
            import('./cart/cart.module').then((m) => m.CartModule),
    },
    {
        path: 'watchlist',
        loadChildren: () =>
            import('./watchlist/watchlist.module').then(
                (m) => m.WatchlistModule
            ),
    },
    {
        path: 'products',
        loadChildren: () =>
            import('./products/products.module').then((m) => m.ProductsModule),
    },
    {
        path: 'user',
        loadChildren: () =>
            import('./user/user.module').then((m) => m.UserModule),
    },
    {
        path: 'product-details/:id',
        loadChildren: () =>
            import('./product-details/product-details.module').then(
                (m) => m.ProductDetailsModule
            ),
    },
    { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
