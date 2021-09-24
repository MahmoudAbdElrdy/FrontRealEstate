import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
    selector: 'app-todolist',
    templateUrl: './TodoList.component.html',
    styleUrls: ['./TodoList.component.css']
})
export class TodoListComponent {
    public config: PerfectScrollbarConfigInterface = {};

    constructor() { }
}
