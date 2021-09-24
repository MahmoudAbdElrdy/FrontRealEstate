import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersServiceRoutingModule } from './customers-service-routing.module';
import { CustomersComponent } from './customers/customers.component';


@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomersServiceRoutingModule
  ]
})
export class CustomersServiceModule { }
