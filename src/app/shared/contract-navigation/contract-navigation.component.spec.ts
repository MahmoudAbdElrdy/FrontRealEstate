import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractNavigationComponent } from './contract-navigation.component';

describe('ContractNavigationComponent', () => {
  let component: ContractNavigationComponent;
  let fixture: ComponentFixture<ContractNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
