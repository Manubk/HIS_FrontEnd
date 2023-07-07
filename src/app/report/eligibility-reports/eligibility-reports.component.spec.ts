import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityReportsComponent } from './eligibility-reports.component';

describe('EligibilityReportsComponent', () => {
  let component: EligibilityReportsComponent;
  let fixture: ComponentFixture<EligibilityReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EligibilityReportsComponent]
    });
    fixture = TestBed.createComponent(EligibilityReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
