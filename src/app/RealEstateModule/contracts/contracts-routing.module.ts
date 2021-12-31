import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from '../management/project-list/project-list.component';
import { AlertComponent } from '../report/alert/alert.component';
import { CustomerCardComponent } from '../report/customer-card/customer-card.component';
import { CustomerDataComponent } from '../report/customer-data/customer-data.component';
import { ExtraContrcatComponent } from '../report/extra-contrcat/extra-contrcat.component';
import { YearContrcatComponent } from '../report/year-contrcat/year-contrcat.component';
import { CancelledContractComponent } from './cancelled-contract/cancelled-contract.component';
import { ContractListComponent } from './contract-list/contract-list.component';




const routes: Routes = [ {
  path: '',
  children: [
    {
      path: 'Project',
      component: ProjectListComponent,
      data: {
          title: ' العقارات',
          urls: [
              { title: 'العقارات', url: '/Contracts' },
              { title: 'التعاقدات', }
          ]
      }
  },
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
        path: 'ExtraContrcat',
        component: ExtraContrcatComponent,
        data: {
            title: ' الملحقات',
            urls: [
                { title: 'الملحقات', url: '/Contracts' },
                { title: ' الملحقات', }
            ]
        }
    }
    ,
    {
        path: 'CustomerCard',
        component: CustomerCardComponent,
        data: {
            title: ' كارت العميل',
            urls: [
                { title: 'كارت العميل', url: '/Contracts' },
                { title: ' كارت العميل', }
            ]
        }
    },
    {
        path: 'CustomerData',
        component: CustomerDataComponent,
        data: {
            title: ' بيانات العملاء',
            urls: [
                { title: 'بيانات العملاء', url: '/Contracts' },
                { title: 'بيانات العملاء', }
            ]
        }
    }
    ,
    {
        path: 'YearContrcat',
        component: YearContrcatComponent,
        data: {
            title: ' مبيعات السنة ',
            urls: [
                { title: 'مبيعات السنة ', url: '/Contracts' },
                { title: 'مبيعات السنة ', }
            ]
        }
    }
    ,
    {
        path: 'Alert',
        component: AlertComponent,
        data: {
            title: ' منبه الاقساط',
            urls: [
                { title: ' منبه الاقساط', url: '/Contracts' },
                { title: ' منبه الاقساط', }
            ]
        }
    }
      // {
      //   path: 'Supervisor',
      //   component: SupervisorComponent,
      //   data: {
      //       title: ' المشرفين',
      //       urls: [
      //           { title: 'المشرفين', url: '/Contracts' },
      //           { title: ' المشرفين', }
      //       ]
      //   }
      // },
      // {
      //   path: 'DailyReport',
      //   component: DailyReportComponent,
      //   data: {
      //       title: ' التقرير اليومي',
      //       urls: [
      //           { title: 'التقرير اليومي', url: '/Contracts' },
      //           { title: ' التقرير اليومي', }
      //       ]
      //   }
      // }
  ]
}];

///Contracts/contract
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
