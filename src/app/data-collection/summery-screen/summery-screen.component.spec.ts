import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeryScreenComponent } from './summery-screen.component';

describe('SummeryScreenComponent', () => {
  let component: SummeryScreenComponent;
  let fixture: ComponentFixture<SummeryScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummeryScreenComponent]
    });
    fixture = TestBed.createComponent(SummeryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
