

import { ReportRoutingModule } from './report-routing.module';
import { ExtraContrcatComponent } from './extra-contrcat/extra-contrcat.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { YearContrcatComponent } from './year-contrcat/year-contrcat.component';
import { AlertComponent } from './alert/alert.component';
import { OverdueComponent } from './overdue/overdue.component';
import { CustomerWaitingComponent } from './customer-waiting/customer-waiting.component';


@NgModule({
  declarations: [ExtraContrcatComponent, CustomerCardComponent, CustomerDataComponent, YearContrcatComponent, AlertComponent, OverdueComponent, CustomerWaitingComponent],
  imports: [ ReactiveFormsModule, FormsModule ,
    ReportRoutingModule,  GridModule,DropDownListModule,SharedModule,ComboBoxModule,CommonModule,PagerModule,DateTimePickerModule,DatePickerModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class ReportModule { }
