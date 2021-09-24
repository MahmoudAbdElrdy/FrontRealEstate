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
    selector: 'app-yearlsales',
    templateUrl: './YearlySales.component.html'
})
export class YearlySalesComponent {
    constructor() { }

    lineChart: Chart = {
        type: 'Line',
        data: {
            "labels": ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            "series": [
                [1, 2, 5, 3, 4, 2.5, 5, 3, 1],
                [1, 4, 2, 5, 2, 5.5, 3, 4, 1]
            ]
        },
        options: {
            showArea: true,
            showPoint: true,
            height: 100,
            chartPadding: {
                left: -20,
                top: 10,
            },
            axisX: {
                showLabel: false,
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
