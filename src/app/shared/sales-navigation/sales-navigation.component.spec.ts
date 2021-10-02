import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesNavigationComponent } from './sales-navigation.component';

describe('SalesNavigationComponent', () => {
  let component: SalesNavigationComponent;
  let fixture: ComponentFixture<SalesNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
