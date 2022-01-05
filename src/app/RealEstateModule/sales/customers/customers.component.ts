
import { BuildingViewModel } from '../../shared/models/building.model';
import { FlatViewModel } from '../../shared/models/flat.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageService, SortService, FilterService, GroupService, GridComponent, PagerComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { General } from 'src/app/shared/helper/general';
import { looseObject } from 'src/app/shared/models/looseObject';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { CustomerService } from 'src/app/shared/services/Customer-service';
import Swal from 'sweetalert2';
import { PublicService } from 'src/app/shared/services/public.service';
import { ProjectService } from 'src/app/shared/services/peoject-service';

import { L10n, setCulture } from '@syncfusion/ej2-base';
import { Locales } from 'src/app/shared/helper/constants';
setCulture('ar-AE');
L10n.load(Locales.getLocaleObjects())
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
  filter: looseObject = { pageNumber: 1, pageSize: 20, name: null, phone: null, referrer: null };
  selectedRowIndexes: any;
  id: any;
  form: FormGroup;
  formDetails: FormGroup;
  dataDropDown = [{ id: 1, name: 'عميل جديد' }, { id: 2, name: 'تعاقد جديد' }, { id: 3, name: 'عميل انتظار' }];
  filed = { value: "id", text: "name" }
  dataDropDownContract = [];

  radioItems = ['متاح', 'غير متاح'];
  model = { option: 'متاح' };
  @ViewChild('ModalDetailsId') modalDetailsId: ElementRef;

  @ViewChild('BuildingId') buildingId: ElementRef;
  numberApartments = 0;
  Arr = Array;
  public data: object[];
  FlatViewModel = new Array<FlatViewModel>();
  buildingData: BuildingViewModel = {
    Floors: [//4 عدد الادوار*3 شقق
    ]
  };
  count: number;
  program: FormGroup;

  constructor(private alert: AlertifyService,
    private formBuilder: FormBuilder, private router: Router,
    private activeRoute: ActivatedRoute, private _publicService: PublicService,
    public modalService: NgbModal, private _service: CustomerService, private _serviceProject: ProjectService) {
    super();
  }


  ngOnInit(): void {
    this.customAttributes = { class: 'customcss' }; //use custom cs
    //  this.selectionsettings = { checkboxOnly: true };
    this.selectionsettings = { type: 'Single' };
    this.filterSettings = {
      type: 'FilterBar', hierarchyMode: 'Parent', mode: 'Immediate',
    }
    this.getData(this.filter);
    this.getDropDownList();
    this.form = this.formBuilder.group({
      id: [0],
      name: ['', [Validators.required]],
      phone: [''],
    });
    this.formDetails = this.formBuilder.group({
      id: [0],
      name: [null],
      area: [null],
      bath: [null],
      kitchen: [null],
      room: [null],
      projectId: [null],
      isBooked: false,
      flatId: [null]
    });
    this.program = this.formBuilder.group({
      id: [0],
      name: ['', [Validators.required]],
      meterCost: [null, [Validators.required]],
      totalCost: [null, [Validators.required]],
      projectUnitDescriptionId: [null]
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
    let department = localStorage.getItem("department");
    if (department == "Administration")
      this.router.navigateByUrl('/Management/Qestions?customerId=' + customerId)
    if (department == "Sales")
      this.router.navigateByUrl('/Sales/Qestions?customerId=' + customerId)
  }
  openCustomerWaiting() {
    let department = localStorage.getItem("department");
    if (department == "Administration")
    this.router.navigateByUrl('/Management/CustomerWaiting')
        if (department == "Sales")
    this.router.navigateByUrl('/Sales/CustomerWaiting')
  
     
    
  }
  openQestion() {

    if (this.id != undefined) {
      let department = localStorage.getItem("department");
      if (department == "Administration")
        this.router.navigateByUrl('/Management/Qestions?customerId=' + this.id)
      if (department == "Sales")
        this.router.navigateByUrl('/Sales/Qestions?customerId=' + this.id)

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

          this.model = res.data;
          this.form.patchValue({
            id: res.data.id,
            name: res.data.name,
            phone: res.data.phone.replace("\r\n", "   "),
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
  onChangeType(e){
    this.filter.customerType = e.value
    this.getData(this.filter);
  }

  openModalBuilding() {
  //  if (this.id != undefined)
      this.modalService.open(this.buildingId, { size: 'lg', backdrop: 'static' });

  }
  //
  getDropDownList() {

    this._publicService.get("Project/GetDropDownList")
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {

          this.dataDropDownContract = res.data;

        }
      });
  }
  getProjectUnitList(floors, apartmentNumber) {

    this._serviceProject.getProjectUnitDescriptionsList(this.projectId)
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {

          this.reservationList = res.data;
          for (var r = 1; r <= floors; ++r) {
            let item = new FlatViewModel();

            let Floors = new Array<FlatViewModel>();
            //this.counterNumber
            this.count=100*r
            for (var j = 1; j <= apartmentNumber; ++j) {
              item.Number = ++this.count;
              item.ID = ++this.idFlat;
              var findItem = res.data.find(x => x.flatID == item.ID);

              //  item.Area = 0;
              if (findItem) {
                item.IsBooked = findItem.isBooked;
                if(item.IsBooked==1){
                  item.Color = '#04AA6D'
                }
                if (item.IsBooked==2) {
                  item.Color = '#FFA500'
                 // item.IsDisabled = true;

                }
                if (item.IsBooked==3) {
                  //#FF0000
                  //  item.Color = '#FFA500'
                  item.Color = '#FF0000'
                //  item.IsDisabled = false;

                }
               
                let item2 = Object.assign({}, item)
                Floors.push(item2)
              }
              else {
                item.IsDisabled = true;
                item.IsBooked = 0;
                item.Color = '#B2BABB'
                let item2 = Object.assign({}, item)
                Floors.push(item2)
              }

            }

            this.buildingData.Floors[r] = Floors
          }
        }
      });
  }
  viewBulding(event) {
    this.buildingData= {
      Floors: [//4 عدد الادوار*3 شقق
      ]
    };
    this.reservationList=null
    this.count = 0;
    this.idFlat = 0;
    this.projectId = event?.itemData?.id;
    this.getProjectUnitList(event?.itemData?.floors, event?.itemData?.apartmentNumber);

    console.log(this.buildingData)

  }
  get isBookedValue() {
    return this.formDetails.controls['isBooked'].value;
  }

  saveReservation() {
    this.program.markAllAsTouched();
    let objectData: any = {}
    objectData.customerId = this.id
    objectData.projectUnitDescriptionId = this.projectUnitDescriptionId
    this.program.patchValue({
      projectUnitDescriptionId: this.projectUnitDescriptionId
    });
    if (this.program.valid) {
      objectData.program = this.program.value;
      this._serviceProject.saveReservation(objectData)
        .subscribe((res: ResponseData) => {

          if (res.isSuccess == true) {

            //  this.getData(this.filter);
            this.alert.success("تم الحجز");
            this.modalService.dismissAll();
          }
          else {
            this.alert.error(res.message)
          }
        },
          (err) => {
            console.log(err)
            this.alert.error("مشكلة في الداتا بيز")
          });
    }


  }
 
  getProjectUnitById(id) {

    this.formDetails.reset();
    this._serviceProject.getProjectUnitDescriptionById(id, this.projectId)
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {
          this.modelReservation=res.data;
          this.formDetails.patchValue({
            id: res.data?.id,
            name: res.data?.name,
            area: res.data?.area,
            bath: res.data?.bath,
            kitchen: res.data?.kitchen,
            room: res.data?.room,
            projectId: res.data?.projectId,
            isBooked: res.data?.isBooked,
            flatId: res.data?.flatId
          });
          this.projectUnitDescriptionId = res.data?.id;
        }
        this.formDetails.disable();
      });

  }
  openModalDetails(id) {

    this.FlatID = id;
    this.modalService.open(this.modalDetailsId, { size: 'lg', backdrop: 'static' });
    if (id != undefined) {
      this.getProjectUnitById(id)
    }
  }
  //
  @ViewChild('PaymentId') paymentId: ElementRef;
  openModalPayment() {
    this.modalService.open(this.paymentId, { size: 'lg', backdrop: 'static' });

  }
  cancelReservation() {
    if (this.modelReservation != null || this.modelReservation != undefined) {
      this.modelReservation.isBooked = 1;
      this._serviceProject.saveProjectUnitDescription(this.modelReservation)
        .subscribe((res: ResponseData) => {

          if (res.isSuccess == true) {

            //  this.getData(this.filter);
            this.alert.success("تم  الغاء الحجز");
            this.modalService.dismissAll();
          }
          else {
            this.alert.error(res.message)
          }
        },
          (err) => {
            console.log(err)
            this.alert.error("مشكلة في الداتا بيز")
          });
    }
  }
}
