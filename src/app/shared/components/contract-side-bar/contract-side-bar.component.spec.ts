import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSideBarComponent } from './contract-side-bar.component';

describe('ContractSideBarComponent', () => {
  let component: ContractSideBarComponent;
  let fixture: ComponentFixture<ContractSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
