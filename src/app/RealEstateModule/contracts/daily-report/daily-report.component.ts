import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageService, SortService, FilterService, GroupService, GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { Globals } from 'src/app/shared/helper/constants';
import { General } from 'src/app/shared/helper/general';
import { looseObject } from 'src/app/shared/models/looseObject';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { DailyReportService } from 'src/app/shared/services/daily-report-service';
import { PublicService } from 'src/app/shared/services/public.service';
import Swal from 'sweetalert2';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { Locales } from 'src/app/shared/helper/constants';
setCulture('ar-AE');
L10n.load(Locales.getLocaleObjects())
@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css'],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService],
})
export class DailyReportComponent extends General implements OnInit {
  customAttributes: object;
  selectionsettings: object;

  //pager
  pageSize: number;
  currentPage: number;
  totalRecordsCount: number;
  pageCount: number;
  @ViewChild('ModalId') modalId: ElementRef;
  @ViewChild('grid') gridObj: GridComponent;
  departmentDDL = [];
  //FieldsDDL:Object;
  FieldsDDL: Object = { text: 'text', value: 'value' };
  filter: looseObject = { pageNumber: 1, pageSize: 15, employeeId: null, supervisorId: null, value: null };
  selectedRowIndexes: any;
  id: any;
  model: any;
  form: FormGroup;
  formDetail:FormGroup;
  constructor(private alert: AlertifyService,   private _publicService: PublicService,
    private formBuilder: FormBuilder, private router: Router,
    private activeRoute: ActivatedRoute,
    public modalService: NgbModal, private _service: DailyReportService) {
    super();
  }

  data: object[];

  ngOnInit(): void {
    this.customAttributes = { class: 'customcss' }; //use custom cs
    //  this.selectionsettings = { checkboxOnly: true };
    this.selectionsettings = { type: 'Single' };
    this.getDropDownListEmployee();
    this.getDropDownListSupervisor();
    this.getData(this.filter);
    this.filterSettings = {
      type: 'FilterBar', hierarchyMode: 'Parent', mode: 'Immediate',
    }
    this.form = this.formBuilder.group({
      id: [0],
      employeeId: [null, [Validators.required]],
      supervisorId:  [null, [Validators.required]],
      value: [''],
      employeeSubmitted:[null],
      date: Globals.formatDate(Date.now),
      notes: [''],
    });
    this.formDetail = this.formBuilder.group({
      id: [0],
      credit: [0],
      DailyReportId: this.id,
      debt: [0],
      net: [0],
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
  onChangeEmployee(e) {
    this.filter.employeeId = e.value
    this.getData(this.filter);
  }
  onChangeSupervisor(e) {
    this.filter.supervisorId = e.value
    this.getData(this.filter);
  }
  begin(args): any {

    if (args.requestType === "filtering" && args.action === "filter") {
      if (args.currentFilterObject.field === "employeeSubmitted") {
        this.filter.employeeSubmitted = args.currentFilterObject.value;
      }
    
      if (args.currentFilterObject.field === "value") {
        this.filter.value = args.currentFilterObject.value;
      }
      this.filter.pageNumber = 1;
      this.getData(this.filter);
    }
    else if (args.action == "clearFilter") {
      var clearFilter = args?.currentFilterObject?.properties;
      if (clearFilter) {

        if (clearFilter.field === "employeeSubmitted") {
          this.filter.employeeSubmitted = null;

        }
        
        if (clearFilter.field === "value") {
          this.filter.value = null;
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
 

  rowSelected(args: RowSelectEventArgs) {

    var data = args.data as any;
    this.id = data.id;
    this.model = data;

  
  }
  getById() {
    this._service.getById(this.id)
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {
          debugger
          this.model = res.data;
          this.form.patchValue({
            id: res.data.id,
            employeeId: res.data.employeeId,
            supervisorId: res.data.supervisorId,
            value:res.data.value,
            employeeSubmitted:res.data.employeeSubmitted,
            date: Globals.formatDate(Date.parse(res.data.date)),
            notes:res.data.notes,
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
  getDropDownListEmployee() {

    this._publicService.get("Employee/GetDropDownList")
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {

          this.dataEmployee = res.data;

        }
      });
  }
  getDropDownListSupervisor() {

    this._publicService.get("Supervisor/GetDropDownList")
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {

          this.dataSupervisor = res.data;

        }
      });
  }
}
