import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { ComboBoxModule, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { ContractListComponent } from './contract-list/contract-list.component';
import { DatePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { CancelledContractComponent } from './cancelled-contract/cancelled-contract.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
@NgModule({
  declarations: [ ContractListComponent, CancelledContractComponent, SupervisorComponent, DailyReportComponent],
  imports: [ ReactiveFormsModule, FormsModule, 
     GridModule,DropDownListModule,SharedModule,ComboBoxModule,
     CommonModule,PagerModule,DateTimePickerModule,DatePickerModule,
 
    ContractsRoutingModule,CheckBoxModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[],
   providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class ContractsModule { }
