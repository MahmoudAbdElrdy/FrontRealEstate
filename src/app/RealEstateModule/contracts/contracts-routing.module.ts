import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancelledContractComponent } from './cancelled-contract/cancelled-contract.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { SupervisorComponent } from './supervisor/supervisor.component';




const routes: Routes = [ {
  path: '',
  children: [
      {
          path: 'Contract',
          component: ContractListComponent,
          data: {
              title: ' التعاقدات',
              urls: [
                  { title: 'التعاقدات', url: '/Contracts' },
                  { title: ' التعاقدات', }
              ]
          }
      },
      {
        path: 'CancelledContract',
        component: CancelledContractComponent,
        data: {
            title: ' التعاقدات',
            urls: [
                { title: 'التعاقدات', url: '/Contracts' },
                { title: ' التعاقدات', }
            ]
        }
      }
      ,
      {
        path: 'Supervisor',
        component: SupervisorComponent,
        data: {
            title: ' المشرفين',
            urls: [
                { title: 'المشرفين', url: '/Contracts' },
                { title: ' المشرفين', }
            ]
        }
      },
      {
        path: 'DailyReport',
        component: DailyReportComponent,
        data: {
            title: ' التقرير اليومي',
            urls: [
                { title: 'التقرير اليومي', url: '/Contracts' },
                { title: ' التقرير اليومي', }
            ]
        }
      }
  ]
}];

///Contracts/contract
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
