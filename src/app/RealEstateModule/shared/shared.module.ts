import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from 'src/app/shared/pager/pager.component';

import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [PagerComponent],
  imports: [
    CommonModule,ComboBoxModule 
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[PagerComponent]
})
export class SharedModule { }
