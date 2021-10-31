import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';

import { ComboBoxModule, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { SharedModule } from '../shared/shared.module';

import { SalesRoutingModule } from './sales-routing.module';
import { CustomersSalesComponent } from './customers/customers.component';
import { CommonModule } from '@angular/common';
import { QestionsComponent } from './qestions/qestions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [CustomersSalesComponent, QestionsComponent],
  imports: [CommonModule,
    SalesRoutingModule ,DropDownListModule,SharedModule,
    ReactiveFormsModule, FormsModule,
   GridModule,DropDownListModule,SharedModule,ComboBoxModule,CommonModule,PagerModule,DateTimePickerModule,DatePickerModule,

  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[]
  ,
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class SalesModule { }
