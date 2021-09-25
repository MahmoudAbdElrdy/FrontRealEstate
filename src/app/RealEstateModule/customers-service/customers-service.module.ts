import { NgModule } from '@angular/core';

import { CustomersServiceRoutingModule } from './customers-service-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CustomersServiceRoutingModule,  GridModule
  ]
  
})
export class CustomersServiceModule { }
