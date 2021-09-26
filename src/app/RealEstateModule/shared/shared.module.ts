import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from 'src/app/shared/pager/pager.component';



@NgModule({
  declarations: [PagerComponent],
  imports: [
    CommonModule
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[PagerComponent]
})
export class SharedModule { }
