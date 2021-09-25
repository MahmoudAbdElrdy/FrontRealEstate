import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { CustomersComponent } from './RealEstateModule/customers-service/customers/customers.component';
import { CustomerServiceComponent } from './layouts/customer-service/customer-service.component';

export const Approutes: Routes = [
    // {
    //     path: '',
    //     component: FullComponent,
    //     children: [
    //         { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
    //         {
    //             path: 'dashboard',
    //             loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
    //         },
    //         { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
    //     ]
    // },
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
