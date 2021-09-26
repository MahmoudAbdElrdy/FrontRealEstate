import { ManagementRoutingModule } from './management-routing.module';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ ProjectComponent],
  imports: [
    ManagementRoutingModule,  GridModule,DropDownListModule,SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[]
})
export class ManagementModule { }
