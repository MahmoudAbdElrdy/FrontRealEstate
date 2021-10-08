import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { CustomersComponent } from './RealEstateModule/customers-service/customers/customers.component';
import { CustomerServiceComponent } from './layouts/customer-service/customer-service.component';
import { ManagementComponent } from './layouts/management/management.component';
import { SalesComponent } from './layouts/sales/sales.component';
import { ContractComponent } from './layouts/contract/contract.component';

export const Approutes: Routes = [
    {
        path: '',
        component: FullComponent,
        children: [
            { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
            },
            { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
        ]
    },
    {
        path: 'CustomerServices',
      
        component: CustomerServiceComponent,
        children: [
           { path: '', redirectTo: '/CustomerServices/Customer', pathMatch: 'full' },
            {
                path: '',
                loadChildren: () => import('./RealEstateModule/customers-service/customers-service.module').then(m => m.CustomersServiceModule)
            }
        ]
    },
    {
        path: 'Management',
      
        component: ManagementComponent,
        children: [
           { path: '', redirectTo: '/Management/Project', pathMatch: 'full' },
            {
                path: '',
                loadChildren: () => import('./RealEstateModule/management/management.module').then(m => m.ManagementModule)
            }
        ]
    },
    {
        path: 'Sales',
      
        component: SalesComponent,
        children: [
           { path: '', redirectTo: '/Sales/Customer', pathMatch: 'full' },
            {
                path: '',
                loadChildren: () => import('./RealEstateModule/sales/sales.module').then(m => m.SalesModule)
            }
        ]
    }
    ,
    {
        path: 'Contracts',
      
        component: ContractComponent,
        children: [
           { path: '', redirectTo: '/Contracts/Contract', pathMatch: 'full' },
            {
                path: '',
                loadChildren: () => import('./RealEstateModule/contracts/contracts.module').then(m => m.ContractsModule)
            }
        ]
    },
    {
        path: '',
        component: BlankComponent,
        children: [
            {
                path: 'authentication',
                loadChildren:
                    () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/authentication/404'
    }
];
