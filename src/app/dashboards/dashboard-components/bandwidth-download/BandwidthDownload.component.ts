import { Component } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';

declare var require: any;

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
    selector: 'app-bandwidth-download',
    templateUrl: './BandwidthDownload.component.html'
})
export class BandwidthDownloadComponent {
    constructor() { }

    lineChart2: Chart = {
        type: 'Line',
        data: {
            labels: ['0', '4', '8', '12', '16', '20', '24', '30'],
            series: [
                [5, 0, 12, 1, 8, 3, 12, 15]
            ]
        },
        options: {
            high: 13,
            low: 0,
            showArea: true,
            fullWidth: true,
            axisY: {
                onlyInteger: true,
                offset: 20,
                showLabel: false,
                showGrid: false,
                labelInterpolationFnc: function (value) {
                    return (value / 1) + 'k';
                }
            },
            axisX: {
                showLabel: false,
                divisor: 2,
                showGrid: false,
                offset: 0
            }
        }
    };

    // bar chart
    public barChartData: Array<any> = [
        { data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3, 1.4, 1.1, 0.9, 2.1, 1], label: 'Count' }
    ];
    public barChartLabels: Array<any> = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12'
    ];
    public barChartOptions: any = {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        scales: {
            xAxes: [{
                display: false,
                barPercentage: 0.9,
                categoryPercentage: 0.5
            }],
            yAxes: [{
                display: false
            }]
        }
    };
    public barChartColors: Array<any> = [
        {
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            hoverBackgroundColor: 'rgba(255, 255, 255, 0.6)',
            hoverBorderWidth: 2,
            hoverBorderColor: 'rgba(255, 255, 255, 0.6)'
        }
    ];
    public barChartLegend = false;
    public barChartType = 'bar';
}
