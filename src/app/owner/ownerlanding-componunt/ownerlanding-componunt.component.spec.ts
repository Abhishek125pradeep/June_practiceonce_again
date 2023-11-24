import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerlandingComponuntComponent } from './ownerlanding-componunt.component';

describe('OwnerlandingComponuntComponent', () => {
  let component: OwnerlandingComponuntComponent;
  let fixture: ComponentFixture<OwnerlandingComponuntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerlandingComponuntComponent]
    });
    fixture = TestBed.createComponent(OwnerlandingComponuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
