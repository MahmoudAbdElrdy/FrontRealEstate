import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ChatService } from './chat.service';
import { Chat } from './chat';

@Component({
    templateUrl: 'widget-app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ChatService]
})
export class WidgetappComponent {
    public config: PerfectScrollbarConfigInterface = {};

    chat: Chat[];
    public now: Date = new Date();
    messages = new Array();
    @ViewChild('messageInput', { static: true }) messageInputRef: ElementRef;

    constructor(private elRef: ElementRef, private chatService: ChatService) {
        this.chat = chatService.chat1;

        //  For Get Current Time
        setInterval(() => {
            this.now = new Date();
        }, 1);
    }

    //send button function calls
    onAddMessage() {
        if (this.messageInputRef.nativeElement.value != "") {
            this.messages.push(this.messageInputRef.nativeElement.value);
        }
        this.messageInputRef.nativeElement.value = "";
        this.messageInputRef.nativeElement.focus();
    }

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
        },
        {
            img: 'assets/images/users/4.jpg',
            name: 'Emily Sion',
            date: '14-04-2018',
            amount: '$12'
        }
    ];

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
