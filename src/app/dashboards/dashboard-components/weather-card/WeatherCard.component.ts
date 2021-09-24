import { Component, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
    selector: 'app-weathercard',
    templateUrl: './WeatherCard.component.html'
})
export class WeatherCardComponent implements AfterViewInit {
    constructor() { }

    ngAfterViewInit() {
        const chart = c3.generate({
            bindto: '.temp',
            data: {
                columns: [
                    ['Site A', 0, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8]
                ],
                type: 'spline'
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
                pattern: ['rgba(255, 255, 255, 0.6)']
            }
        });
    }
}
