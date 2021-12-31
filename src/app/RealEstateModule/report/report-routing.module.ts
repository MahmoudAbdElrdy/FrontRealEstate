import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { ExtraContrcatComponent } from './extra-contrcat/extra-contrcat.component';
import { SupervisorReportComponent } from './supervisor-report/supervisor-report.component';


const routes: Routes = [,
  {
    path: 'ExtraContrcat',
    component: ExtraContrcatComponent,
    data: {
        title: ' الملحقات',
        urls: [
            { title: 'الملحقات', url: '/Report' },
            { title: ' الملحقات', }
        ]
    }
  },
  {
    path: 'CustomerCard',
    component: CustomerCardComponent,
    data: {
        title: ' كارت العميل',
        urls: [
            { title: 'كارت العميل', url: '/Report' },
            { title: ' كارت العميل', }
        ]
    }
  },
  {
    path: 'Alert',
    component: AlertComponent,
    data: {
        title: ' منبه الاقساط',
        urls: [
            { title: ' منبه الاقساط', url: '/Report' },
            { title: ' منبه الاقساط', }
        ]
    }
  }  
  ,
  {
    path: 'SupervisorReport',
    component: SupervisorReportComponent,
    data: {
        title: ' تقرير',
        urls: [
            { title: ' تقرير', url: '/Report' },
            { title: ' تقرير', }
        ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
