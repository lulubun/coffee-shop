import { TestBed } from '@angular/core/testing';

import { OrderTotalService } from './order-total.service';

describe('OrderTotalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderTotalService = TestBed.get(OrderTotalService);
    expect(service).toBeTruthy();
  });
});
