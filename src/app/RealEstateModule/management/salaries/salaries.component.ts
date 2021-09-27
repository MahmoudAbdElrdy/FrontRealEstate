import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { data } from './salaries';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {
  customAttributes:object;
  selectionsettings: object;
  pager: any = {
    totalPages: 0,
    currentPage: 1,
    pageSize: 10,
    pageNumber: 1
  };
  @ViewChild('ModalId') modalId: ElementRef;
  projectDDL = ['عقار1', 'عقار2', 'عقار3', 'عقار4', 'عقار5'];
  unitDDL = ['بدروم', 'محل تجارى', 'محلات', 'محل تجاري', 'سكني'];
  paymentTypeDDL= [  'دفعات ', 'تقسيط ', 'كاش '];
  constructor( public modalService: NgbModal) { }

  public data: object[];

  ngOnInit(): void {
    this.customAttributes = { class: 'customcss' }; //use custom css
    this.data = data;
    this.selectionsettings = { checkboxOnly: true };
    this.paggination(this.pager)
  }
  paggination(event){
    

  }
  openModal() {


      this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });
      
  }
 
}