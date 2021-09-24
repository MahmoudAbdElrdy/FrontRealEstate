import { Component, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
    selector: 'app-finance',
    templateUrl: './Finance.component.html'
})
export class FinanceComponent implements AfterViewInit {
    constructor() { }

    ngAfterViewInit() {
        const chart = c3.generate({
            bindto: '#diagram',
            data: {
                columns: [
                    ['Oct', 45],
                    ['Nov', 22],
                    ['Dec', 15],
                    ['Jan', 27],
                    ['Feb', 18]
                ],
                type: 'donut'
            },
            donut: {
                label: {
                    show: false
                },
                title: 'Finance',
                width: 35
            },
            legend: {
                hide: true
            },
            color: {
                pattern: ['#2cabe3', '#2cd07e', '#ff5050', '#7bcef3', '#EDEBEE']
            }
        });
    }
}
