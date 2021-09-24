import { Component } from '@angular/core';
@Component({
    selector: 'app-visitcountries',
    templateUrl: './VisitCountries.component.html'
})
export class VisitCountriesComponent {
    constructor() { }

    visits: Object[] = [
        {
            visit: '6350',
            from: 'India',
            percent: '48%',
            icon: 'fas fa-level-up-alt',
            color: 'success',
            progressColor: 'success'
        },
        {
            visit: '3250',
            from: 'UAE',
            percent: '98%',
            icon: 'fas fa-level-up-alt',
            color: 'success',
            progressColor: 'info'
        },
        {
            visit: '1250',
            from: 'Australia',
            percent: '75%',
            icon: 'fas fa-level-down-alt',
            color: 'danger',
            progressColor: 'inverse'
        },
        {
            visit: '1350',
            from: 'USA',
            percent: '48%',
            icon: 'fas fa-level-up-alt',
            color: 'success',
            progressColor: 'warning'
        },
        {
            visit: '6350',
            from: 'India',
            percent: '48%',
            icon: 'fas fa-level-up-alt',
            color: 'success',
            progressColor: 'success'
        },
        {
            visit: '3250',
            from: 'UAE',
            percent: '98%',
            icon: 'fas fa-level-up-alt',
            color: 'success',
            progressColor: 'info'
        },
        {
            visit: '1250',
            from: 'Australia',
            percent: '75%',
            icon: 'fas fa-level-down-alt',
            color: 'danger',
            progressColor: 'inverse'
        }
    ];
}
