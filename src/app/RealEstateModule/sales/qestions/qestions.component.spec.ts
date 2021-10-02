import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QestionsComponent } from './qestions.component';

describe('QestionsComponent', () => {
  let component: QestionsComponent;
  let fixture: ComponentFixture<QestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
