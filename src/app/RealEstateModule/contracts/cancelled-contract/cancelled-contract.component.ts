import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
@Component({
  selector: 'app-cancelled-contract',
  templateUrl: './cancelled-contract.component.html',
  styleUrls: ['./cancelled-contract.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [PageService, SortService, FilterService, ToolbarService]
})
export class CancelledContractComponent extends General implements OnInit {
  wrapSettings: TextWrapSettingsModel;
  constructor(  private _service: ContractService,  private cdRef: ChangeDetectorRef,
    private alert: AlertifyService) {
    super();
  }

  ngOnInit(): void {
    this.customAttributes = { class: 'customcss' }; //use custom cs
    //  this.selectionsettings = { checkboxOnly: true };
    this.selectionsettings = { type: 'Single' };


    this.wrapSettings = { wrapMode: "Content" };
    this.getData();
  }
  customAttributes: object;
  selectionsettings: object;
  pageSize: number;
  currentPage: number;
  totalRecordsCount: number;
  pageCount: number;
  @ViewChild('grid') gridObj: GridComponent;
  @ViewChild("pager") pager: PagerComponent;
  data:[];
  filter: any = { pageNumber: 1, pageSize: 15, date: null, customer: null, project: null,paid:null,back:null };

  getData() {

    this._service.getAllCancelledContracts(this.filter)
      .subscribe(res => {
        if (res.isSuccess) {

          this.data = res.data;
          this.totalRecordsCount = res.totalRecordsCount;
          this.pageCount = res.pageCount > 5 ? 5 : res.pageCount;
          this.pageSize = res.pageSize;

        } else {
          this.alert.error('حدثت مشكلة');
        }

      
      })
  }
  onChangeDateTime(args: any): void {

    this.filter.date = args
    this.getData();
  }
  changePage(event) {

    if (this.change) {
      if (event.currentPage) {

        this.filter.pageNumber = event.currentPage;
        this.getData();
        return;
      }
    }
    this.change = event.pointerType;
  }
  begin(args): any {

    if (args.requestType === "filtering" && args.action === "filter") {
      if (args.currentFilterObject.field === "customer") {
        this.filter.customer = args.currentFilterObject.value;
      }
      if (args.currentFilterObject.field === "project") {
        this.filter.project = args.currentFilterObject.value;
      }
      if (args.currentFilterObject.field === "paid") {
        this.filter.paid = args.currentFilterObject.value;
      }
      if (args.currentFilterObject.field === "back") {
        this.filter.back = args.currentFilterObject.value;
      }
     
      this.filter.pageNumber = 1;
      this.getData();
    }
    else if (args.action == "clearFilter") {
      var clearFilter = args?.currentFilterObject?.properties;
      if (clearFilter) {

        if (clearFilter.field === "customer") {
          this.filter.customer = null;

        }
        if (clearFilter.field === "project") {
          this.filter.project = null;
        }
        if (clearFilter.field === "paid") {
          this.filter.paid = null;
        }
        if (clearFilter.field === "back") {
          this.filter.back = null;
        }
       
        this.filter.pageNumber = 1;
        this.getData();
      }

    }
  }
  remove(id) {
    if (id != undefined)
      this.removeGeneral(id)
  }
}
