import { Component, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
    selector: 'app-countryvisit',
    templateUrl: './CountryVisit.component.html'
})
export class CountryVisitComponent implements AfterViewInit {
    constructor() { }

    ngAfterViewInit() {
        const chart2 = c3.generate({
            bindto: '.country-visits',
            data: {
                columns: [
                    ['India', 5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7],
                    ['USA', 1, 2, 8, 3, 4, 5, 7, 6, 5, 6, 4, 3],
                    ['Australia', 4, 6, 3, 5, 8, 5, 7, 4, 1, 8, 2, 6]
                ],
                type: 'bar'
            },
            axis: {
                y: {
                    show: true,
                    tick: {
                        count: 0,
                        outer: false
                    }
                },
                x: {
                    show: true
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
                pattern: ['#707cd2', '#2cabe3', '#2cd07e']
            }
        });
    }
}
