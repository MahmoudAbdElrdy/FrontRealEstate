import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { QestionsComponent } from './qestions/qestions.component';


const routes: Routes = [ {
  path: '',
  children: [
      {
          path: 'Customer',
          component: CustomersComponent,
          data: {
              title: '  العملاء',
              urls: [
                  { title: 'العملاء', url: '/Sales' },
                  { title: ' خدمة العملاء', }
              ]
          }
      },
      {
        path: 'Qestions',
        component: QestionsComponent,
        data: {
            title: ' الاستعلامات',
            urls: [
                { title: 'الاستعلامات', url: '/Sales' },
                { title: 'الاستعلامات', }
            ]
        }
    },
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
