import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationLibComponent } from './validation-lib.component';

describe('ValidationLibComponent', () => {
  let component: ValidationLibComponent;
  let fixture: ComponentFixture<ValidationLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
