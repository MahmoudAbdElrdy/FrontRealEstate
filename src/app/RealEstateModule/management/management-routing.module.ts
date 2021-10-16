import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractComponent } from '../contracts/contract/contract.component';
import { CustomersComponent } from '../customers-service/customers/customers.component';
import { ProjectVisitComponent } from '../customers-service/project-visit/project-visit.component';
import { CustomersSalesComponent } from '../sales/customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
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
,
{
    path: 'Contract',
    component: ContractComponent,
    data: {
        title: ' التعاقدات',
        urls: [
            { title: 'التعاقدات', url: '/Management' },
            { title: ' التعاقدات', }
        ]
    }
}
,
{
  path: 'Employees',
  component:EmployeesComponent ,
  data: {
      title: ' الموظيفن',
      urls: [
          { title: 'الموظيفن', url: '/Management' },
          { title: '', }
      ]
  }
  
},
{
    path: 'CustomerSales',
    component: CustomersSalesComponent,
    data: {
        title: ' المبيعات',
        urls: [
            { title: 'المبيعات', url: '/Management' },
            { title: '  المبيعات', }
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
