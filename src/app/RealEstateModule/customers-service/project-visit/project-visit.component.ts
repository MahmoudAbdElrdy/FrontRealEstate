import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { data } from './visit';
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
import { PublicService } from 'src/app/shared/services/public.service';
import { ProjectVisitService } from 'src/app/shared/services/project-visit-service';
@Component({
  selector: 'app-project-visit',
  templateUrl: './project-visit.component.html',
  styleUrls: ['./project-visit.component.css'],
  providers: [PageService, SortService, FilterService, GroupService]
})
export class ProjectVisitComponent extends General implements OnInit {
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
  filter: looseObject = { pageNumber: 1, pageSize: 15, name: null };
  selectedRowIndexes: any;
  id: any;
  model: any;
  form: FormGroup;
  constructor(private alert: AlertifyService,
    private formBuilder: FormBuilder, private router: Router,
    private activeRoute: ActivatedRoute, private _publicService: PublicService,
    public modalService: NgbModal, private _service: ProjectVisitService,) {
    super();
  }

  data: object[];

  ngOnInit(): void {
    this.customAttributes = { class: 'customcss' }; //use custom cs
    //  this.selectionsettings = { checkboxOnly: true };
    this.selectionsettings = { type: 'Single' };
    this.filter.customerId = this.activeRoute.snapshot.queryParams['customerId']
    this.filterSettings = {
      type: 'FilterBar', hierarchyMode: 'Parent', mode: 'Immediate',
    }
    this.customerName = localStorage.getItem("customerName");
    this.getData(this.filter);
    this.getDropDownList();
    this.intiForm();

  }
  intiForm() {
    this.form = this.formBuilder.group({
      id: [0],
      projectId: [null, [Validators.required]],
      customerId: Number(this.filter.customerId),
      date: [Date.now()],
      visited: false,
      notes: [null]
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
  getDropDownList() {

    this._publicService.get("ProjectVisit/GetDropDownList")
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {

          this.dataDropDown = res.data;

        }
      });
  }


  openModal() {
    // this.form.reset();
    this.form.patchValue({
     
      customerId: this.filter.customerId,
      date: Globals.formatDate(Date.now()),
      visited: false,
     
    });

    this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });


  }
  openEditModal() {

    this.form.reset();
    if (this.id != undefined || this.id > 0) {
      this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });
      this.getById();
    }

  }
  dataBound() {

    //  Object.assign((this.gridObj.filterModule as any).filterOperators, { startsWith: 'contains' });
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
            projectId: res.data.projectId,
            customerId: res.data.customerId,
            date: Globals.formatDate(Date.parse(res.data.date)),
            visited: res.data.visited,
            notes: res.data.notes,
          });

        }

      });

  }
  get f() { return this.form.controls; }
  addEitFrom() {
    debugger
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
}
