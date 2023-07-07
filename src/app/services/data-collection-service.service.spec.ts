import { TestBed } from '@angular/core/testing';

import { DataCollectionServiceService } from './data-collection-service.service';

describe('DataCollectionServiceService', () => {
  let service: DataCollectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCollectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
