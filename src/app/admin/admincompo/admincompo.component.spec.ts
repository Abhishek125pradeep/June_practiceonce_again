import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincompoComponent } from './admincompo.component';

describe('AdmincompoComponent', () => {
  let component: AdmincompoComponent;
  let fixture: ComponentFixture<AdmincompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmincompoComponent]
    });
    fixture = TestBed.createComponent(AdmincompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
