import { Component, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
    selector: 'app-moneycontrol',
    templateUrl: './MoneyControl.component.html'
})
export class MoneycontrolComponent implements AfterViewInit {
    constructor() { }

    ngAfterViewInit() {
        const chart = c3.generate({
            bindto: '#morris-area-chart2',
            data: {
                columns: [
                    ['Site A', 5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8],
                    ['Site B', 8, 5, 7, 3, 10, 9, 12, 14, 9, 11, 12]
                ],
                type: 'area-spline'
            },
            axis: {
                y: {
                    show: false,
                    tick: {
                        count: 0,
                        outer: false
                    }
                },
                x: {
                    show: false
                }
            },
            padding: {
                top: 0,
                right: -8,
                bottom: -28,
                left: -8
            },
            point: {
                r: 0
            },
            legend: {
                hide: true
            },
            color: {
                pattern: ['#79e580', '#2cabe3']
            }
        });
    }
}
