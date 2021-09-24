import { Component } from '@angular/core';
@Component({
    selector: 'app-totalearn2',
    templateUrl: './TotalEarnings2.component.html'
})
export class TotalEarnings2Component {
    constructor() { }

    earning: Object[] = [
        {
            img: 'assets/images/users/1.jpg',
            name: 'Andrew Simon',
            date: '10-11-2016',
            amount: '$46'
        },
        {
            img: 'assets/images/users/2.jpg',
            name: 'John Deo',
            date: '01-11-2018',
            amount: '$56'
        },
        {
            img: 'assets/images/users/3.jpg',
            name: 'Shaina Nehwal',
            date: '26-03-2018',
            amount: '$78'
        }
    ];
}
