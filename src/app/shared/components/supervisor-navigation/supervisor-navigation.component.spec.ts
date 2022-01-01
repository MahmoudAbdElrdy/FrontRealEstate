import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorNavigationComponent } from './supervisor-navigation.component';

describe('SupervisorNavigationComponent', () => {
  let component: SupervisorNavigationComponent;
  let fixture: ComponentFixture<SupervisorNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
