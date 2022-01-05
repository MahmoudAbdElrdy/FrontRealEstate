import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDataComponent } from '../report/customer-data/customer-data.component';
import { CustomersComponent } from './customers/customers.component';
import { ProjectVisitComponent } from './project-visit/project-visit.component';


const routes: Routes = [ {
  path: '',
  children: [
      {
          path: 'Customer',
          component: CustomersComponent,
          data: {
              title: '  العملاء',
              urls: [
                  { title: 'العملاء', url: '/CustomerServices' },
                  { title: ' خدمة العملاء', }
              ]
          }
      },
      {
        path: 'Visit',
        component:ProjectVisitComponent ,
        data: {
            title: ' الزيارات',
            urls: [
                { title: 'الزيارات', url: '/CustomerServices' },
                { title: ' خدمة العملاء', }
            ]
        }
    },
    {
      path: 'CustomerData',
      component: CustomerDataComponent,
      data: {
          title: ' بيانات العملاء',
          urls: [
              { title: 'بيانات العملاء', url: '/CustomerServices' },
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
export class CustomersServiceRoutingModule { }
