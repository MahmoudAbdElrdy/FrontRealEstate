import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilterService, GridComponent, Pager, PagerComponent, PagerDropDown, PageService, RowSelectEventArgs, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { looseObject } from 'src/app/shared/models/looseObject';
import { EmployeeService } from 'src/app/shared/services/employee-service';
import Swal from 'sweetalert2';
import { data } from './employees';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { Locales } from 'src/app/shared/helper/constants';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { PublicService } from 'src/app/shared/services/public.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
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
export class EmployeesComponent implements OnInit {
  customAttributes:object;
  selectionsettings: object;
  pageSize: number;
  currentPage: number;
  totalRecordsCount: number;
  pageCount: number;
  @ViewChild('grid') gridObj: GridComponent;
  @ViewChild("pager") pager: PagerComponent;
  @ViewChild('ModalId') modalId: ElementRef;
  @ViewChild('ModalSalaryId') modalSalaryId: ElementRef;
  departmentDDL = [];
  //FieldsDDL:Object;
  FieldsDDL: Object ={text: 'text', value: 'value'};
  filter: looseObject = {pageNumber:1,pageSize:10,name:null,departmentId:null,workSince:null,phone:null};
  selectedRowIndexes: any;
  id: any;
  model: any;
  form: FormGroup;
  constructor(private alert:AlertifyService ,private formBuilder: FormBuilder, public modalService: NgbModal, private _service: EmployeeService,private _publicService: PublicService) { }

  public data: object[];

  ngOnInit(): void {
    this.customAttributes = { class: 'customcss' }; //use custom cs
  //  this.selectionsettings = { checkboxOnly: true };
  this.selectionsettings = { type: 'Single' };
  this.getData(this.filter);
  this.getDropDownList();
  
 this.form = this.formBuilder.group({
    id: [0],
    departmentId:[0],
    name: ['', [Validators.required]],
    phone: [''],
    workSince: [Date.now()],
    passWord: ['']
  });
  }
 
  changePage(event) {
    if (event.currentPage) {
      
      this.filter.pageNumber = event.currentPage;
      this.getData(this.filter);
    }
  }
  getData(filter) {
    
    this._service.getAll(filter)
      .subscribe(res => {
        if (res.isSuccess) {
        
         this.data=res.data;
         this.totalRecordsCount=res.totalRecordsCount;
         this.pageCount=res.pageCount
         this.pageSize=res.pageSize;
        
        } else {
          Swal.fire("حدث مشكلة", null, "error");
        }
      })
  }
  begin(args): any {
    if (args.requestType === "filtering" && args.action === "filter") {
      if (args.currentFilterObject.field === "name") {
        this.filter.name = args.currentFilterObject.value;
      }
      else if (args.currentFilterObject.field === "department") {

        this.filter.department = args.currentFilterObject.value;

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
        else if (clearFilter.field === "department") {

          this.filter.department = null;

        }

        this.filter.pageNumber = 1;
        this.getData(this.filter);
      }

    }
  }
 
  openModal() {
   
      this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });
      if(this.id!=undefined||this.id>0){
        this.getById();
      }
     
  }
  openModalSalary() {


    this.modalService.open(this.modalSalaryId, { size: 'lg', backdrop: 'static' });
    
}

rowSelected(args: RowSelectEventArgs) {
  
var data=args.data as any;
this.id=data.id;
this.model=data;
}
getById() {


  this._service.getById(this.id)
    .subscribe((res: ResponseData) => {
      if (res.isSuccess == true) {
        

        //Mapp data what are you want
        this.model = res.data;
        this.form.patchValue({
          id: res.data.id,
          departmentId: res.data.departmentId,
          name: res.data.name,
          workSince:this.formatDate(Date.parse(res.data.workSince)),
          passWord: res.data.passWord,
          phone: res.data.phone,
        });
     
      }
     
    });
 
}
private formatDate(date) {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}

getDropDownList() {
  
  this._publicService.get("Employee/GetAllDepartments")
    .subscribe((res: ResponseData) => {
      if (res.isSuccess == true) {
       
        this.departmentDDL = res.data;

      }
    });
}
addEitFrom(){
  if (this.form.valid) {
    this._service.createUpdate(this.form.getRawValue())
      .subscribe((res: ResponseData) => {
       debugger
        if (res.isSuccess == true) {
          this.model = res.data;
          this.gridObj.refresh();
          this.alert.success(res.message);

        }
        else {
          this.alert.error(res.message)
        }
      },
        (err) => {
          console.log(err)
          this.alert.error("DatabaseServerError")
        });
  }
}
}
