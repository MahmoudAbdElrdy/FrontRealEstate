import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { GridModule } from '@syncfusion/ej2-angular-grids';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { SharedModule } from '../shared/shared.module';

import { SalesRoutingModule } from './sales-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { CommonModule } from '@angular/common';
import { QestionsComponent } from './qestions/qestions.component';


@NgModule({
  declarations: [CustomersComponent, QestionsComponent],
  imports: [CommonModule,
    SalesRoutingModule ,  GridModule,DropDownListModule,SharedModule
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[]
 
})
export class SalesModule { }
