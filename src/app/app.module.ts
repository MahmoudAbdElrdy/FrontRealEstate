import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    CommonModule
} from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { DataTablesModule } from 'angular-datatables';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { NavigationComponent } from './shared/components/header-navigation/navigation.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { CustomerServiceComponent } from './layouts/customer-service/customer-service.component';
import { CustomerServiceNavigationComponent } from './shared/components/customer-service-navigation/customer-service-navigation.component';
import { CustomerServiceSideBarComponent } from './shared/components/customer-service-side-bar/customer-service-side-bar.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ManagementNavigationComponent } from './shared/components/management-navigation/management-navigation.component';
import { ManagementSideBarComponent } from './shared/components/management-side-bar/management-side-bar.component';
import { ManagementComponent } from './layouts/management/management.component';
import { SalesComponent } from './layouts/sales/sales.component';
import { SalesNavigationComponent } from './shared/components/sales-navigation/sales-navigation.component';
import { SalesSideBarComponent } from './shared/components/sales-side-bar/sales-side-bar.component';
import { ContractComponent } from './layouts/contract/contract.component';
import { ContractNavigationComponent } from './shared/components/contract-navigation/contract-navigation.component';
import { ContractSideBarComponent } from './shared/components/contract-side-bar/contract-side-bar.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};

@NgModule({
    declarations: [
        AppComponent,
        SpinnerComponent,
        FullComponent,
        BlankComponent,
        NavigationComponent,
        BreadcrumbComponent,
        SidebarComponent,
        CustomerServiceComponent,
        CustomerServiceNavigationComponent,
        CustomerServiceSideBarComponent,
        ManagementNavigationComponent,
        ManagementSideBarComponent,
        ManagementComponent,
        SalesComponent,
        SalesNavigationComponent,
        SalesSideBarComponent,
        ContractComponent,
        ContractNavigationComponent,
        ContractSideBarComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        DataTablesModule,
        HttpClientModule,
        NgbModule,
        ToastrModule.forRoot(),
        Ng2SearchPipeModule,
        RouterModule.forRoot(Approutes),
        PerfectScrollbarModule,
        NgMultiSelectDropDownModule.forRoot(),
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyDoliAneRffQDyA7Ul9cDk3tLe7vaU4yP8' }),
        GridModule,DropDownListModule,
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
         ],
    bootstrap: [AppComponent],schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
})
export class AppModule { }
