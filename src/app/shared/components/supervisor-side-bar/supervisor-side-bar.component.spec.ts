import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorSideBarComponent } from './supervisor-side-bar.component';

describe('SupervisorSideBarComponent', () => {
  let component: SupervisorSideBarComponent;
  let fixture: ComponentFixture<SupervisorSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
