import { TestBed } from '@angular/core/testing';

import { QueryDbService } from './query-db.service';

describe('QueryDbService', () => {
  let service: QueryDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
