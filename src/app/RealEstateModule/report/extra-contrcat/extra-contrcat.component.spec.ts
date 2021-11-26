import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraContrcatComponent } from './extra-contrcat.component';

describe('ExtraContrcatComponent', () => {
  let component: ExtraContrcatComponent;
  let fixture: ComponentFixture<ExtraContrcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraContrcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraContrcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
