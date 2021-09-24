import { Component, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
    selector: 'app-expance',
    templateUrl: './Expance.component.html'
})
export class ExpanceComponent implements AfterViewInit {
    constructor() { }

    ngAfterViewInit() {
        const chart2 = c3.generate({
            bindto: '.product-sales',
            data: {
                columns: [
                    ['Site A', 5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8],
                    ['Site B', 1, 2, 8, 3, 4, 5, 7, 6, 5, 6, 4, 3, 3, 12, 5, 6, 3]
                ],
                type: 'bar'
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
            bar: {
                width: 8
            },
            padding: {
                top: 40,
                right: 10,
                bottom: 0,
                left: 20
            },
            point: {
                r: 0
            },
            legend: {
                hide: true
            },
            color: {
                pattern: ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, .5)']
            }
        });
    }
}
