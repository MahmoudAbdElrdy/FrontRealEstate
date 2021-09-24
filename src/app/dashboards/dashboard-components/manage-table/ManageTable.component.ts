import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Data } from './data';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ChatService } from './chat.service';
import { Chat } from './chat';

@Component({
    selector: 'app-managetable',
    templateUrl: './ManageTable.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ChatService]
})
export class ManageTableComponent implements OnInit {
    public config: PerfectScrollbarConfigInterface = {};
    chat: Chat[];
    public now: Date = new Date();
    messages = new Array();
    selectedAll: any;
    data: Data[];
    txtname: string;
    txtposition: string;
    txtjoined: string;
    txtlocation: string;

    @ViewChild('messageInput', { static: true }) messageInputRef: ElementRef;

    constructor(private modalService: NgbModal, private elRef: ElementRef, private chatService: ChatService) {
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

    model: NgbDateStruct;

    open(content) {
        this.modalService.open(content, { size: 'sm', centered: true });
    }

    selectAll() {
        for (var i = 0; i < this.data.length; i++) {
            this.data[i].selected = this.selectedAll;
        }
    }

    checkIfAllSelected() {
        this.selectedAll = this.data.every(function (item: any) {
            return item.selected == true
        })
    }


    ngOnInit() {
        this.data = [
            {
                name: 'Andrew Simons',
                position: 'Modulator',
                joined: '2016-5-6',
                location: 'India',
                selected: false
            },
            {
                name: 'Hanna Gover',
                position: 'Admin',
                joined: '2005-1-13',
                location: 'United States',
                selected: false
            },
            {
                name: 'Joshi Nirav',
                position: 'Admin',
                joined: '2001-3-21',
                location: 'India',
                selected: false
            },
            {
                name: 'Joshi Sunil',
                position: 'Admin',
                joined: '2004-3-21',
                location: 'India',
                selected: false
            }
        ];
    }
    addUser() {
        this.data.push({
            name: this.txtname,
            position: this.txtposition,
            joined: this.txtjoined,
            location: this.txtlocation,
            selected: false
        });
    }
}
