import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsDetailsComponent } from './kids-details.component';

describe('KidsDetailsComponent', () => {
  let component: KidsDetailsComponent;
  let fixture: ComponentFixture<KidsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidsDetailsComponent]
    });
    fixture = TestBed.createComponent(KidsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
