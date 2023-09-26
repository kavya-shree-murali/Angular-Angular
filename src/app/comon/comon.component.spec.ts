import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComonComponent } from './comon.component';

describe('ComonComponent', () => {
  let component: ComonComponent;
  let fixture: ComponentFixture<ComonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComonComponent]
    });
    fixture = TestBed.createComponent(ComonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
