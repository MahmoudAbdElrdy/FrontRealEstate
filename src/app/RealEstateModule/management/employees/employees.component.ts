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
  departmentDDL = ['عقار1', 'عقار2', 'عقار3', 'عقار4', 'عقار5'];
 
  filter: looseObject = {pageNumber:1,pageSize:10,name:null,departmentId:null,workSince:null,phone:null};
  selectedRowIndexes: any;
  id: any;
  model: any;
  constructor( public modalService: NgbModal, private _service: EmployeeService) { }

  public data: object[];

  ngOnInit(): void {
    this.customAttributes = { class: 'customcss' }; //use custom cs
  //  this.selectionsettings = { checkboxOnly: true };
  this.selectionsettings = { type: 'Single' };
  this.getData(this.filter);
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
  dropDownChanged(args: any) { 
    //this.grid.pageSettings.pageSize = parseInt(args.pageSize);
  } 
  openModal() {
   debugger
      this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });
      
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
     //   this.userEdit.createdOn = this.datePipe.transform(this.userEdit.createdOn, 'dd/MM/yyyy, h:mm a')
      //  this.bindingEdit(this.userEdit);
     
      }
    });
 
}

}
