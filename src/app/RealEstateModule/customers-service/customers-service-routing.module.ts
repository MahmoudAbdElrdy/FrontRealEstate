import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersServiceRoutingModule { }
