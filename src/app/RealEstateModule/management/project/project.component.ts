import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { de } from 'date-fns/locale';
import { Observable } from 'rxjs';
import { BuildingViewModel } from '../../shared/models/building.model';
import { FlatViewModel } from '../../shared/models/flat.model';
import { data } from './visit';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  customAttributes: object;
  selectionsettings: object;
  pager: any = {
    totalPages: 0,
    currentPage: 1,
    pageSize: 10,
    pageNumber: 1
  };
  @ViewChild('ModalId') modalId: ElementRef;
  @ViewChild('PaymentId') paymentId: ElementRef;
  @ViewChild('BuildingId') buildingId: ElementRef;
  //ModalDetailsId
  @ViewChild('ModalDetailsId')  modalDetailsId: ElementRef;
  projectDDL = ['عقار1', 'عقار2', 'عقار3', 'عقار4', 'عقار5'];
  unitDDL = ['بدروم', 'محل تجارى', 'محلات', 'محل تجاري', 'سكني'];
  paymentTypeDDL = ['دفعات ', 'تقسيط ', 'كاش '];
  numberApartments = 0;
  Arr = Array;
  public data: object[];
  FlatViewModel = new Array<FlatViewModel>();
  buildingData: BuildingViewModel = {
    Floors: [//4 عدد الادوار*3 شقق
      // [{ ID: 1, Number: 101, Color: 'red', Area: 65, Booked: true },{ ID: 1, Number: 101, Color: 'red', Area: 65, Booked: true }, { ID: 2, Number: 102, Color: '#04AA6D', Area: 70, Booked: false }, { ID: 3, Number: 103, Color: '#04AA6D', Area: 80, Booked: false }],
      // [{ ID: 3, Number: 201, Color: '#04AA6D', Area: 65, Booked: false }, { ID: 4, Number: 202, Color: '#04AA6D', Area: 70, Booked: false }, { ID: 2, Number: 203, Color: '#04AA6D', Area: 80, Booked: false }],
      // [{ ID: 5, Number: 301, Color: '#04AA6D', Area: 65, Booked: false }, { ID: 6, Number: 302, Color: 'red', Area: 70, Booked: false }, { ID: 3, Number: 303, Color: '#04AA6D', Area: 80, Booked: false }],
      // [{ ID: 7, Number: 401, Color: '#04AA6D', Area: 65, Booked: false }, { ID: 8, Number: 402, Color: '#04AA6D', Area: 70, Booked: false }, { ID: 4, Number: 403, Color: '#04AA6D', Area: 80, Booked: false }]
    ]
  };
  counterNumber: number;
  listArea = new Array<number>();
  constructor(public modalService: NgbModal) { }


  ngOnInit(): void {
    this.customAttributes = { class: 'customcss' }; //use custom css
    this.data = data;
    this.selectionsettings = { checkboxOnly: true };
    this.paggination(this.pager)

  }
  counter(numberApartments) {

    this.counterNumber = Number(numberApartments);

  }
  count = 1000;
  id = 1;
  pushArea(i) {
    debugger
    if (i != undefined && i != 0) {
      this.listArea.push(Number(i))
    }


  }
  viewBulding(Floor) {

    this.count = 1000;
    this.id = 1;

    for (var r = 1; r <= Floor; ++r) {
      let item = new FlatViewModel();

      let Floors = new Array<FlatViewModel>();
      //this.counterNumber
      for (var j = 1; j <= this.counterNumber; ++j) {
       item.Area = 0;
        item.Number = ++this.count;
        item.ID = ++this.id;
        item.Booked = false;
        item.Color = '#04AA6D'
        let item2 = Object.assign({}, item)
        Floors.push(item2)
      }

      this.buildingData.Floors[r] = Floors
    }
    console.log(this.buildingData)

  }
  paggination(event) {


  }
  openModal() {


    this.modalService.open(this.modalId, { size: 'md', backdrop: 'static' });

  }
  openModalPayment() {
    this.modalService.open(this.paymentId, { size: 'lg', backdrop: 'static' });

  }
  openModalBuilding() {
    this.modalService.open(this.buildingId, { size: 'lg', backdrop: 'static' });

  }
  openModalDetails(id) {
    debugger
    this.modalService.open(this.modalDetailsId, { size: 'lg', backdrop: 'static' });

  }

}
