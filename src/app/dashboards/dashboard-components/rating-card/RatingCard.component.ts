import { Component } from '@angular/core';
@Component({
    selector: 'app-ratingcard',
    templateUrl: './RatingCard.component.html'
})
export class RatingCardComponent {
    constructor() { }

    // bar chart
    public barChartData: Array<any> = [
        { data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3], label: 'Cost' }
    ];
    public barChartLabels: Array<any> = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7'
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
                barPercentage: 0.7,
                categoryPercentage: 0.5
            }],
            yAxes: [{
                display: false
            }]
        }
    };
    public barChartColors: Array<any> = [
        {
            backgroundColor: '#2cd07e',
            hoverBackgroundColor: '#2cd07e',
            hoverBorderWidth: 2,
            hoverBorderColor: '#2cd07e'
        }
    ];
    public barChartLegend = false;
    public barChartType = 'bar';

    // bar chart
    public barChartData1: Array<any> = [
        { data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3], label: 'Cost' }
    ];
    public barChartLabels1: Array<any> = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7'
    ];
    public barChartOptions1: any = {
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
                barPercentage: 0.7,
                categoryPercentage: 0.5
            }],
            yAxes: [{
                display: false
            }]
        }
    };
    public barChartColors1: Array<any> = [
        {
            backgroundColor: '#707cd2',
            hoverBackgroundColor: '#707cd2',
            hoverBorderWidth: 2,
            hoverBorderColor: '#707cd2'
        }
    ];
    public barChartLegend1 = false;
    public barChartType1 = 'bar';

    // bar chart
    public barChartData2: Array<any> = [
        { data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3], label: 'Cost' }
    ];
    public barChartLabels2: Array<any> = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7'
    ];
    public barChartOptions2: any = {
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
                barPercentage: 0.7,
                categoryPercentage: 0.5
            }],
            yAxes: [{
                display: false
            }]
        }
    };
    public barChartColors2: Array<any> = [
        {
            backgroundColor: '#2cabe3',
            hoverBackgroundColor: '#2cabe3',
            hoverBorderWidth: 2,
            hoverBorderColor: '#2cabe3'
        }
    ];
    public barChartLegend2 = false;
    public barChartType2 = 'bar';

    // bar chart
    public barChartData3: Array<any> = [
        { data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3], label: 'Cost' }
    ];
    public barChartLabels3: Array<any> = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7'
    ];
    public barChartOptions3: any = {
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
                barPercentage: 0.7,
                categoryPercentage: 0.5
            }],
            yAxes: [{
                display: false
            }]
        }
    };
    public barChartColors3: Array<any> = [
        {
            backgroundColor: '#ff5050',
            hoverBackgroundColor: '#ff5050',
            hoverBorderWidth: 2,
            hoverBorderColor: '#ff5050'
        }
    ];
    public barChartLegend3 = false;
    public barChartType3 = 'bar';
}
