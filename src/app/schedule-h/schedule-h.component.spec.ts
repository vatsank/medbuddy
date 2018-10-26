import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleHComponent } from './schedule-h.component';

describe('ScheduleHComponent', () => {
  let component: ScheduleHComponent;
  let fixture: ComponentFixture<ScheduleHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
