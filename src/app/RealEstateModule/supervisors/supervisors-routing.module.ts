import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyReportComponent } from '../contracts/daily-report/daily-report.component';
import { SupervisorComponent } from '../contracts/supervisor/supervisor.component';
import { SupervisorReportComponent } from '../report/supervisor-report/supervisor-report.component';


const routes: Routes = [ {
  path: '',
  children: [
    {
     
   
        path: 'Supervisor',
        component: SupervisorComponent,
        data: {
            title: ' المشرفين',
            urls: [
                { title: 'المشرفين', url: '/Supervisors' },
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
                { title: 'التقرير اليومي', url: '/Supervisors' },
                { title: ' التقرير اليومي', }
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
                { title: ' تقرير', url: '/Supervisors' },
                { title: ' تقرير', }
            ]
        }
      }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorsRoutingModule { }
