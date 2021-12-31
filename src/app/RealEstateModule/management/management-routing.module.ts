import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancelledContractComponent } from '../contracts/cancelled-contract/cancelled-contract.component';
import { ContractListComponent } from '../contracts/contract-list/contract-list.component';
import { DailyReportComponent } from '../contracts/daily-report/daily-report.component';
import { SupervisorComponent } from '../contracts/supervisor/supervisor.component';
import { CustomersComponent } from '../customers-service/customers/customers.component';
import { ProjectVisitComponent } from '../customers-service/project-visit/project-visit.component';
import { AlertComponent } from '../report/alert/alert.component';
import { CustomerCardComponent } from '../report/customer-card/customer-card.component';
import { CustomerDataComponent } from '../report/customer-data/customer-data.component';
import { CustomerWaitingComponent } from '../report/customer-waiting/customer-waiting.component';
import { ExtraContrcatComponent } from '../report/extra-contrcat/extra-contrcat.component';
import { OverdueComponent } from '../report/overdue/overdue.component';
import { SupervisorReportComponent } from '../report/supervisor-report/supervisor-report.component';
import { YearContrcatComponent } from '../report/year-contrcat/year-contrcat.component';
import { CustomersSalesComponent } from '../sales/customers/customers.component';
import { QestionsComponent } from '../sales/qestions/qestions.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectListComponent } from './project-list/project-list.component';


const routes: Routes = [{
    path: '',
    children: [
        {
            path: 'Project',
            component: ProjectListComponent,
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
            component: ProjectVisitComponent,
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
            component: ContractListComponent,
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
            component: EmployeesComponent,
            data: {
                title: ' الموظيفن',
                urls: [
                    { title: 'الموظيفن', url: '/Management' },
                    { title: '', }
                ]
            }

        },
        {
            path: 'EmployeeSalary',
            component: EmployeeSalaryComponent,
            data: {
                title: ' مرتبات الموظف',
                urls: [
                    { title: ' مرتبات الموظف', url: '/Management' },
                    { title: '', }
                ]
            }

        },
        {
            path: 'Qestions',
            component: QestionsComponent,
            data: {
                title: ' الاستعلامات',
                urls: [
                    { title: 'الاستعلامات', url: '/Management' },
                    { title: 'الاستعلامات', }
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
        },
        {
            path: 'CancelledContract',
            component: CancelledContractComponent,
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
            path: 'Supervisor',
            component: SupervisorComponent,
            data: {
                title: ' المشرفين',
                urls: [
                    { title: 'المشرفين', url: '/Management' },
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
        },
        {
            path: 'ExtraContrcat',
            component: ExtraContrcatComponent,
            data: {
                title: ' الملحقات',
                urls: [
                    { title: 'الملحقات', url: '/Management' },
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
                    { title: 'كارت العميل', url: '/Management' },
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
                    { title: 'بيانات العملاء', url: '/Management' },
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
                    { title: 'مبيعات السنة ', url: '/Management' },
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
                    { title: ' منبه الاقساط', url: '/Management' },
                    { title: ' منبه الاقساط', }
                ]
            }
        }
        ,
        {
            path: 'Overdue',
            component: OverdueComponent,
            data: {
                title: ' الاقساط المتاخرة',
                urls: [
                    { title: ' الاقساط المتاخرة', url: '/Management' },
                    { title: ' الاقساط المتاخرة', }
                ]
            }
        },
        {
            path: 'CustomerWaiting',
            component: CustomerWaitingComponent,
            data: {
                title: ' قائمة الانتظار',
                urls: [
                    { title: ' قائمة الانتظار', url: '/Management' },
                    { title: ' قائمة الانتظار', }
                ]
            }
        },
        {
          path: 'SupervisorReport',
          component: SupervisorReportComponent,
          data: {
              title: ' تقرير',
              urls: [
                  { title: ' تقرير', url: '/Management' },
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
export class ManagementRoutingModule { }
