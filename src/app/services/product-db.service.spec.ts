import { TestBed } from '@angular/core/testing';

import { ProductDbService } from './product-db.service';

describe('ProductDbService', () => {
    let service: ProductDbService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ProductDbService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
