import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceSideBarComponent } from './customer-service-side-bar.component';

describe('CustomerServiceSideBarComponent', () => {
  let component: CustomerServiceSideBarComponent;
  let fixture: ComponentFixture<CustomerServiceSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerServiceSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerServiceSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
