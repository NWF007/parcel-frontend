import { TestBed } from '@angular/core/testing';

import { EmployeejobService } from './employeejob.service';

describe('EmployeejobService', () => {
  let service: EmployeejobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeejobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
