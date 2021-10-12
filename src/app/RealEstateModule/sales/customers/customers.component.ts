import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { BuildingViewModel } from '../../shared/models/building.model';
import { FlatViewModel } from '../../shared/models/flat.model';
import { data } from './customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class CustomersComponent implements OnInit {
  customAttributes:object;
  selectionsettings: object;
  pager: any = {
    totalPages: 0,
    currentPage: 1,
    pageSize: 10,
    pageNumber: 1
  };
  @ViewChild('ModalId') modalId: ElementRef;
  dataDropDown = [ { id: 1, name: 'عميل جديد' }, { id: 2, name: 'تعاقد جديد' },{ id: 2, name: 'عميل انتظار' },{ id: 2, name: 'عميل جديد' }];
  filed={value:"id",text:"name"}
  dataDropDownContract = [ { id: 1, name: 'عقار 1' }, { id: 2, name: 'عقار 2' },{ id: 2, name: 'عقار31' },{ id: 2, name: 'عقار1 1'}];

   radioItems = ['متاح', 'غير متاح'];
   model   = {option: 'متاح'};
   @ViewChild('ModalDetailsId')  modalDetailsId: ElementRef;
   @ViewChild('PaymentId') paymentId: ElementRef;
   @ViewChild('BuildingId') buildingId: ElementRef;
   numberApartments = 0;
  Arr = Array;
  public data: object[];
  FlatViewModel = new Array<FlatViewModel>();
  buildingData: BuildingViewModel = {
    Floors: [//4 عدد الادوار*3 شقق
      [{ ID: 1, Number: 101, Color: 'red', Area: 65, Booked: true },{ ID: 1, Number: 101, Color: 'red', Area: 65, Booked: true }, { ID: 2, Number: 102, Color: '#04AA6D', Area: 70, Booked: false }],
      [{ ID: 3, Number: 201, Color: '#04AA6D', Area: 65, Booked: false }, { ID: 4, Number: 202, Color: '#04AA6D', Area: 70, Booked: false }, { ID: 2, Number: 203, Color: '#04AA6D', Area: 80, Booked: false }],
      [{ ID: 5, Number: 301, Color: '#04AA6D', Area: 65, Booked: false }, { ID: 6, Number: 302, Color: 'red', Area: 70, Booked: false }, { ID: 3, Number: 303, Color: '#04AA6D', Area: 80, Booked: false }],
      [{ ID: 7, Number: 401, Color: '#04AA6D', Area: 65, Booked: false }, { ID: 8, Number: 402, Color: '#04AA6D', Area: 70, Booked: false }, { ID: 4, Number: 403, Color: '#04AA6D', Area: 80, Booked: false }]
    ]
  };
  count: number;
  id: number;

  constructor( public modalService: NgbModal) { }


  ngOnInit(): void {
    this.customAttributes = { class: 'customcss' }; //use custom css
    this.data = data;
  //  this.selectionsettings = { checkboxOnly: true };
  this.selectionsettings = { type: 'Single' };
    this.paggination(this.pager)
  }
  paggination(event){
    
console.log(event)
  }
  openModal() {


      this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });
      
  }

  openModalDetails(id) {
    
    this.modalService.open(this.modalDetailsId, { size: 'lg', backdrop: 'static' });

  }
  openModalBuilding() {
    this.modalService.open(this.buildingId, { size: 'lg', backdrop: 'static' });

  }

 
}
