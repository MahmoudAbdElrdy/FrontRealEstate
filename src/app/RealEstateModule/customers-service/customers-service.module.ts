import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CustomersServiceRoutingModule } from './customers-service-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ProjectVisitComponent } from './project-visit/project-visit.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CustomersComponent, ProjectVisitComponent],
  imports: [
    CustomersServiceRoutingModule,  GridModule,DropDownListModule,SharedModule
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[]
})
export class CustomersServiceModule { }
