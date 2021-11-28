import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearContrcatComponent } from './year-contrcat.component';

describe('YearContrcatComponent', () => {
  let component: YearContrcatComponent;
  let fixture: ComponentFixture<YearContrcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearContrcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearContrcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
