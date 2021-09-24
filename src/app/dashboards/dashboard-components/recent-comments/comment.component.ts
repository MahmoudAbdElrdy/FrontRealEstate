import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
})
export class CommentComponent {
    public config: PerfectScrollbarConfigInterface = {};

    constructor() { }

    comments: Object[] = [
        {
            img: 'assets/images/users/1.jpg',
            name: 'Pavan kumar',
            time: '10:20 AM 20 may 2016',
            color: 'info',
            status: 'Pending',
            content: 'Donec ac condimentum massa. Etiam pellentesque pretium lacus.Phasellus ultricies dictum suscipit.Aenean commodo.'
        },
        {
            img: 'assets/images/users/2.jpg',
            name: 'Max Watty',
            time: '10:20 AM 20 may 2016',
            color: 'success',
            status: 'Approved',
            content: 'Donec ac condimentum massa. Etiam pellentesque pretium lacus.Phasellus ultricies dictum suscipit.Aenean commodo.'
        },
        {
            img: 'assets/images/users/4.jpg',
            name: 'Jane Deo',
            time: '10:20 AM 20 may 2016',
            color: 'danger',
            status: 'Rejected',
            content: 'Donec ac condimentum massa. Etiam pellentesque pretium lacus.Phasellus ultricies dictum suscipit.Aenean commodo.'
        },
        {
            img: 'assets/images/users/5.jpg',
            name: 'John Deo',
            time: '10:20 AM 20 may 2016',
            color: 'info',
            status: 'Pending',
            content: 'Donec ac condimentum massa. Etiam pellentesque pretium lacus.Phasellus ultricies dictum suscipit.Aenean commodo.'
        },
    ];
}
