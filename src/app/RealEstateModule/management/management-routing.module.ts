import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from '../customers-service/customers/customers.component';
import { ProjectVisitComponent } from '../customers-service/project-visit/project-visit.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [ {
  path: '',
  children: [
      {
          path: 'Project',
          component: ProjectComponent,
          data: {
              title: ' العقارات',
              urls: [
                  { title: 'العقارات', url: '/Management' },
                  { title: 'الادارة', }
              ]
          }
      },
     {
          path: 'Project',
          component: ProjectComponent,
          data: {
              title: ' العقارات',
              urls: [
                  { title: 'العقارات', url: '/Management' },
                  { title: 'الادارة', }
              ]
          }
      },
    {
      path: 'Customer',
      component: CustomersComponent,
      data: {
          title: '  العملاء',
          urls: [
              { title: 'العملاء', url: '/Management' },
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
            { title: 'الزيارات', url: '/Management' },
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
export class ManagementRoutingModule { }
