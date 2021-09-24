import { Component } from '@angular/core';
@Component({
    selector: 'app-recentsales',
    templateUrl: './RecentSales.component.html'
})
export class RecentSalesComponent {
    constructor() { }

    data: Object[] = [
        {
            id: '1',
            name: 'Elite admin',
            status: 'SALE',
            color: 'success',
            date: 'April 18, 2017',
            price: '$24'
        },
        {
            id: '2',
            name: 'Real Homes WP Theme',
            status: 'EXTENDED',
            color: 'info',
            date: 'April 19, 2017',
            price: '$1250'
        },
        {
            id: '3',
            name: 'Medical Pro WP Theme',
            status: 'TAX',
            color: 'danger',
            date: 'April 20, 2017',
            price: '-$24'
        },
        {
            id: '4',
            name: 'Hosting press html',
            status: 'SALE',
            color: 'warning',
            date: 'April 21, 2017',
            price: '$24'
        },
        {
            id: '5',
            name: 'Digital Agency PSD',
            status: 'SALE',
            color: 'success',
            date: 'April 23, 2017',
            price: '-$14'
        },
        {
            id: '6',
            name: 'Helping Hands WP Theme',
            status: 'MEMBER',
            color: 'warning',
            date: 'April 22, 2017',
            price: '$64'
        },
        {
            id: '7',
            name: 'Hosting press html',
            status: 'SALE',
            color: 'warning',
            date: 'April 21, 2017',
            price: '$24'
        }
    ];
}
