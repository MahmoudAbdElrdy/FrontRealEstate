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
import { ProjectService } from 'src/app/shared/services/peoject-service';
import { FlatViewModel } from '../../shared/models/flat.model';
import { BuildingViewModel } from '../../shared/models/building.model';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [PageService, SortService, FilterService, ToolbarService]
})
export class ProjectListComponent extends General implements OnInit {
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
  filter: looseObject = { pageNumber: 1, pageSize: 20, name: null, address: null, floors: 0 };
  selectedRowIndexes: any;
  id: any;
  model: any={};
  form: FormGroup;
  formDetails: FormGroup;
  employeeName: string;
  constructor(private formBuilder: FormBuilder,
    public modalService: NgbModal,
    private _service: ProjectService,

    private router: Router,
    private activeRoute: ActivatedRoute,
    private alert: AlertifyService

  ) {
    super();
  }

  public data: object[];
  wrapSettings: TextWrapSettingsModel= { wrapMode: 'Content' };
  ngOnInit(): void {

    this.customAttributes = { class: 'customcss' }; //use custom cs
    //  this.selectionsettings = { checkboxOnly: true };
    this.selectionsettings = { type: 'Single' };
    this.filter.employeeId = this.activeRoute.snapshot.queryParams['employeeId']
    this.filterSettings = {
      type: 'FilterBar', hierarchyMode: 'Parent', mode: 'Immediate',
    }
    this.employeeName = localStorage.getItem("employeeName");
    this.getData(this.filter);
    this.form = this.formBuilder.group({
      id: [0],
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      floors: [0, [Validators.required]],

    });
    this.form = this.formBuilder.group({
      id: [0],
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      floors: [0, [Validators.required]],

    });
    this.formDetails = this.formBuilder.group({
      id: [0],
      name: [null, [Validators.required]],
      area: [null, [Validators.required]],
      bath: [null, [Validators.required]],
      kitchen: [null, [Validators.required]],
      room: [null, [Validators.required]],
      projectId: this.id,
      isBooked: false,
      flatId:null,
      floorNumber:0
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
          
          this.model = res.data;
          this.form.patchValue({
            id: res.data.id,
            name: res.data.name,
            address: res.data.address,
            floors: res.data.floors,
          });

        }

      });

  }
  rowSelected(args: RowSelectEventArgs) {

    var data = args.data as any;
    this.id = data.id;
    this.projectId = data.id
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

    if (args.requestType === "filtering" && args.action === "filter") {
      if (args.currentFilterObject.field === "name") {
        this.filter.name = args.currentFilterObject.value;
      }
      if (args.currentFilterObject.field === "address") {
        this.filter.address = args.currentFilterObject.value;
      }
      if (args.currentFilterObject.field === "floors") {
        this.filter.floors = args.currentFilterObject.value;
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
        if (clearFilter.field === "floors") {
          this.filter.floors = 0;
        }
        this.filter.pageNumber = 1;
        this.getData(this.filter);
      }

    }
  }
  //
  @ViewChild('BuildingId') buildingId: ElementRef;
  @ViewChild('ModalDetailsId') modalDetailsId: ElementRef;
  numberApartments = 0;
  Arr = Array;
  FlatViewModel = new Array<FlatViewModel>();
  buildingData: BuildingViewModel = {
    Floors: []
  };
  counterNumber: number;
  listArea = new Array<number>();
  numberApartment = 0;
  objectData: any = {}
  openModalBuilding() {
    this.buildingData={
      Floors: []
    };
    if (this.id != undefined)
      this.modalService.open(this.buildingId, { size: 'lg', backdrop: 'static' });
    // this.model
  }
  openDetails(id){

  
  
    this.modalService.open(this.buildingId, { size: 'lg', backdrop: 'static' });
    this.id=id;
    this.getById();
  }
  saveModalBuilding() {

    this._service.saveApartmentNumber(this.model)
      .subscribe((res: ResponseData) => {

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
  viewBulding(Floor) {

    this.count = 0;
    this.idFlat = 0;

    for (var r = 1; r <= Number(Floor); ++r) {
      let item = new FlatViewModel();

      let Floors = new Array<FlatViewModel>();
      //this.counterNumber

      for (var j = 1; j <= this.model.apartmentNumber; ++j) {
        item.Area = 0;
        item.Number = ++this.count;
        item.ID = ++this.idFlat;
        item.IsBooked = false;
        item.Color = '#04AA6D'
        item.floorNumber=r;
        let item2 = Object.assign({}, item)
        Floors.push(item2)
      }

      this.buildingData.Floors[r] = Floors
    }
    console.log(this.buildingData)

  }
  saveProjectUnit() {

    this.formDetails.patchValue({
      projectId: this.projectId,
      isBooked: false,
      flatId: this.FlatID,
      floorNumber:this.floorNumber
    });
    this.formDetails.markAllAsTouched();
    if(this.formDetails.valid){
      this._service.saveProjectUnitDescription(this.formDetails.getRawValue())
      .subscribe((res: ResponseData) => {

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
  getProjectUnitById(id) {
    this.formDetails.reset();
    this._service.getProjectUnitDescriptionById(id,this.projectId)
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {
        
          this.formDetails.patchValue({
            id: res.data?.id,
            name: res.data?.name,
            area: res.data?.area,
            bath: res.data?.bath,
            kitchen: res.data?.kitchen,
            room: res.data?.room,
            projectId: res.data?.projectId,
            isBooked: res.data?.isBooked,
            flatId:res.data?.flatId
          });

        }

      });

  }
  openModalDetails(id,flat) {
    
    this.FlatID = id;
    this.floorNumber=flat.floorNumber;
    this.modalService.open(this.modalDetailsId, { size: 'lg', backdrop: 'static' });
    if (id != undefined) {
      this.getProjectUnitById(id)
    }
  }
}
