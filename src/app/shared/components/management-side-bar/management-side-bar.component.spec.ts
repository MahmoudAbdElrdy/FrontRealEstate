import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSideBarComponent } from './management-side-bar.component';

describe('ManagementSideBarComponent', () => {
  let component: ManagementSideBarComponent;
  let fixture: ComponentFixture<ManagementSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
