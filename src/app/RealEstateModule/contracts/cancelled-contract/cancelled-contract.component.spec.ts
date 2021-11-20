import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledContractComponent } from './cancelled-contract.component';

describe('CancelledContractComponent', () => {
  let component: CancelledContractComponent;
  let fixture: ComponentFixture<CancelledContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelledContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
