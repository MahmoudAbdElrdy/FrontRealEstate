import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { data } from './data';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css'],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class ContractComponent implements OnInit {
  customAttributes:object;
  selectionsettings: object;
  pager: any = {
    totalPages: 0,
    currentPage: 1,
    pageSize: 10,
    pageNumber: 1
  };
  public dataDropDown = ['Snooker', 'Tennis', 'Cricket', 'Football', 'Rugby'];
  @ViewChild('ModalId') modalId: ElementRef;
  radioItems = ['مساهمة', 'واحدات '];
  program = ['تقسيط', 'كاش ','دفعات'];
  model   = {option: 'واحدات'};
  public data: object[];
  public resizeSettings = { mode: "Auto" };
  constructor( public modalService: NgbModal) { }
 
  ngOnInit(): void {
    
    this.customAttributes = { class: 'customcss' }; //use custom css
    this.data = data;
    this.selectionsettings = { checkboxOnly: true };
    this.paggination(this.pager);
    this.values.push({value: ""});
    this.valuesPhone.push({value: ""});
    this.valuesNational.push({value: ""});
  }
  paggination(event){
    
console.log(event)
  }
  openModal() {


      this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });
      
  }
  values = [];
  removeCustomer(i){
    this.values.splice(i,1);
  }

  addCustomer(){
    this.values.push({value: ""});
  }

  //
  valuesPhone = [];
  removePhone(i){
    this.valuesPhone.splice(i,1);
  }

  addPhone(){
    this.valuesPhone.push({value: ""});
  }
  //
  valuesNational=[];
  removeNational(i){
    this.valuesNational.splice(i,1);
  }

  addNational(){
    this.valuesNational.push({value: ""});
  }
  //
	url: any; //Angular 11, for stricter type
	msg = "";
	
	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
	}
}
