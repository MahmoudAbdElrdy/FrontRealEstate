import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { data } from './customer';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css'],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class ContractComponent implements OnInit {
  customAttributes:object;
  selectionsettings: object;
  pager: any = {
    totalPages: 0,
    currentPage: 1,
    pageSize: 10,
    pageNumber: 1
  };
  @ViewChild('ModalId') modalId: ElementRef;
  dataDropDown = [ { id: 1, name: 'عقار 1' }, { id: 2, name: 'عقار 2' },{ id: 2, name: 'عقار31' },{ id: 2, name: 'عقار1 1'}];
  filed={value:"id",text:"name"}

  constructor( public modalService: NgbModal) { }

  public data: object[];

  ngOnInit(): void {
    this.customAttributes = { class: 'customcss' }; //use custom css
    this.data = data;
    this.selectionsettings = { checkboxOnly: true };
    this.paggination(this.pager)
  }
  paggination(event){
    
console.log(event)
  }
  openModal() {


      this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });
      
  }
}
