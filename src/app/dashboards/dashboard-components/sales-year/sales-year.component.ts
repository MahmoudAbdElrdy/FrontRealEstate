import { Component } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';

declare var require: any;

const data: any = require('./data.json');

interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
    selector: 'app-sales-year',
    templateUrl: './sales-year.component.html',
    styleUrls: ['./sales-year.component.scss']
})
export class SalesYearComponent {
    constructor() { }

    lineChart: Chart = {
        type: 'Line',
        data: data['Line'],
        options: {
            low: 1,
            showPoint: true,
            fullWidth: true,
            showArea: true,
            height: 350,
            chartPadding: {
                top: 40,
                bottom: 50,
                left: 0,
                right: 0,
            },
            axisY: {
                labelInterpolationFnc: function (value) {
                    return (value / 1) + 'k';
                }
            }
        }
    };
}
