import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TableService } from './dashboard-components/manage-user-table/ManageUserTable.service';
import { DashboardRoutes } from './dashboard.routing';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { Dashboard4Component } from './dashboard4/dashboard4.component';
import { Dashboard5Component } from './dashboard5/dashboard5.component';
import { Dashboard6Component } from './dashboard6/dashboard6.component';

import {
    StatsComponent,
    Stats2Component,
    SalesYearComponent,
    SalesWeekComponent,
    MoneycontrolComponent,
    CommentComponent,
    ManageTableComponent,
    NgbdSortableHeader,
    ManageUserTableComponent,
    TodoListComponent,
    CalendarComponent,
    BlogCardsComponent,
    ChatListingComponent,
    UserActivityComponent,
    ChatComponent,
    ExpanceComponent,
    TotalSalesComponent,
    FinanceComponent,
    CalendarWidgetComponent,
    YearlySalesComponent,
    TotalIncomeComponent,
    MonthlySalesComponent,
    WeeklyUsageComponent,
    MonthlyUsageComponent,
    RecentSalesComponent,
    ProfileCardComponent,
    MailboxComponent,
    TotalEarningsComponent,
    FeedsComponent,
    NewCardsComponent,
    CountryVisitComponent,
    MonthlySiteVisitComponent,
    WeeklySiteVisitComponent,
    VisitCountriesComponent,
    WeatherCardComponent,
    SalesCardComponent,
    CarouselWidgetComponent,
    RatingCardComponent,
    ProductYearlySalesComponent,
    TotalEarnings2Component,
    NotificationComponent,
    BandwidthDownloadComponent
} from './dashboard-components';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbModule,
        ChartsModule,
        ChartistModule,
        RouterModule.forChild(DashboardRoutes),
        PerfectScrollbarModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
      
        NgxDatatableModule
    ],
    declarations: [
        Dashboard1Component,
        Dashboard2Component,
        Dashboard3Component,
        Dashboard4Component,
        Dashboard5Component,
        Dashboard6Component,
        StatsComponent,
        Stats2Component,
        SalesYearComponent,
        SalesWeekComponent,
        MoneycontrolComponent,
        CommentComponent,
        ManageTableComponent,
        NgbdSortableHeader,
        ManageUserTableComponent,
        TodoListComponent,
        CalendarComponent,
        BlogCardsComponent,
        ChatListingComponent,
        UserActivityComponent,
        ChatComponent,
        ExpanceComponent,
        TotalSalesComponent,
        FinanceComponent,
        CalendarWidgetComponent,
        YearlySalesComponent,
        TotalIncomeComponent,
        MonthlySalesComponent,
        WeeklyUsageComponent,
        MonthlyUsageComponent,
        RecentSalesComponent,
        ProfileCardComponent,
        MailboxComponent,
        TotalEarningsComponent,
        FeedsComponent,
        NewCardsComponent,
        CountryVisitComponent,
        MonthlySiteVisitComponent,
        WeeklySiteVisitComponent,
        VisitCountriesComponent,
        WeatherCardComponent,
        SalesCardComponent,
        CarouselWidgetComponent,
        RatingCardComponent,
        ProductYearlySalesComponent,
        TotalEarnings2Component,
        NotificationComponent,
        BandwidthDownloadComponent
    ],
    providers: [TableService]
})
export class DashboardModule { }
