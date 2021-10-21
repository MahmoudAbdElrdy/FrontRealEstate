import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { EmployeeService } from 'src/app/shared/services/employee-service';
import Swal from 'sweetalert2';
import { data } from './customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class CustomersComponent implements OnInit {
  customAttributes:object;
  selectionsettings: object;
 
    //pager
    pageSize: number;
    currentPage: number;
    totalRecordsCount: number;
    pageCount: number;
  @ViewChild('ModalId') modalId: ElementRef;
 
  filter: LooseObject = {pageNumber:1,pageSize:15,name:null,departmentId:1,workSince:null,phone:null};
  constructor( public modalService: NgbModal, private _service: EmployeeService) { }

  public data: object[];

  ngOnInit(): void {
    this.customAttributes = { class: 'customcss' }; //use custom css
   // this.data = data;
   // this.selectionsettings = { checkboxOnly: true };
    this.selectionsettings = { type: 'Single' };
  this.getData();
  }
  paggination(event){
    

  }
  changePage(event) {
    if (event.currentPage) {
      this.filter.pageNumber = event.currentPage;
      this.getData();
    }
  }
  getData() {
    debugger
    this._service.getAll(this.filter)
      .subscribe(res => {
        if (res.isSuccess) {
        
         this.data=res.data;
        } else {
          Swal.fire("حدث مشكلة", null, "error");
        }
      })
  }
  openModal() {


      this.modalService.open(this.modalId, { size: 'md', backdrop: 'static' });
      
  }
}
interface LooseObject {
  [key: string]: any
}