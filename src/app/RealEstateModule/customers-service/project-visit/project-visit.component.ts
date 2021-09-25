import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { data } from './visit';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-project-visit',
  templateUrl: './project-visit.component.html',
  styleUrls: ['./project-visit.component.css'],
  providers:[ PageService, SortService, FilterService, GroupService]
})
export class ProjectVisitComponent  implements OnInit {
  customAttributes:object;
  selectionsettings: object;
  pager: any = {
    totalPages: 0,
    currentPage: 1,
    pageSize: 10,
    pageNumber: 1
  };
  @ViewChild('ModalId') modalId: ElementRef;
  public dataDropDown = ['Snooker', 'Tennis', 'Cricket', 'Football', 'Rugby'];
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
