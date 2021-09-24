import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';


const routes: Routes = [ {
  path: '',
  children: [
      {
          path: 'Customer',
          component: CustomersComponent,
          data: {
              title: 'Customer',
              urls: [
                  { title: 'Customer Services', url: '/Customer' },
                  { title: 'Customer' }
              ]
          }
      }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersServiceRoutingModule { }
