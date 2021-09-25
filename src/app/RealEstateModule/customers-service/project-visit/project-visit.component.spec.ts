import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectVisitComponent } from './project-visit.component';

describe('ProjectVisitComponent', () => {
  let component: ProjectVisitComponent;
  let fixture: ComponentFixture<ProjectVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
