
import { BuildingViewModel } from '../../shared/models/building.model';
import { FlatViewModel } from '../../shared/models/flat.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageService, SortService, FilterService, GroupService, GridComponent, PagerComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { Globals } from 'src/app/shared/helper/constants';
import { General } from 'src/app/shared/helper/general';
import { looseObject } from 'src/app/shared/models/looseObject';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { CustomerService } from 'src/app/shared/services/Customer-service';
import Swal from 'sweetalert2';
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
export class CustomersSalesComponent extends General implements OnInit {
  customAttributes: object;
  selectionsettings: object;

  //pager
  pageSize: number;
  currentPage: number;
  totalRecordsCount: number;
  pageCount: number;
  @ViewChild('ModalId') modalId: ElementRef;
  @ViewChild('grid') gridObj: GridComponent;
  @ViewChild("pager") pager: PagerComponent;
  departmentDDL = [];
  //FieldsDDL:Object;
  FieldsDDL: Object = { text: 'text', value: 'value' };
  filter: looseObject = { pageNumber: 1, pageSize: 15, name: null, phone: null, referrer: null };
  selectedRowIndexes: any;
  id: any;
  form: FormGroup;
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
 

  constructor( private alert: AlertifyService,
    private formBuilder: FormBuilder, private router: Router,
    private activeRoute: ActivatedRoute,
    public modalService: NgbModal, private _service: CustomerService) {
    super();
  }


  ngOnInit(): void {
    this.customAttributes = { class: 'customcss' }; //use custom cs
    //  this.selectionsettings = { checkboxOnly: true };
    this.selectionsettings = { type: 'Single' };
    this.getData(this.filter);

    this.form = this.formBuilder.group({
      id: [0],
      name: ['', [Validators.required]],
      phone: [''],
    });
  }
  changePage(event) {

    if (this.change) {
      if (event.currentPage) {

        this.filter.pageNumber = event.currentPage;
        this.getData(this.filter);
        return;
      }
    }
    this.change = event.pointerType;
  }
  getData(filter) {

    this._service.getAll(filter)
      .subscribe(res => {
        if (res.isSuccess) {
          
          this.data = res.data;
          this.totalRecordsCount = res.totalRecordsCount;
          this.pageCount = res.pageCount > 5 ? 5 : res.pageCount;
          this.pageSize = res.pageSize;

        } else {
          Swal.fire("حدث مشكلة", null, "error");
        }
        this.form.reset();
      })
  }
 
  onChangeDateTime(args: any): void {

    this.filter.workSince = args
    this.getData(this.filter);
  }

  begin(args): any {
    
    if (args.requestType === "filtering" && args.action === "filter") {
      if (args.currentFilterObject.field === "name") {
        this.filter.name = args.currentFilterObject.value;
      }
      if (args.currentFilterObject.field === "phone") {
        this.filter.phone = args.currentFilterObject.value;
      }
      if (args.currentFilterObject.field === "referrer") {
        this.filter.referrer = args.currentFilterObject.value;
      }
      this.filter.pageNumber = 1;
      this.getData(this.filter);
    }
    else if (args.action == "clearFilter") {
      var clearFilter = args?.currentFilterObject?.properties;
      if (clearFilter) {

        if (clearFilter.field === "name") {
          this.filter.name = null;

        }
        if (clearFilter.field === "phone") {
          this.filter.phone = null;
        }
        if (clearFilter.field === "referrer") {
          this.filter.referrer = null;
        }
        this.filter.pageNumber = 1;
        this.getData(this.filter);
      }

    }
  }

  openModal() {

    this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });


  }
  openEditModal() {


    if (this.id != undefined || this.id > 0) {
      this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });
      this.getById();
    }

  }
  dataBound() {
    
    Object.assign((this.gridObj.filterModule as any).filterOperators, { startsWith: 'contains' });
  }
  openEdit(id) {


    if (id != undefined || id > 0) {
      this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });
      this.id = id;
      this.getById();
    }

  }
  openModalQestion(customerId, customerName) {

    localStorage.setItem("customerName", customerName);

    this.router.navigateByUrl('/Management/Qestions?customerId=' + customerId)

  }
  openQestion() {

    if (this.id != undefined) {

      this.router.navigateByUrl('/Management/Qestions?customerId=' + this.id)

    }


  }

  rowSelected(args: RowSelectEventArgs) {

    var data = args.data as any;
    this.id = data.id;
    this.model = data;

    localStorage.setItem("customerName", data.name);
  }
  getById() {
    this._service.getById(this.id)
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {
          debugger
          this.model = res.data;
          this.form.patchValue({
            id: res.data.id,
            name: res.data.name,
            phone: res.data.phone.replace("\r\n","   "),
          });

        }

      });

  }
  get f() { return this.form.controls; }
  addEitFrom() {
    this.form.markAllAsTouched();
    this.addEitFromGeneral();
  }
  remove(id) {
    if (id != undefined)
      this.removeGeneral(id)
  }
  removeSlect() {
    if (this.id != undefined)
      this.removeGeneral(this.id)
  }

  openModalDetails(id) {
    
    this.modalService.open(this.modalDetailsId, { size: 'lg', backdrop: 'static' });

  }
  openModalBuilding() {
    this.modalService.open(this.buildingId, { size: 'lg', backdrop: 'static' });

  }

 
}
