import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-chatlist',
    templateUrl: './ChatListing.component.html'
})
export class ChatListingComponent implements OnInit {

    data: any;

    constructor() { }

    ngOnInit() {
        this.data = [
            {
                img: 'assets/images/users/1.jpg',
                name: 'Jon Doe',
                status: 'online'
            },
            {
                img: 'assets/images/users/2.jpg',
                name: 'Jane Doe',
                status: 'offline'
            },
            {
                img: 'assets/images/users/3.jpg',
                name: 'Max Gomez',
                status: 'offline'
            },
            {
                img: 'assets/images/users/4.jpg',
                name: 'John Doe',
                status: 'online'
            },
            {
                img: 'assets/images/users/5.jpg',
                name: 'Jennifer',
                status: 'offline'
            },
            {
                img: 'assets/images/users/6.jpg',
                name: 'Jonny Bravo',
                status: 'online'
            },
            {
                img: 'assets/images/users/7.jpg',
                name: 'Dexter',
                status: 'offline'
            },
            {
                img: 'assets/images/users/8.jpg',
                name: 'Alex',
                status: 'online'
            }
        ];
    }
}
