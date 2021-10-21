import { ManagementRoutingModule } from './management-routing.module';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { SharedModule } from '../shared/shared.module';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { EmployeesComponent } from './employees/employees.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ ProjectComponent, EmployeesComponent],
  imports: [
    ManagementRoutingModule,  GridModule,DropDownListModule,SharedModule,ComboBoxModule,CommonModule,PagerModule
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
export class ManagementModule { }
