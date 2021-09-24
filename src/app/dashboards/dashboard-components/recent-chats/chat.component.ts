import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from './chat.service';
import { Chat } from './chat';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ChatService]
})
export class ChatComponent {
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
}
