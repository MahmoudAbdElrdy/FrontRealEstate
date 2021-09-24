import { Injectable } from '@angular/core';
import { Chat } from './chat';

@Injectable()
export class ChatService {

    constructor() { }

    public chat1: Chat[] = [
        new Chat(
            'odd',
            'assets/images/users/8.jpg',
            '9.30 am',
            [
                'Hi, How are you ?'
            ],
        ),
        new Chat(
            'even',
            'assets/images/users/1.jpg',
            '9.30 am',
            [
                'Hey Bruce, I am Fine'
            ],
        ),
        new Chat(
            'odd',
            'assets/images/users/8.jpg',
            '9.31 am',
            [
                'What are you doing nowadays ?'
            ],
        ),
        new Chat(
            'even',
            'assets/images/users/1.jpg',
            '9.31 am',
            [
                'Nothing Much.'
            ],
        ),
        new Chat(
            'odd',
            'assets/images/users/8.jpg',
            '9.32 am',
            [
                'yes'
            ],
        ),
        new Chat(
            'even',
            'assets/images/users/1.jpg',
            '9.32 am',
            [
                'Do you have interest in IOS ?'
            ],
        ),
        new Chat(
            'odd',
            'assets/images/users/8.jpg',
            '9.33 am',
            [
                'Yes, not more.'
            ],
        ),
        new Chat(
            'even',
            'assets/images/users/1.jpg',
            '9.33 am',
            [
                'Okay.'
            ],
        ),
        new Chat(
            'odd',
            'assets/images/users/8.jpg',
            '9.34 am',
            [
                'I have join Android Classes.'
            ],
        ),
        new Chat(
            'even',
            'assets/images/users/1.jpg',
            '9.34 am',
            [
                'Okay, Great.'
            ],
        ),
    ];
}