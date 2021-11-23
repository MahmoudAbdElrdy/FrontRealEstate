import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilterService, GridComponent, Pager, PagerComponent, PagerDropDown, PageService, RowSelectEventArgs, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { looseObject } from 'src/app/shared/models/looseObject';
import { EmployeeService } from 'src/app/shared/services/employee-service';
import Swal from 'sweetalert2';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { Globals, Locales } from 'src/app/shared/helper/constants';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { PublicService } from 'src/app/shared/services/public.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { General } from 'src/app/shared/helper/general';
import { EmployeeSalaryService } from 'src/app/shared/services/employee-salary-service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [PageService, SortService, FilterService, ToolbarService]
})
export class EmployeeSalaryComponent extends General implements OnInit {
  customAttributes: object;
  selectionsettings: object;
  pageSize: number;
  currentPage: number;
  totalRecordsCount: number;
  pageCount: number;
  @ViewChild('grid') gridObj: GridComponent;
  @ViewChild("pager") pager: PagerComponent;
  @ViewChild('ModalSalaryId') modalSalaryId: ElementRef;
  departmentDDL = [];
  //FieldsDDL:Object;
  FieldsDDL: Object = { text: 'text', value: 'value' };
  filter: looseObject = { pageNumber: 1, pageSize: 15, employeeId: 0, date: null };
  selectedRowIndexes: any;
  id: any;
  model: any;
  form: FormGroup;
  employeeName:string;
  constructor(private formBuilder: FormBuilder,
    public modalService: NgbModal,
    private _service: EmployeeSalaryService,
    private _empService: EmployeeService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private alert:AlertifyService

  ) {
    super();
  }

  public data: object[];

  ngOnInit(): void {
    
    this.customAttributes = { class: 'customcss' }; //use custom cs
    //  this.selectionsettings = { checkboxOnly: true };
    this.selectionsettings = { type: 'Single' };
    this.filter.employeeId = this.activeRoute.snapshot.queryParams['employeeId']
    this.filterSettings = {
      type: 'FilterBar', hierarchyMode: 'Parent', mode: 'Immediate',
    }
    this.employeeName= localStorage.getItem("employeeName");
    this.getData(this.filter);
    this.form = this.formBuilder.group({
      id: [0],
      employeeId:  this.filter.employeeId,
      fixed: [null],
      productionIncentive: [null],
      rewards: [null],
      advancePayment: [null],
      sanctions: [null],
      delays: [null],
      socialInsurance: [null],
      holidays: [null],
      buffet: [null],
      commission: [null],
      date: [Date.now()],
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
          this.pageCount = res.pageCount>5?5: res.pageCount;
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

    this.modalService.open(this.modalSalaryId, { size: 'lg', backdrop: 'static' });


  }
  openEditModal() {


    if (this.id != undefined || this.id > 0) {
      this.modalService.open(this.modalSalaryId, { size: 'lg', backdrop: 'static' });
      this.getByIdSalary();
    }

  }
  openEdit(id) {


    if (id != undefined || id > 0) {
      this.modalService.open(this.modalSalaryId, { size: 'lg', backdrop: 'static' });
      this.id = id;
      this.getByIdSalary();
    }

  }

  getByIdSalary() {


    this._service.getById(this.id)
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {
          this.model = res.data;
          this.form.patchValue({
            id: res.data.id,
            employeeId: res.data.employeeId,
            fixed: res.data.fixed,
            productionIncentive: res.data.productionIncentive,
            rewards: res.data.rewards,
            advancePayment: res.data.advancePayment,
            sanctions: res.data.sanctions,
            delays: res.data.delays,
            socialInsurance: res.data.socialInsurance,
            holidays: res.data.holidays,
            buffet: res.data.buffet,
            commission: res.data.commission,
            date: Globals.formatDate(Date.parse(res.data.date)),
          });

        }

      });

  }
  rowSelected(args: RowSelectEventArgs) {

    var data = args.data as any;
    this.id = data.id;
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


  addEitFrom() {
    this.form.patchValue({
      employeeId: this.filter.employeeId,
    });
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
}
