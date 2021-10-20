import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceNavigationComponent } from './customer-service-navigation.component';

describe('CustomerServiceNavigationComponent', () => {
  let component: CustomerServiceNavigationComponent;
  let fixture: ComponentFixture<CustomerServiceNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerServiceNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerServiceNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
