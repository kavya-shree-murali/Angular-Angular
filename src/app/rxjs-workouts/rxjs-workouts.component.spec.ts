import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsWorkoutsComponent } from './rxjs-workouts.component';

describe('RxjsWorkoutsComponent', () => {
  let component: RxjsWorkoutsComponent;
  let fixture: ComponentFixture<RxjsWorkoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsWorkoutsComponent]
    });
    fixture = TestBed.createComponent(RxjsWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
