import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CategoriesComponent } from './categories/categories.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IsUserLoggedDirective } from '../directives/is-user-logged.directive';
import { StarsComponent } from '../standalone/stars/stars.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/product.effects';

@NgModule({
    declarations: [
        ProductsComponent,
        CategoriesComponent,
        FiltersComponent,
        ProductComponent,
        IsUserLoggedDirective,
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        ReactiveFormsModule,
        StarsComponent,
        StoreModule.forFeature('products', productReducer),
        EffectsModule.forFeature([ProductEffects]),
    ],
})
export class ProductsModule {}
