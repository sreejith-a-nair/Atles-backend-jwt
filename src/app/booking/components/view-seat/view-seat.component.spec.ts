import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSeatComponent } from './view-seat.component';

describe('ViewSeatComponent', () => {
  let component: ViewSeatComponent;
  let fixture: ComponentFixture<ViewSeatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSeatComponent]
    });
    fixture = TestBed.createComponent(ViewSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
