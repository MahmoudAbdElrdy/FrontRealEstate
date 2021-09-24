import { Component } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';

declare var require: any;

interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
    selector: 'app-weekusage',
    templateUrl: './WeeklyUsage.component.html'
})
export class WeeklyUsageComponent {
    constructor() { }

    barChart: Chart = {
        type: 'Bar',
        data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [[50, 40, 30, 70, 50, 20, 30]]
        },
        options: {
            height: 300,
            chartPadding: {
                top: 15,
                left: -25
            },
            axisX: {
                showLabel: true,
                showGrid: false
            },
            axisY: {
                showLabel: false,
                showGrid: false
            },
            fullWidth: true
        }
    };
}
