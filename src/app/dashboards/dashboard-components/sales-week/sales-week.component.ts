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
    selector: 'app-sales-week',
    templateUrl: './sales-week.component.html',
    styleUrls: ['./sales-week.component.scss']
})
export class SalesWeekComponent {
    constructor() { }

    barChart: Chart = {
        type: 'Bar',
        data: data['Bar']
    };
}
