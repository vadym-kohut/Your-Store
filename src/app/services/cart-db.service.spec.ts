import { TestBed } from '@angular/core/testing';

import { CartDbService } from './cart-db.service';

describe('CartDbService', () => {
  let service: CartDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
