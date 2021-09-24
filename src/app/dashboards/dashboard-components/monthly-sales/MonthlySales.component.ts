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
    selector: 'app-monthsales',
    templateUrl: './MonthlySales.component.html'
})
export class MonthlySalesComponent {
    constructor() { }

    lineChart: Chart = {
        type: 'Line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6'],
            series: [[1, -2, 5, 3, 0, 2.5]]
        },
        options: {
            showArea: true,
            showPoint: true,
            height: '100px',

            chartPadding: {
                left: -20,
                top: 10,
            },
            axisX: {
                showLabel: false,
                showGrid: true
            },
            axisY: {
                showLabel: false,
                showGrid: false
            },
            fullWidth: true,
        }
    };
}
