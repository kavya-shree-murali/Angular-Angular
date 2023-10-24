import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StangaloneComponent } from './stangalone.component';

describe('StangaloneComponent', () => {
  let component: StangaloneComponent;
  let fixture: ComponentFixture<StangaloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StangaloneComponent]
    });
    fixture = TestBed.createComponent(StangaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
