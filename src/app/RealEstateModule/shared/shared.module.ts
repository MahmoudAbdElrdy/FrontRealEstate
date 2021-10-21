import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerModule } from '@syncfusion/ej2-angular-grids';


import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { PagerComponent } from 'src/app/shared/components/pager/pager.component';

@NgModule({
  declarations: [PagerComponent],
  imports: [
    CommonModule,ComboBoxModule ,PagerModule
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[PagerComponent]
})
export class SharedModule { }
