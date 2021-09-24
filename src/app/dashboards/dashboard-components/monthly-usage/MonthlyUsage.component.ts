import { Component, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
    selector: 'app-monthusage',
    templateUrl: './MonthlyUsage.component.html'
})
export class MonthlyUsageComponent implements AfterViewInit {
    constructor() { }

    ngAfterViewInit() {
        const chart = c3.generate({
            bindto: '#weeksales-bar',
            data: {
                columns: [['data', 91.4]],
                type: 'gauge'
            },
            gauge: {
                label: {
                    format: function (value, ratio) {
                        return value;
                    },
                    show: false
                },
                min: 0,
                max: 100,
                units: ' %',
                width: 15
            },
            legend: {
                hide: true
            },
            size: {
                height: 200
            },
            color: {
                pattern: ['#2cd07e']
            }
        });
    }
}
