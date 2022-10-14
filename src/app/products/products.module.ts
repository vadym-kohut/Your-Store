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


@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesComponent,
    FiltersComponent,
    ProductComponent,
    IsUserLoggedDirective
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    StarsComponent,
    StoreModule.forFeature('products', {})
  ]
})
export class ProductsModule { }
