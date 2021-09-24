import { Component } from '@angular/core';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
    selector: 'app-useractivity',
    templateUrl: './UserActivity.component.html'
})
export class UserActivityComponent {
	public config: PerfectScrollbarConfigInterface = {};
    constructor() { }
}
