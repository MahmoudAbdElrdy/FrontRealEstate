import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilterService, GridComponent, PagerComponent, PageService, RowSelectEventArgs, SortService, TextWrapSettingsModel, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { looseObject } from 'src/app/shared/models/looseObject';
import Swal from 'sweetalert2';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { General } from 'src/app/shared/helper/general';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/shared/services/contract-service';
import { FlatViewModel } from '../../shared/models/flat.model';
import { BuildingViewModel } from '../../shared/models/building.model';
import { PublicService } from 'src/app/shared/services/public.service';
import { ProjectService } from 'src/app/shared/services/peoject-service';
import { UploadServicesService } from 'src/app/shared/services/UploadServices.service';
import { isEmpty, isNull } from 'lodash';
import { Globals } from 'src/app/shared/helper/constants';
@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [PageService, SortService, FilterService, ToolbarService]
})
export class ContractListComponent extends General implements OnInit {
  customAttributes: object;
  selectionsettings: object;
  pageSize: number;
  currentPage: number;
  totalRecordsCount: number;
  pageCount: number;
  @ViewChild('grid') gridObj: GridComponent;
  @ViewChild("pager") pager: PagerComponent;
  @ViewChild('ModalId') modalId: ElementRef;
  //#cancellId let-modalcancell
  wrapSettings: TextWrapSettingsModel;
  departmentDDL = [];
  //FieldsDDL:Object;
  FieldsDDL: Object = { text: 'text', value: 'value' };
  FieldsProject: Object = { text: 'name', value: 'id' };
  filter: looseObject = { pageNumber: 1, pageSize: 15, name: null, address: null };
  selectedRowIndexes: any;
  id: any;
  model: any = {};
  form: FormGroup;
  formDetails: FormGroup;
  employeeName: string;
  data: object[];
  stockList = [{ value: true, text: "عقد سهم" }, { value: false, text: "عقد واحدات" }]
  constructor(private formBuilder: FormBuilder,
    public modalService: NgbModal,
    private modalService2:NgbModal,
    private _service: ContractService,
    private _publicService: PublicService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private _serviceProject: ProjectService,
    private UploadServicesService: UploadServicesService,
    private cdRef: ChangeDetectorRef,
    private alert: AlertifyService) {
    super();
  }
  ngAfterViewChecked() {

    this.cdRef.detectChanges();
  }
  ngOnInit(): void {

    this.customAttributes = { class: 'customcss' }; //use custom cs
    //  this.selectionsettings = { checkboxOnly: true };
    this.selectionsettings = { type: 'Single' };


    this.wrapSettings = { wrapMode: "Content" };
    this.getData(this.filter);
    this.getDropDownList()
    this.form = this.formBuilder.group({
      id: [0],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      nationalNumber: [null, [Validators.required]],
      address: [null, [Validators.required]],
      program: [0, [Validators.required]],
      projectId: [0, [Validators.required]],
      date: [Globals.formatDate(Date.now), [Validators.required]],
      meterCost: [0, [Validators.required]],
      totalCost: [0, [Validators.required]],
      isStock: [false, [Validators.required]],
      stockCount: [0],
      metersCount: [0],
      projectUnitId: [null],
      notes: [null],
      numberFloor: [null],
      contractFile: [[], []],
    });

    this.formDetails = this.formBuilder.group({
      id: [0],
      name: [null, [Validators.required]],
      area: [null, [Validators.required]],
      bath: [null, [Validators.required]],
      kitchen: [null, [Validators.required]],
      room: [null, [Validators.required]],
      ContractId: this.id,
      isBooked: false,
      flatId: null
    });
  }
  getDropDownList() {

    this._publicService.get("Project/GetDropDownList")
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {

          this.dataDropDown = res.data;

        }
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

    this.filter.date = args
    this.getData(this.filter);
  }
  openModal() {
    this.form.reset();
    this.values.push({ value: "" });
    this.valuesPhone.push({ value: "" });
    this.valuesNational.push({ value: "" });
    this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });

    this.form.controls['stockCount'].disable()
    this.form.controls['numberFloor'].disable()
    this.form.controls['metersCount'].disable()
    this.form.controls['projectUnitId'].disable()
  }
  openEditModal() {

    if (this.id != undefined || this.id > 0) {
      this.form.reset();
      this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });
      this.projectId = this.id
      let e: any = { value: this.id };
      this.values = [];
      this.valuesNational = [];
      this.valuesPhone = [];
      this.getById();
    }

  }
  openEdit(id) {


    if (id != undefined || id > 0) {
      this.form.reset();
      this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });
      this.id = id;
      this.projectId = this.id
      this.values = [];
      this.valuesNational = [];
      this.valuesPhone = [];
      this.getById();
    }

  }

  getById() {
    this.form.reset();

    this._service.getById(this.id)
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {

          this.model = res.data;
          this.form.patchValue({
            id: res.data.id,
            name: res.data.name,
            address: res.data.address,
            phone: res.data.phone,
            nationalNumber: res.data.nationalNumber,
            program: res.data.program,
            projectId: res.data.projectId,
            date: Globals.formatDate(Date.parse(res.data.date)),
            meterCost: res.data.meterCost,
            totalCost: res.data.totalCost,
            isStock: res.data.isStock,
            stockCount: res.data.stockCount,
            metersCount: res.data.metersCount,
            projectUnitId: res.data.projectUnitId,
            notes: res.data.notes,
            numberFloor: res.data.numberFloor,
            contractFile: res.data.contractFile,
          });

          let values = res.data?.name.split("&");
          values.forEach(element => {
            this.values.push({ value: element });
          });
          let valuesNational = res.data?.nationalNumber.split("&");
          valuesNational.forEach(element => {
            this.valuesNational.push({ value: element });
          });
          let valuesPhone = res.data?.phone.split("&");

          valuesPhone.forEach(element => {
            this.valuesPhone.push({ value: element });
          });
          this.ImageUrl = res.data?.contractFile;
          this.unitListDLL = res.data?.unitListDLL;
          this.unitDescriptionsDLL = res.data?.unitDescriptionsDLL;
          this.changeIsStock();
        }

      });

  }
  rowSelected(args: RowSelectEventArgs) {
    this.form.reset();
    this.values = [];
    this.valuesNational = [];
    this.valuesPhone = [];
    var data = args.data as any;
    this.id = data.id;
    this.contractId = data.id
    this.model = data;
  }

  formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }



  remove(id) {
    if (id != undefined)
      this.removeGeneral(id)
  }
  removeSlect() {
    if (this.id != undefined)
      this.removeGeneral(this.id)
  }

  dataBound() {
    Object.assign((this.gridObj.filterModule as any).filterOperators, { startsWith: 'contains' });
  }
  begin(args): any {

    if (args.requestType === "filtering" && args.action === "filter") {
      if (args.currentFilterObject.field === "name") {
        this.filter.name = args.currentFilterObject.value;
      }
      if (args.currentFilterObject.field === "address") {
        this.filter.address = args.currentFilterObject.value;
      }
      if (args.currentFilterObject.field === "program") {
        this.filter.program = args.currentFilterObject.value;
      }
      if (args.currentFilterObject.field === "phone") {
        this.filter.phone = args.currentFilterObject.value;
      }
      if (args.currentFilterObject.field === "nationalNumber") {
        this.filter.nationalNumber = args.currentFilterObject.value;
      }
      if (args.currentFilterObject.field === "notes") {
        this.filter.notes = args.currentFilterObject.value;
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
        if (clearFilter.field === "address") {
          this.filter.address = null;
        }
        if (clearFilter.field === "program") {
          this.filter.program = null;
        }
        if (clearFilter.field === "phone") {
          this.filter.phone = null;
        }
        if (clearFilter.field === "nationalNumber") {
          this.filter.nationalNumber = null;
        }
        if (clearFilter.field === "notes") {
          this.filter.notes = null;
        }
        this.filter.pageNumber = 1;
        this.getData(this.filter);
      }

    }
  }
  //
  onChangeStock(e) {
    this.filter.isStock = e.value
    this.getData(this.filter);
  }
  onChangeProject(e) {


    this.filter.ProjectId = e.value
    this.getData(this.filter);
  }
  //Add Update
  values = [];
  removeCustomer(i) {

    this.values.splice(i, 1);
  }
  addCustomer() {

    this.values.push({ value: "" });


    console.log(this.form.value.name)
  }
  //
  valuesPhone = [];
  removePhone(i) {
    this.valuesPhone.splice(i, 1);
  }

  addPhone() {
    this.valuesPhone.push({ value: "" });
  }
  //
  valuesNational = [];
  removeNational(i) {
    this.valuesNational.splice(i, 1);
  }

  addNational() {
    this.valuesNational.push({ value: "" });
  }

  changeIsStock() {

    if (this.form.controls['isStock'].value == true) {
      this.form.controls['stockCount'].enable()
      this.form.controls['numberFloor'].disable()
      this.form.controls['metersCount'].enable()
      this.form.controls['projectUnitId'].disable()
    }
    else {
      this.form.controls['stockCount'].disable()
      this.form.controls['numberFloor'].enable()
      this.form.controls['metersCount'].disable()
      this.form.controls['projectUnitId'].enable()

    }

    //   return this.form.controls['isStock'].value;
  }
  radioItems = [{ name: 'مساهمة', value: true }, { name: 'واحدات ', value: false }];
  FieldsDDLUnit: Object = { text: 'floorNumber', value: 'floorNumber' };
  FieldsUnit: Object = { text: 'number', value: 'id' };
  onChangeProjectToGetUnits(e) {
    this.projectId = e.value;
    this._serviceProject.getProjectUnitList(e.value)
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {
          this.unitListDLL = res.data;
        }
      });
  }
  onChangeUnti(e) {

    // this.unitDescriptionsDLL= this.unitListDLL?.find(x=>x.floorNumber==e.value)
    this._serviceProject.getUnitDescriptionsByUnti(e.value, this.projectId)
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {
          this.unitDescriptionsDLL = res.data;
        }
      });
  }

  //
  BaseFile: string = "http://localhost:7652/wwwroot/UploadFiles/";
  ImageUrl: any;
  fileToUpload = null;
  @ViewChild('userPhoto') userPhoto: ElementRef;
  uploadImage(event) {

    this.file2 = event.target.files;
    const formData = new FormData();
    for (let index = 0; index < this.file2.length; index++) {
      formData.append('files', this.file2[index]);
    }
    this.UploadServicesService.UploadImage2(formData).subscribe(event => {

      const result = event as any;
      console.log(result)
      this.ImageUrl = result.filePaths;
      this.fileToUpload = null;
      this.form.patchValue({
        contractFile: result.filePaths
      });
    }
    );
  }
  removeAttachments2(e) {
    ;
    this.ImageUrl.splice(e, 1)
  }
  //


  addEitFrom() {

    this.form.markAllAsTouched();
    let name: string = "";
    name = this.values[0].value;
    if (this.values.length > 0) {
      for (var i = 1; i <= this.values.length - 1; i++) {
        name += "&" + this.values[i].value
      }
    }
    ///
    let phone: string = "";
    phone = this.valuesPhone[0].value;
    if (this.valuesPhone.length > 0) {
      for (var i = 1; i <= this.valuesPhone.length - 1; i++) {
        phone += "&" + this.valuesPhone[i].value
      }
    }
    ///
    let national: string = "";
    national = this.valuesNational[0].value;
    if (this.valuesNational.length > 0) {
      for (var i = 1; i <= this.valuesNational.length - 1; i++) {
        national += "&" + this.valuesNational[i].value
      }
    }
    this.form.patchValue({
      name: name,
      phone: phone,
      nationalNumber: national
    })
    this.addEitFromGeneral();
  }
  //CancellContract
  @ViewChild('cancellId') modalcancell: ElementRef;
  cancell: any = { paid: 0, back: 0 };

  cancelSlect() {

    this.modalService.open(this.modalcancell, { size: 'lg', backdrop: 'static' });

  }
  cancelSlectSave() {
    if (this.id != undefined)
      this.cancel(this.id)
  }
  cancel(id) {
    if (id == 0) return;
    Swal.fire({
      title: 'الغاء',
      text: "هل متاكد من الغاء العقد",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم',
      cancelButtonText: "لا"
    }).then((result) => {
      if (result.value) {
        this.cancell.contractId = id;

        this._service.cancellContract(this.cancell).subscribe(res => {
          if (res.isSuccess) {
            this.getData(this.filter);
            this.modalService.dismissAll();
            this.alert.success(res.message);

          }
          else {
            this.alert.error(res.message);
          }
        });
      }

    })
  }
  //  this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });
//date تاريخ الاقساط
 ///
 ///
 @ViewChild('InstallmentdateId') installmentdate: ElementRef;
 openModalInstallmentdate() {
   this.modalService.open(this.installmentdate, { size: 'lg', backdrop: 'static' });

 }
 @ViewChild('InstallmentdateList') installmentdateList: ElementRef;
 openModalInstallmentdateList() {
   this.modalService.open(this.installmentdateList, { size: 'lg', backdrop: 'static' });

 }
 ///

 @ViewChild('InstallmentGenerate') installmentGenerate: ElementRef;
 openModalInstallmentGeneratet() {
   this.modalService2.open(this.installmentGenerate, { size: 'lg', backdrop: 'static' });

 }

 installmentGeneratet(fromDate, toDate, numberInstallmen) {

   var start = fromDate.split('-');
   var end = toDate.split('-');
   var startYear = parseInt(start[0]);
   var endYear = parseInt(end[0]);
   var dates = [];
   let number = 1;
   for (var i = startYear; i <= endYear; i++) {
     var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
     var startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
     for (var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
       debugger
       var month = j + 1;
       var displayMonth = month < 10 ? '0' + month : month;

       let _temp: { [k: string]: any } = {};
       let newDate = new Date([i, displayMonth, parseInt(start[2])].join('-'));
       _temp.ProjectID = "قسط " + number++;
       _temp.Number = numberInstallmen;
       _temp.date = newDate;

       this.data2.push(_temp)
       console.log(dates);
       console.log(this.data2);
     }

   }



   this.modalService2.dismissAll("InstallmentGenerate");
   this.modalService.open(this.installmentdateList, { size: 'lg', backdrop: 'static' });

 }
 data3=[{type:"اساسي",installment:"قسط 1",installmentDate:"23/4/2021",value1:"5000",numberBill:"4",payDate:"23/5/2021",value2:"6000"}]

 @ViewChild('InstallmentPay') installmentPay: ElementRef;
 openModalInstallmentPay() {
   this.modalService.open(this.installmentPay, { size: 'lg', backdrop: 'static' });

 }
}
