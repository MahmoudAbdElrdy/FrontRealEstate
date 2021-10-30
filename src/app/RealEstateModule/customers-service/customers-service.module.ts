import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CustomersServiceRoutingModule } from './customers-service-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { ProjectVisitComponent } from './project-visit/project-visit.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { SharedModule } from '../shared/shared.module';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CustomersComponent, ProjectVisitComponent],
  imports: [CommonModule ,
    CustomersServiceRoutingModule,  GridModule,DropDownListModule,SharedModule,PagerModule, ReactiveFormsModule, FormsModule,
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class CustomersServiceModule { }
