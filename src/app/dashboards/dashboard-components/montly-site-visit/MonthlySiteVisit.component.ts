import { Component } from '@angular/core';
@Component({
    selector: 'app-monthlysitevisit',
    templateUrl: './MonthlySiteVisit.component.html'
})
export class MonthlySiteVisitComponent {
    constructor() { }

    // linechart
    public lineChartData1: Array<any> = [
        { data: [0, 7, 2, 5, 3, 5, 8, 0], label: 'A' }
    ];
    public lineChartLabels1: Array<any> = [
        1, 2, 3, 4, 5, 6, 7, 8
    ];
    public lineChartOptions1: any = {
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
    public lineChartColors1: Array<any> = [
        {
            borderColor: "#ff5050",
            borderWidth: 1,
            backgroundColor: "#ff5050",
            pointBackgroundColor: "#ff5050",
        }
    ];
    public lineChartLegend1 = true;
    public lineChartType1 = 'line';
}
