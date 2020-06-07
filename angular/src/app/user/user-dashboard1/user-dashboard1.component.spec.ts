import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboard1Component } from './user-dashboard1.component';

describe('UserDashboard1Component', () => {
  let component: UserDashboard1Component;
  let fixture: ComponentFixture<UserDashboard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
