import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeejobComponent } from './employeejob.component';

describe('EmployeejobComponent', () => {
  let component: EmployeejobComponent;
  let fixture: ComponentFixture<EmployeejobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeejobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
