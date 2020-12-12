import { TestBed } from '@angular/core/testing';

import { ValidationLibService } from './validation-lib.service';

describe('ValidationLibService', () => {
  let service: ValidationLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
