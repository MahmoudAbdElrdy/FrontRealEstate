import { Component } from '@angular/core';
@Component({
    selector: 'app-weeklysitevisit',
    templateUrl: './WeeklySiteVisit.component.html'
})
export class WeeklySiteVisitComponent {
    constructor() { }

    // linechart 2
    public lineChartData: Array<any> = [
        { data: [0, 6, 3, 8, 5, 7, 2, 0], label: 'B' }
    ];
    public lineChartLabels: Array<any> = [
        1, 2, 3, 4, 5, 6, 7, 8
    ];
    public lineChartOptions: any = {
        elements: {
            point: {
                radius: 1
            },
            line: {
                tension: 0
            }
        },
        tooltips: {
            enabled: true,
            intersect: false,
            titleMarginBottom: 1,
            bodySpacing: 1,
            yPadding: 2,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    display: false
                }
            }]
        },
        layout: {
            padding: {
                left: -10,
                right: 0,
                top: 0,
                bottom: -10
            }
        },
        legend: {
            display: false,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        }
    };
    public lineChartColors: Array<any> = [
        {
            borderColor: "#2cabe3",
            borderWidth: 1,
            backgroundColor: "#2cabe3",
            pointBackgroundColor: "#2cabe3",
        }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';
}
