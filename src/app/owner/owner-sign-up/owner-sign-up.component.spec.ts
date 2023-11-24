import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSIgnUpComponent } from './owner-sign-up.component';

describe('OwnerSIgnUpComponent', () => {
  let component: OwnerSIgnUpComponent;
  let fixture: ComponentFixture<OwnerSIgnUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerSIgnUpComponent]
    });
    fixture = TestBed.createComponent(OwnerSIgnUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
