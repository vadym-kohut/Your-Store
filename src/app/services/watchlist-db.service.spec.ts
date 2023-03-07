import { TestBed } from '@angular/core/testing';

import { WatchlistDbService } from './watchlist-db.service';

describe('WatchlistDbService', () => {
    let service: WatchlistDbService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WatchlistDbService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
