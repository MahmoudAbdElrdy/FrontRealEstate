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
import { ActivatedRoute, Router } from '@angular/router';
setCulture('ar-AE');
L10n.load(Locales.getLocaleObjects())
Pager.Inject(PagerDropDown);
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [PageService, SortService, FilterService, ToolbarService]
})
export class EmployeesComponent extends General implements OnInit {
  customAttributes: object;
  selectionsettings: object;
  pageSize: number;
  currentPage: number;
  totalRecordsCount: number;
  pageCount: number;
  @ViewChild('grid') gridObj: GridComponent;
  @ViewChild("pager") pager: PagerComponent;
  @ViewChild('ModalId') modalId: ElementRef;
  departmentDDL = [];
  //FieldsDDL:Object;
  FieldsDDL: Object = { text: 'text', value: 'value' };
  filter: looseObject = { pageNumber: 1, pageSize: 10, name: null, departmentId: null, workSince: null, phone: null };
  selectedRowIndexes: any;
  id: any;
  model: any;
  form: FormGroup;
  constructor(private alert: AlertifyService, private formBuilder: FormBuilder, private router: Router,
    private activeRoute: ActivatedRoute,
    public modalService: NgbModal, private _service: EmployeeService, private _publicService: PublicService) {
    super();
  }

 data: object[];

  ngOnInit(): void {
    this.customAttributes = { class: 'customcss' }; //use custom cs
    //  this.selectionsettings = { checkboxOnly: true };
    this.selectionsettings = { type: 'Single' };
    this.getData(this.filter);
    this.getDropDownList();

    this.form = this.formBuilder.group({
      id: [0],
      departmentId: [0,],
      name: ['', [Validators.required]],
      phone: [''],
      workSince: [Date.now()],
      passWord: ['', [Validators.required]],
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
  dataBound() {
    Object.assign((this.gridObj.filterModule as any).filterOperators, { startsWith: 'contains' });
  }
  onChangeDateTime(args: any): void {

    this.filter.workSince = args
    this.getData(this.filter);
  }
  onChangeDepartment(e) {

    console.log(e)
    this.filter.departmentId = e.value
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
  openEdit(id) {


    if (id != undefined || id > 0) {
      this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });
      this.id = id;
      this.getById();
    }

  }
  openModalSalary(employeeId, employeeName) {
    
    localStorage.setItem("employeeName",employeeName);
   
    this.router.navigateByUrl('/Management/EmployeeSalary?employeeId=' + employeeId)

  }
  openSalary() {

    if (this.id != undefined) {

      this.router.navigateByUrl('/Management/EmployeeSalary?employeeId=' + this.id )

    }


  }

  rowSelected(args: RowSelectEventArgs) {
    
    var data = args.data as any;
    this.id = data.id;
    this.model = data;

    localStorage.setItem("employeeName",data.name);
  }
  getById() {


    this._service.getById(this.id)
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {
          this.model = res.data;
          this.form.patchValue({
            id: res.data.id,
            departmentId: res.data.departmentId,
            name: res.data.name,
            workSince: Globals.formatDate(Date.parse(res.data.workSince)),
            passWord: res.data.passWord,
            phone: res.data.phone,
          });

        }

      });

  }


  getDropDownList() {

    this._publicService.get("Employee/GetAllDepartments")
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {

          this.departmentDDL = res.data;

        }
      });
  }
  addEitFrom() {
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
