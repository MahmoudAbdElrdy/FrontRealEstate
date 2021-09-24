import { Component, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
    selector: 'app-totalsales',
    templateUrl: './TotalSales.component.html'
})
export class TotalSalesComponent implements AfterViewInit {
    constructor() { }

    ngAfterViewInit() {
        const chart = c3.generate({
            bindto: '#morris-donut-chart',
            data: {
                columns: [
                    ['Open', 45],
                    ['Clicked', 15],
                    ['Un-opened', 27],
                    ['Bounced', 18]
                ],
                type: 'donut'
            },
            donut: {
                label: {
                    show: false
                },
                title: 'Sales',
                width: 35
            },
            legend: {
                hide: true
            },
            color: {
                pattern: ['#2cabe3', '#2cd07e', '#ff5050', '#7bcef3']
            }
        });
    }
}
