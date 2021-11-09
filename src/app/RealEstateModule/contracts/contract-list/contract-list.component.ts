import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
  
 wrapSettings: TextWrapSettingsModel;
  departmentDDL = [];
  //FieldsDDL:Object;
  FieldsDDL: Object = { text: 'text', value: 'value' };
  FieldsProject: Object = { text: 'name', value: 'id' };
  filter: looseObject = { pageNumber: 1, pageSize: 15, name: null, address: null };
  selectedRowIndexes: any;
  id: any;
  model: any={};
  form: FormGroup;
  formDetails: FormGroup;
  employeeName: string;
   data: object[];
   stockList=[{value:true,text:"عقد سهم"},{value:false,text:"عقد واحدات"}]
  constructor(private formBuilder: FormBuilder,
    public modalService: NgbModal,
    private _service: ContractService,
     private _publicService: PublicService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private alert: AlertifyService) {
    super();
  }

  ngOnInit(): void {
    debugger
    this.customAttributes = { class: 'customcss' }; //use custom cs
  //  this.selectionsettings = { checkboxOnly: true };
  this.selectionsettings = { type: 'Single' };
  

  this.wrapSettings = {wrapMode:"Content"  };
  this.getData(this.filter);
  this.getDropDownList()
  this.form = this.formBuilder.group({
    id: [0],
    name: [null, [Validators.required]],
    address: [null, [Validators.required]],
    program: [0, [Validators.required]],

  });
  this.form = this.formBuilder.group({
    id: [0],
    name: [null, [Validators.required]],
    address: [null, [Validators.required]],
    program: [0, [Validators.required]],

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
    flatId:null
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

getById() {
  this._service.getById(this.id)
    .subscribe((res: ResponseData) => {
      if (res.isSuccess == true) {
        debugger
        this.model = res.data;
        this.form.patchValue({
          id: res.data.id,
          name: res.data.name,
          address: res.data.address,
          program: res.data.program,
        });

      }

    });

}
rowSelected(args: RowSelectEventArgs) {

  var data = args.data as any;
  this.id = data.id;
  this.ContractId = data.id
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
dataBound() {
  Object.assign((this.gridObj.filterModule as any).filterOperators, { startsWith: 'contains' });
}
begin(args): any {
debugger
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
onChangeStock(e){
  this.filter.isStock = e.value
  this.getData(this.filter);
}
onChangeProject(e) {

   
    this.filter.ProjectId = e.value
    this.getData(this.filter);
  }
  
}
