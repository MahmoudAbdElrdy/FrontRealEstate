import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { CustomersComponent } from './RealEstateModule/customers-service/customers/customers.component';
import { CustomerServiceComponent } from './layouts/customer-service/customer-service.component';
import { ManagementComponent } from './layouts/management/management.component';
import { SalesComponent } from './layouts/sales/sales.component';
import { ContractComponent } from './layouts/contract/contract.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './shared/helper/auth-guard';

export const Approutes: Routes = [
  
    {
        path: 'CustomerServices',
        canActivate: [AuthGuard],
        data:{department:["CustomersService"]},
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
        canActivate: [AuthGuard],
        data:{department:["Administration"]},
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
        canActivate: [AuthGuard],
        data:{department:["Sales"]},
        component: SalesComponent,
        children: [
           { path: '', redirectTo: '/Sales/CustomerSales', pathMatch: 'full' },
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
        component: LoginComponent,
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
