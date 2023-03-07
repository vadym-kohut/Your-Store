import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/interfaces/product';

@Component({
    selector: 'app-stars',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.css'],
})
export class StarsComponent implements OnInit {
    productRating!: number;
    starNumber!: number;
    emptyStarNumber!: number;

    @Input() product!: Product;

    constructor() {}

    ngOnInit(): void {
        this.productRating = this.product.rating;
        this.convertRatingToStars(this.productRating);
        this.emptyStarNumber = 5 - this.starNumber;
    }

    convertRatingToStars(rating: number) {
        if (rating >= 4 && rating <= 4.2) {
            this.starNumber = 1;
        } else if (rating > 4.2 && rating <= 4.4) {
            this.starNumber = 2;
        } else if (rating > 4.4 && rating <= 4.6) {
            this.starNumber = 3;
        } else if (rating > 4.6 && rating <= 4.8) {
            this.starNumber = 4;
        } else if (rating > 4.8) {
            this.starNumber = 5;
        }
    }
}
