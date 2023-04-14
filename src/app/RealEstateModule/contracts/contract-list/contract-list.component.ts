import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilterService, GridComponent, InfiniteScrollService, PagerComponent, PageService, QueryCellInfoEventArgs, RowSelectEventArgs, SortService, TextWrapSettingsModel, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { looseObject } from 'src/app/shared/models/looseObject';
import Swal from 'sweetalert2';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { General } from 'src/app/shared/helper/general';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/shared/services/contract-service';
import { PublicService } from 'src/app/shared/services/public.service';
import { ProjectService } from 'src/app/shared/services/peoject-service';
import { UploadServicesService } from 'src/app/shared/services/UploadServices.service';
import { Globals } from 'src/app/shared/helper/constants';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { Locales } from 'src/app/shared/helper/constants';
import { ReportService } from 'src/app/shared/services/report.service';
import { timeThursdays } from 'd3';
import { PageSettingsModel, InfiniteScrollSettingsModel } from '@syncfusion/ej2-angular-grids';
import * as moment from 'moment';

setCulture('ar-AE');
L10n.load(Locales.getLocaleObjects())
@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [PageService, SortService, FilterService, ToolbarService, InfiniteScrollService]
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
  public infiniteOptions: InfiniteScrollSettingsModel;
  //#cancellId let-modalcancell
  wrapSettings: TextWrapSettingsModel;
  departmentDDL = [];
  //FieldsDDL:Object;
  FieldsDDL: Object = { text: 'text', value: 'value' };
  FieldsDDLYear: Object = { text: 'value', value: 'value' };
  FieldsProject: Object = { text: 'name', value: 'id' };
  filter: looseObject = { pageNumber: 1, pageSize: 20, name: null, address: null };
  selectedRowIndexes: any;
  id: any;
  model: any = {};
  form: FormGroup;
  formcontractDetail: FormGroup;
  formcontractDetailBill: FormGroup;
  employeeName: string;
  data: object[];
  stockList = [{ value: true, text: " سهم" }, { value: false, text: " واحدات" }]
  extraList = [{ value: "عداد مياة", text: "عداد مياة" }, { text: "عداد كهرباء", value: "عداد كهرباء" },
  { text: "دفعة مباني", value: "دفعة مباني" }, { text: " وديعة اسانسير", value: " وديعة اسانسير" }]
  constructor(private formBuilder: FormBuilder,
    public modalService: NgbModal,
    private modalService2: NgbModal,
    private _service: ContractService,
    private _publicService: PublicService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private _serviceProject: ProjectService,
    private UploadServicesService: UploadServicesService,
    private cdRef: ChangeDetectorRef,
    private alert: AlertifyService, private _serviceReport: ReportService,) {
    super();
  }
  ngAfterViewChecked() {

    this.cdRef.detectChanges();
  }
  ngOnInit(): void {

    this.customAttributes = { class: 'customcss' }; //use custom cs
    //  this.selectionsettings = { checkboxOnly: true };
    this.selectionsettings = { type: 'Single' };
    this.infiniteOptions = { initialBlocks: 5 };
    this.filterSettings = {
      type: 'FilterBar', hierarchyMode: 'Parent', mode: 'Immediate',
    }
    this.wrapSettings = { wrapMode: "Content" };
    this.getData(this.filter);
    this.getDropDownList()
    this.getDropDownListYear()
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
      metersNumer: [0, [Validators.required]],
      isStock: [false, [Validators.required]],
      stockCount: [0],
      metersCount: [0],
      projectUnitId: [null],
      notes: [null],
      numberFloor: [null],
      contractFile: [[], []],
    });
    this.formcontractDetail = this.formBuilder.group({
      id: [0],
      name: [null, [Validators.required]],
      contractId: this.id,
      isExtra: false,
      date: Globals.formatDate(Date.now),
      amount: 0,
      nameisExtra: [null, [Validators.required]],
    });

  }
  changeMeterCost() {
    debugger
    var meterCost = this.form.value.totalCost / this.form.value.metersNumer;
    this.form.patchValue({ meterCost: meterCost })
  }
  getDropDownList() {

    this._publicService.get("Project/GetDropDownList")
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {

          this.dataDropDown = res.data;

        }
      });
  }
  Getpaid() {

    this._service.getpaid(this.id)
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {

          this.paid = res.data;
          this.cancell.paid = res.data;
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
          this.alert.error('حدثت مشكلة');
        }

        this.form.reset();
      })
  }
  dataDropDownYear = new Array();
  getDropDownListYear() {
    var max = new Date().getFullYear(),
      min = max - 10,
      max = max + 90;

    for (var i = min; i <= max; i++) {

      this.dataDropDownYear.push(i);
    }

  }
  onChangeDateTime(e) {

    this.filter.date = e.itemData.value
    this.getData(this.filter);
  }
  openModal() {
    this.form.reset();
    this.values = [];
    this.values = [];
    this.valuesNational = [];
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
            metersNumer: res.data.metersNumer,
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
          let numberFloor = this.unitListDLL.find(c => c.numberFloor == numberFloor)
          let floorNumber = numberFloor?.floorNumber
          //this.unitDescriptionsDLL = res.data?.unitDescriptionsDLL;
          this.unitDescriptionsDLL = res.data?.unitDescriptionsDLL.map((val) => {
            return { id: val.id, number: val.number <= 9 && floorNumber == 0 ? "00" + val.number : val.number }
          });
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

  getFile(customerName) {

    var ReportName = "CustomerCardStock";
    //ASPX page URL to load report  
    var src = 'http://10.10.10.244:4277/Reports/ReportForm/ReportPage.aspx?';
    //We can add parameters here  
    src = src + "ReportName=" + ReportName + "&customerName=" + customerName;

    window.open(src, "_blank");
    //      this._service.customerCard(this.form.value).subscribe((data: Blob) => {
    //       var fileType: any;
    //     fileType = "application/pdf";
    //     var blob = new Blob([data], { type: fileType });
    //     const objectUrl: string = URL.createObjectURL(blob);

    //     window.open(objectUrl, '_blank');

    // })


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
      if (args.currentFilterObject.field === "numberFloor") {
        this.filter.numberFloor = args.currentFilterObject.value;
      }
      if (args.currentFilterObject.field === "number") {
        this.filter.number = args.currentFilterObject.value;
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
        if (clearFilter.field === "number") {
          this.filter.number = null;
        }
        if (clearFilter.field === "numberFloor") {
          this.filter.numberFloor = null;
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

    let numberFloor = e.itemData.floorNumber;
    // this.unitDescriptionsDLL= this.unitListDLL?.find(x=>x.floorNumber==e.value)
    this._serviceProject.getUnitDescriptionsByUnti(e.value, this.projectId)
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {

          //  this.unitDescriptionsDLL = res.data;
          this.unitDescriptionsDLL = res.data.map((val) => {
            return { id: val.id, number: val.number <= 9 && numberFloor == 0 ? "00" + val.number : val.number }
          });
        }
      });
  }

  //
  BaseFile: string = "http://10.10.10.244:8060/wwwroot/UploadFiles/";
  ImageUrl = new Array;
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
      result.filePaths.forEach(element => {
        this.ImageUrl.push(element);
      });

      // this.fileToUpload = null;
      this.form.patchValue({
        contractFile: this.ImageUrl
      });
      console.log(this.ImageUrl)
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
  cancell: any = { back: 0, date: Globals.formatDate(Date.now), paid: this.paid };

  cancelSlect() {
    this.Getpaid();
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
  ///rowContractDetailSelected
  get isExtra() {
    return this.formcontractDetail.get('isExtra').value;
  }
  rowContractDateSelected(args: RowSelectEventArgs) {



    var data = args.data as any;
    this.contractDetailIdData = data;
    if (data != null) {
      this.formcontractDetail.reset();
      this.formcontractDetail = this.formBuilder.group({
        id: [0],
        name: [null, [Validators.required]],
        contractId: this.id,
        isExtra: false,
        date: Globals.formatDate(Date.now),
        amount: 0,
        nameisExtra: [null, [Validators.required]],
      });
    }

  }
  saveContractDetailId() {

    this.formcontractDetail.markAllAsTouched();
    if (this.formcontractDetail.get('isExtra').value == true) {
      this.formcontractDetail.patchValue({
        name: this.formcontractDetail.get('nameisExtra').value,
      });
    }
    else {
      this.formcontractDetail.patchValue({
        nameisExtra: this.formcontractDetail.get('name').value,
      });
    }
    if (this.formcontractDetail.valid) {
      this._service.saveContractDetail(this.formcontractDetail.getRawValue()).subscribe(res => {
        if (res.isSuccess) {

          this.alert.success(res.message);
          this.getAllContractDetail();
          this.modalService2.dismissAll("InstallmentGenerate");
          this.modalService.open(this.installmentdateList, { size: 'lg', backdrop: 'static' });
        }
        else {
          this.alert.error(res.message);
          this.modalService2.dismissAll("InstallmentGenerate");
          this.modalService.open(this.installmentdateList, { size: 'lg', backdrop: 'static' });
        }
      });
    }

  }
  @ViewChild('InstallmentdateId') installmentdate: ElementRef;
  openModalInstallmentdate() {
    this.formcontractDetail.reset();
    this.formcontractDetail.patchValue({
      isExtra: false,
      contractId: this.id,
    });
    this.modalService.open(this.installmentdate, { size: 'lg', backdrop: 'static' });

  }
  deleteInstallmentdate() {
    if (this.contractDetailIdData.id == 0) return;
    Swal.fire({
      title: 'الحذف',
      text: "هل متاكد من الحذف؟",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم',
      cancelButtonText: "لا"
    }).then((result) => {
      if (result.value) {

        this._service.deleteContractDetail(this.contractDetailIdData.id).subscribe(res => {
          if (res.isSuccess) {
            this.getAllContractDetail()
            this.alert.success(res.message);


          }
          else {
            this.alert.error(res.message);
          }
        });
      }

    })
  }
  deleteAll() {
    if (this.id == 0) return;
    Swal.fire({
      title: 'الحذف',
      text: "هل متاكد من الحذف؟",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم',
      cancelButtonText: "لا"
    }).then((result) => {
      if (result.value) {

        this._service.deleteAllContractDetail(this.id).subscribe(res => {
          if (res.isSuccess) {
            this.getAllContractDetail()
            this.alert.success(res.message);


          }
          else {
            this.alert.error(res.message);
          }
        });
      }

    })
  }
  customiseCell(args: QueryCellInfoEventArgs) {

    if (this.contractDetail.totalItems > this.contractDetail.totalCost) {
      if (args.data['isExtra'] == false) {
        (args.cell as any).style.backgroundColor = "red";
      }
    }
    else if (this.contractDetail.totalItems < this.contractDetail.totalCost) {
      if (args.data['isExtra'] == false) {
        (args.cell as any).style.backgroundColor = "red";
      }
    }
    else if (this.contractDetail.totalItems == this.contractDetail.totalCost) {
      if (args.data['isExtra'] == false) {
        (args.cell as any).style.backgroundColor = "green";
        // (args.cell as any).style.backgroundColor ="Gray" ;
      }

    }

  }
  editModalInstallmentdate() {
    this.modalService.open(this.installmentdate, { size: 'lg', backdrop: 'static' });

    if (this.contractDetailIdData != null || this.contractDetailIdData != undefined) {

      this.formcontractDetail = this.formBuilder.group({
        id: this.contractDetailIdData.id,
        name: this.contractDetailIdData.name,
        contractId: this.id,
        isExtra: this.contractDetailIdData.isExtra,
        date: Globals.formatDate(Date.parse(this.contractDetailIdData.date)),
        amount: this.contractDetailIdData.amount,
        nameisExtra: this.contractDetailIdData.name,
      });
    }
  }
  @ViewChild('InstallmentdateList') installmentdateList: ElementRef;
  contractDetail: any = { totalCost: 0, totalItems: 0, totalAccessories: 0 };
  openModalInstallmentdateList() {

    if (this.id != undefined || this.id > 0) {

      this.contractDetail.totalCost = this.model.totalCost
      //  this.contractDetail.totalItems = this.model.totalCost
      this.getAllContractDetail()
      this.modalService.open(this.installmentdateList, { size: 'lg', backdrop: 'static' });

    }


  }
  ///

  @ViewChild('InstallmentGenerate') installmentGenerate: ElementRef;
  openModalInstallmentGeneratet() {
    this.modalService2.open(this.installmentGenerate, { size: 'lg', backdrop: 'static' });

  }
  data2 = [];
  installmentDisbled=false;
  installmentGeneratet(fromDate, toDate, numberInstallmen, numberMonth) {
    this.installmentDisbled=true;
    var startDate = moment(fromDate);
    var endDate = moment(toDate);

    var dates = [];
    //endDate.subtract(1, "month"); //Substract one month to exclude endDate itself
    let number = 1;
    var month = moment(startDate); //clone the startDate
    while (month <= endDate) {
      let _temp: { [k: string]: any } = {};

      dates.push(month.format('YYYY/MM/DD'));
    debugger
      let newDate = new Date(month.format('YYYY/MM/DD'));
        _temp.name = "قسط " + number++;
        _temp.amount = numberInstallmen;
        _temp.date = newDate;
        _temp.isExtra = false;
        _temp.contractID = this.id;
        this.data2.push(_temp)
        month.add( Number(numberMonth), "month");
    }
   // this.data2 = []
   // var start = fromDate.split('-');
   // var end = toDate.split('-');
   // var startYear = parseInt(start[0]);
   // var endYear = parseInt(end[0]);
    // var dates = [];
    // let number = 1;
    // for (var i = startYear; i <= endYear; i++) {
    //   debugger
    //   var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
    //   var startMon = i === startYear ? parseInt(start[1]) - 1 : 0;

    //   for (var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : (Number(j) + Number(numberMonth))) {
    //     debugger
    //     var month = j + 1;
    //     var displayMonth = month < 10 ? '0' + month : month;

    //     let _temp: { [k: string]: any } = {};

    //     let number2 = parseInt(start[2]);
    //     // if(number2<=9){
    //     //   number2=number2+1
    //     // }
    //     let newDate = new Date([i, displayMonth, number2].join('-'));
    //     _temp.name = "قسط " + number++;
    //     _temp.amount = numberInstallmen;
    //     _temp.date = newDate;
    //     _temp.isExtra = false;
    //     _temp.contractID = this.id;
    //     this.data2.push(_temp)
    //     console.log(dates);
    //     console.log(this.data2);
    //   }

    // }

    let contractDetailDtos: any = { ContractDetailDtoList: null }
    contractDetailDtos.contractDetailDtos = this.data2;
    this._service.saveListContractDetail(contractDetailDtos).subscribe(res => {
      if (res.isSuccess) {

        this.alert.success(res.message);
        this.getAllContractDetail();
        this.modalService2.dismissAll("InstallmentGenerate");
        this.modalService.open(this.installmentdateList, { size: 'lg', backdrop: 'static' });
        this.installmentDisbled=false;
      }
      else {
        this.alert.error(res.message);
        this.modalService2.dismissAll("InstallmentGenerate");
        this.modalService.open(this.installmentdateList, { size: 'lg', backdrop: 'static' });
      }
    });



  }

  //
  getTotal(list) {
    let total = 0;

    list.forEach((item) => {

      if (item.isExtra) {
        total += Number(item.amount);
      }

    });

    return total;
  }
  getTotalNotExtra(list) {
    let total = 0;

    list.forEach((item) => {

      if (!item.isExtra) {
        total += Number(item.amount);
      }

    });

    return total;
  }
  getAllContractDetail() {

    this._service.getAllContractDetail(this.id)
      .subscribe(res => {
        if (res.isSuccess) {

          this.dataContractDetail = res.data;
          this.contractDetail.totalAccessories = 0
          this.contractDetail.totalItems = 0
          this.contractDetail.totalAccessories = this.getTotal(this.dataContractDetail)
          this.contractDetail.totalItems += this.getTotalNotExtra(this.dataContractDetail)
        } else {
          this.alert.error('حدثت مشكلة');
        }

        this.form.reset();
      })
  }
  // data3 = [{ type: "اساسي", installment: "قسط 1", installmentDate: "23/4/2021", value1: "5000", numberBill: "4", payDate: "23/5/2021", value2: "6000" }]
  //viewPayInstallments
  @ViewChild('InstallmentPay') installmentPay: ElementRef;
  openModalInstallmentPay() {
    this.modalService.open(this.installmentPay, { size: 'lg', backdrop: 'static' });
    if (this.id) {
      this._service.getAllViewPayInstallments(this.id)
        .subscribe(res => {
          if (res.isSuccess) {

            this.viewPayInstallments = res.data;

          } else {
            this.alert.error('حدثت مشكلة');
          }

          this.form.reset();
        })
    }
  }

  //Safe
  dataSafe = []

  @ViewChild('Safe') safe: ElementRef;
  openModalSafe() {
    if (this.id) {
      this.dataSafe = null;
      this.modalService.open(this.safe, { size: 'lg', backdrop: 'static' });
      this._service.getAllInstallmentNotPaid(this.id)
        .subscribe(res => {
          if (res.isSuccess) {

            this.installmentNotPaid = res.data;

          } else {
            this.alert.error('حدثت مشكلة');
          }

          this.form.reset();
        })
    }

  }
  //rowContractDetailSelected rowContractBillSelected
  rowContractDetailSelected(args: RowSelectEventArgs) {

    var data = args.data as any;
    this.contractDetailId = data.id;

    if (this.contractDetailId) {
      this._service.getAllContractDetailBill(this.contractDetailId)
        .subscribe(res => {
          if (res.isSuccess) {

            this.dataSafe = res.data;

          } else {
            this.alert.error('حدثت مشكلة');
          }


        })
    }
    this.formcontractDetailBill = this.formBuilder.group({
      id: [0],
      number: [null, [Validators.required]],
      contractDetailId: this.contractDetailId,
      date: Globals.formatDate(Date.now),
      paid: [null, [Validators.required]],
      amountPaid: [null]
    });
  }
  //
  //Safe
  rowContractBillSelected(args: RowSelectEventArgs) {

    this.dataContractDetailBill = args.data as any;
    this.contractDetailBillId = this.dataContractDetailBill.id
    this.formcontractDetailBill = this.formBuilder.group({
      id: [0],
      number: [null, [Validators.required]],
      contractDetailId: this.contractDetailId,
      date: Globals.formatDate(Date.now),
      paid: [null, [Validators.required]],
      amountPaid: [null]
    });

  }
  @ViewChild('SafeAddEdit') safeAddEdit: ElementRef;
  openModalSafeAddEdit() {
    this.formcontractDetailBill.reset()
    this.modalService.open(this.safeAddEdit, { size: 'lg', backdrop: 'static' });
  }
  openModalSafeEdit() {
    this.formcontractDetailBill.reset()

    var data = this.dataContractDetailBill;
    this.modalService.open(this.safeAddEdit, { size: 'lg', backdrop: 'static' });
    if (data != null) {
      this._service.getByIdContractDetailBill(this.dataContractDetailBill.id)
        .subscribe(res => {
          if (res.isSuccess) {

            if (data != null) {
              this.formcontractDetailBill.patchValue({
                id: data.id,
                number: data.number,
                contractDetailId: this.contractDetailId,
                date: Globals.formatDate(Date.parse(data.date)),
                paid: data.paid,
                amountPaid: data.amountPaid
              });
            }
          } else {
            this.alert.error('حدثت مشكلة');
          }


        })
    }


  }
  safeAddEditClick() {

    this.formcontractDetailBill.patchValue({
      contractDetailId: this.contractDetailId,
    });
    this._service.saveContractDetailBill(this.formcontractDetailBill.getRawValue()).subscribe(res => {
      if (res.isSuccess) {

        this.modalService.dismissAll();
        if (this.contractDetailId) {
          this._service.getAllContractDetailBill(this.contractDetailId)
            .subscribe(res => {
              if (res.isSuccess) {

                this.dataSafe = res.data;
                this.alert.success(res.message);
                this.openModalSafe();
              } else {
                this.alert.error('حدثت مشكلة');
              }


            })
        }

      }
      else {
        this.alert.error(res.message);
      }
    });

  }
  removeContractDetailBill() {
    if (this.contractDetailBillId != undefined) {


      if (this.contractDetailBillId == 0) return;
      Swal.fire({
        title: 'الحذف',
        text: "هل متاكد من الحذف؟",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'نعم',
        cancelButtonText: "لا"
      }).then((result) => {
        if (result.value) {

          this._service.deleteContractDetailBill(this.contractDetailBillId).subscribe(res => {
            if (res.isSuccess) {
              // this.getData(this.filter);
              this.modalService.dismissAll();
              if (this.contractDetailId) {
                this._service.getAllContractDetailBill(this.contractDetailId)
                  .subscribe(res => {
                    if (res.isSuccess) {

                      this.dataSafe = res.data;
                      this.alert.success(res.message);
                      this.openModalSafe();
                    } else {
                      this.alert.error('حدثت مشكلة');
                    }


                  })
              }
              this.alert.success(res.message);


            }
            else {
              this.alert.error(res.message);
            }
          });
        }

      })
    }
  }
  //
  //viewPayInstallments
  contractDetailDate = { contractId: 0, fromDate: null, toDate: null }
  @ViewChild('InstallmentAlert') installmentAlert: ElementRef;
  openModalInstallmentAlert() {

    // if (this.id)
    //   this.modalService.open(this.installmentAlert, { size: 'lg', backdrop: 'static' });

    let department = localStorage.getItem("department");

    if (department == "Administration")
      this.router.navigateByUrl('/Management/Alert')
    else

      this.router.navigateByUrl('/Contracts/Alert')
  }
  openModalAlert() {

    if (this.id) {
      this.contractDetailDate.contractId = this.id;
      this._service.getAllInstallmentAlert(this.contractDetailDate)
        .subscribe(res => {
          if (res.isSuccess) {

            this.viewAlertInstallments = res.data;

          } else {
            this.alert.error('حدثت مشكلة');
          }

          this.form.reset();
        })
    }
  }
  //

  @ViewChild('InstallmentOverdue') installmentOverdue: ElementRef;
  openModalInstallmentOverdue() {

    let department = localStorage.getItem("department");

    if (department == "Administration")
      this.router.navigateByUrl('/Management/Overdue')
    else

      this.router.navigateByUrl('/Contracts/Overdue')
    // if (this.id)
    //   this.modalService.open(this.installmentOverdue, { size: 'lg', backdrop: 'static' });
    // if (this.id) {

    //   this._service.getAllInstallmentOverdue(this.id)
    //     .subscribe(res => {

    //       if (res.isSuccess) {

    //         this.viewOverdueInstallments = res.data;

    //       } else {
    //         this.alert.error('حدثت مشكلة')
    //       }


    //     })
    // }

  }
  openCancelledContract() {
    //CancelledContract
    let department = localStorage.getItem("department");

    if (department == "Administration")
      this.router.navigateByUrl('/Management/CancelledContract')
    else
      this.router.navigateByUrl('/Contracts/CancelledContract')
  }
  download(url): void {

    url.forEach(element => {
      window.open(this.BaseFile + element, "_blank")
      // this._service
      // .download(this.BaseFile+element)
      // .subscribe(blob => {
      //   const a = document.createElement('a')
      //   const objectUrl = URL.createObjectURL(blob)
      //   a.href = objectUrl
      //   a.download =element;
      //   a.click();
      //   URL.revokeObjectURL(objectUrl);
      // })
    });

  }
  printBill() {


    if (this.id) {
      //   this._serviceReport.reportBill(this.id).subscribe((data: Blob) => {
      //    var fileType: any;
      //     fileType = "application/pdf";
      //     var blob = new Blob([data], { type: fileType })
      //     const blob1: Blob = data;
      //     const fileName1: string = "alert";
      //     const objectUrl: string = URL.createObjectURL(blob);

      //     window.open(objectUrl, '_blank');
      //     ;
      // })
      var ReportName = "PrintBill";
      //ASPX page URL to load report  
      var src = 'http://192.168.1.150:4277/Reports/ReportForm/ReportPage.aspx?';
      //We can add parameters here  
      src = src + "ReportName=" + ReportName + "&id=" + this.id;

      window.open(src, "_blank");
    }
  }
}
