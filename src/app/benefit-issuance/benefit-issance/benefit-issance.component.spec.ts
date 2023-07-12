import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitIssanceComponent } from './benefit-issance.component';

describe('BenefitIssanceComponent', () => {
  let component: BenefitIssanceComponent;
  let fixture: ComponentFixture<BenefitIssanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitIssanceComponent]
    });
    fixture = TestBed.createComponent(BenefitIssanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
