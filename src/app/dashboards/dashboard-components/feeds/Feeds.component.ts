import { Component } from '@angular/core';
@Component({
    selector: 'app-feeds',
    templateUrl: './Feeds.component.html'
})
export class FeedsComponent {
    constructor() { }

    feeds: Object[] = [
        {
            color: 'info',
            icon: 'far fa-bell',
            content: 'You have 4 pending tasks.',
            time: 'Just Now'
        },
        {
            color: 'success',
            icon: 'ti-server',
            content: 'Server #1 overloaded.',
            time: '2 Hours ago'
        },
        {
            color: 'warning',
            icon: 'ti-shopping-cart',
            content: 'New order received.',
            time: '31 May'
        },
        {
            color: 'danger',
            icon: 'ti-user',
            content: 'New user registered.',
            time: '30 May'
        },
        {
            color: 'inverse',
            icon: 'ti-user',
            content: 'New Version just arrived.',
            time: '27 May'
        },
        {
            color: 'success',
            icon: 'ti-server',
            content: 'Server #1 overloaded.',
            time: '2 Hours ago'
        },
        {
            color: 'warning',
            icon: 'ti-shopping-cart',
            content: 'New order received.',
            time: '31 May'
        },
        {
            color: 'danger',
            icon: 'ti-user',
            content: 'New user registered.',
            time: '30 May'
        },
        {
            color: 'inverse',
            icon: 'ti-user',
            content: 'New Version just arrived.',
            time: '27 May'
        }
    ];
}
