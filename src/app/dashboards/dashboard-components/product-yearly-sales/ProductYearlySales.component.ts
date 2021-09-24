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
    selector: 'app-product-yearly-sales',
    templateUrl: './ProductYearlySales.component.html',
    styleUrls: ['./ProductYearlySales.component.scss']
})
export class ProductYearlySalesComponent {
    constructor() { }

    lineChart: Chart = {
        type: 'Line',
        data: data['Line'],
        options: {
            low: 1,
            showPoint: true,
            fullWidth: true,
            showArea: true,
            height: 400,
            chartPadding: {
                top: 40,
                bottom: 20,
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
