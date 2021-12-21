import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageService, SortService, FilterService, GroupService, GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { General } from 'src/app/shared/helper/general';
import { looseObject } from 'src/app/shared/models/looseObject';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { SupervisorService } from 'src/app/shared/services/supervisor-service';
import Swal from 'sweetalert2';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { Locales } from 'src/app/shared/helper/constants';
setCulture('ar-AE');
L10n.load(Locales.getLocaleObjects())
@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css'],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService],
   
})
export class SupervisorComponent extends General implements OnInit {
  customAttributes: object;
  selectionsettings: object;

  //pager
  pageSize: number;
  currentPage: number;
  totalRecordsCount: number;
  pageCount: number;
  @ViewChild('ModalId') modalId: ElementRef;
  @ViewChild('ModalDetailId') modalDetailId: ElementRef;
  @ViewChild('grid') gridObj: GridComponent;
  departmentDDL = [];
  //FieldsDDL:Object;
  FieldsDDL: Object = { text: 'text', value: 'value' };
  filter: looseObject = { pageNumber: 1, pageSize: 20, name: null, phone: null, job: null };
  selectedRowIndexes: any;
  id: any;
  model: any;
  form: FormGroup;
  formDetail:FormGroup;
  constructor(private alert: AlertifyService,
    private formBuilder: FormBuilder, private router: Router,
    private activeRoute: ActivatedRoute,
    public modalService: NgbModal, private _service: SupervisorService) {
    super();
  }

  data: object[];

  ngOnInit(): void {
    this.customAttributes = { class: 'customcss' }; //use custom cs
    //  this.selectionsettings = { checkboxOnly: true };
    this.selectionsettings = { type: 'Single' };
    this.getData(this.filter);
    this.filterSettings = {
      type: 'FilterBar', hierarchyMode: 'Parent', mode: 'Immediate',
    }
    this.form = this.formBuilder.group({
      id: [0],
      name: ['', [Validators.required]],
      phone: [''],
      job: [''],
    });
    this.formDetail = this.formBuilder.group({
      id: [0],
      credit: [0],
      supervisorId: this.id,
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

  begin(args): any {

    if (args.requestType === "filtering" && args.action === "filter") {
      if (args.currentFilterObject.field === "name") {
        this.filter.name = args.currentFilterObject.value;
      }
      if (args.currentFilterObject.field === "phone") {
        this.filter.phone = args.currentFilterObject.value;
      }
      if (args.currentFilterObject.field === "job") {
        this.filter.job = args.currentFilterObject.value;
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
        if (clearFilter.field === "job") {
          this.filter.job = null;
        }
        this.filter.pageNumber = 1;
        this.getData(this.filter);
      }

    }
  }

  openModal() {
    this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });
  }
  openModalDetail() {
    if (this.id != undefined || this.id > 0)
    this.modalService.open(this.modalDetailId, { size: 'lg', backdrop: 'static' });
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
            name: res.data.name.replace("\r\n", "   "),
            phone: res.data.phone.replace("\r\n", "   "),
            job:res.data.job
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
  addformDetail() {
    this.formDetail.patchValue({
      supervisorId: this.id,
    });
    this.formDetail.markAllAsTouched();
    if (this.formDetail.valid) {
      this._service.saveSupervisorDetail(this.formDetail.getRawValue())
        .subscribe((res: ResponseData) => {
          debugger
          if (res.isSuccess == true) {
          
            this.getData(this.filter);
            this.alert.success(res.message);
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
