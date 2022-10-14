import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    CartComponent,
    CartProductComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    StoreModule.forFeature('cart', {})
  ]
})
export class CartModule { }
