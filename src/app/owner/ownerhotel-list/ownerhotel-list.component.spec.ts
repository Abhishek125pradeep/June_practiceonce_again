import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerhotelListComponent } from './ownerhotel-list.component';

describe('OwnerhotelListComponent', () => {
  let component: OwnerhotelListComponent;
  let fixture: ComponentFixture<OwnerhotelListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerhotelListComponent]
    });
    fixture = TestBed.createComponent(OwnerhotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
