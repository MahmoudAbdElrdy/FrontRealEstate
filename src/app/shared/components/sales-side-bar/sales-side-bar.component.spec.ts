import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSideBarComponent } from './sales-side-bar.component';

describe('SalesSideBarComponent', () => {
  let component: SalesSideBarComponent;
  let fixture: ComponentFixture<SalesSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
