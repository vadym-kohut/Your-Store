import { TestBed } from '@angular/core/testing';

import { ToastDbService } from './toast-db.service';

describe('ToastDbService', () => {
    let service: ToastDbService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ToastDbService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
