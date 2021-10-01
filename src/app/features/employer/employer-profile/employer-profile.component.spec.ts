import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerProfileComponent } from './employer-profile.component';

describe('EmployerProfileComponent', () => {
  let component: EmployerProfileComponent;
  let fixture: ComponentFixture<EmployerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
