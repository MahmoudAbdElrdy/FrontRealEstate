import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PagerService } from 'src/app/real-estate-services/pagerService';


@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  // pager: any = {};
  @Input('pager') pager;
  pageNumber: number = 1;
  pageSize: number = 10;
  totalcount: number;
  toPageSize: number = 0;
  fromPageSize: number = 0;
  @Output() pageChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

   
  }
  ngOnChanges(change: any): void {
    
   console.log(this.pager)
    if(this.pager.totalItems!=undefined)
    this.calculateInforPaggination(this.pager.currentPage,  this.pager.pageSize,this.pager.totalItems)
  }
  paggination(pageNumber: number, pageSize) {
    
   
    this.pager.pageNumber = pageNumber;
    this.pager.pageSize = pageSize;
    this.pageChange.emit(this.pager);
  }
  calculateInforPaggination(currentPage: number, pageSize: number, totalcount: number) {
    
    let demo = currentPage * pageSize;
    if (demo >= totalcount) {
      this.toPageSize = totalcount;
    } else {
      this.toPageSize = currentPage * pageSize;
    }
    this.fromPageSize = ((currentPage - 1) * pageSize) + 1;
  }
}
