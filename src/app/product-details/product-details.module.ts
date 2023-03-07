import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { StarsComponent } from '../standalone/stars/stars.component';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
    declarations: [ProductDetailsComponent],
    imports: [
        CommonModule,
        ProductDetailsRoutingModule,
        StarsComponent,
        GalleriaModule,
    ],
})
export class ProductDetailsModule {}
