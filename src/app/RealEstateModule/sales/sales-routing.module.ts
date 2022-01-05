import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDataComponent } from '../report/customer-data/customer-data.component';
import { CustomerWaitingComponent } from '../report/customer-waiting/customer-waiting.component';
import { CustomersSalesComponent } from './customers/customers.component';
import { QestionsComponent } from './qestions/qestions.component';


const routes: Routes = [ {
  path: '',
  children: [
      {
          path: 'CustomerSales',
          component: CustomersSalesComponent,
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
    {
      path: 'CustomerWaiting',
      component: CustomerWaitingComponent,
      data: {
          title: ' قائمة الانتظار',
          urls: [
              { title: ' قائمة الانتظار', url: '/Sales' },
              { title: ' قائمة الانتظار', }
          ]
      }
  },
  {
    path: 'CustomerData',
    component: CustomerDataComponent,
    data: {
        title: ' بيانات العملاء',
        urls: [
            { title: 'بيانات العملاء', url: '/Sales' },
            { title: 'بيانات العملاء', }
        ]
    }
}
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
