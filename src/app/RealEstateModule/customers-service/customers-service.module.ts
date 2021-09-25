import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CustomersServiceRoutingModule } from './customers-service-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PagerComponent } from 'src/app/shared/pager/pager.component';
import { ProjectVisitComponent } from './project-visit/project-visit.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [CustomersComponent,PagerComponent, ProjectVisitComponent],
  imports: [
    CustomersServiceRoutingModule,  GridModule,DropDownListModule
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[PagerComponent]
})
export class CustomersServiceModule { }
