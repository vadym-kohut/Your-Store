import { TestBed } from '@angular/core/testing';

import { CategoryDbService } from './category-db.service';

describe('CategoryDbService', () => {
    let service: CategoryDbService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CategoryDbService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
