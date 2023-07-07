import { TestBed } from '@angular/core/testing';

import { AppRegServiceService } from './app-reg-service.service';

describe('AppRegServiceService', () => {
  let service: AppRegServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppRegServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
