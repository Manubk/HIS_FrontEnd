import { TestBed } from '@angular/core/testing';

import { PlanCategoryServiceService } from './plan-category-service.service';

describe('PlanCategoryServiceService', () => {
  let service: PlanCategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanCategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
