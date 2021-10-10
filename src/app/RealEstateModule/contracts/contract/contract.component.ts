import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageService, SortService, FilterService, GroupService, GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './data';
declare var $: any
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
  customAttributes: object;
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
  program = ['تقسيط', 'كاش ', 'دفعات'];
  model = { option: 'واحدات' };
  public data: object[];
  public resizeSettings = { mode: "Auto" };
  data2: Object[];
  @ViewChild('grid') public grid: GridComponent
  constructor(public modalService: NgbModal, public modalService2: NgbModal) { }

  ngOnInit(): void {

    this.customAttributes = { class: 'customcss' }; //use custom css
    this.data = data;
    this.data2 = [
    
    ];
    this.selectionsettings = { checkboxOnly: true };
    this.paggination(this.pager);
    this.values.push({ value: "" });
    this.valuesPhone.push({ value: "" });
    this.valuesNational.push({ value: "" });
  }
  paggination(event) {

    console.log(event)
  }
  openModal() {


    this.modalService.open(this.modalId, { size: 'lg', backdrop: 'static' });

  }
  values = [];
  removeCustomer(i) {
    this.values.splice(i, 1);
  }

  addCustomer() {
    this.values.push({ value: "" });
  }

  //
  valuesPhone = [];
  removePhone(i) {
    this.valuesPhone.splice(i, 1);
  }

  addPhone() {
    this.valuesPhone.push({ value: "" });
  }
  //
  valuesNational = [];
  removeNational(i) {
    this.valuesNational.splice(i, 1);
  }

  addNational() {
    this.valuesNational.push({ value: "" });
  }
  //
  url: any; //Angular 11, for stricter type
  msg = "";

  //selectFile(event) { //Angular 8
  selectFile(event: any) { //Angular 11, for stricter type
    if (!event.target.files[0] || event.target.files[0].length == 0) {
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

  ///
  @ViewChild('InstallmentdateId') installmentdate: ElementRef;
  openModalInstallmentdate() {
    this.modalService.open(this.installmentdate, { size: 'lg', backdrop: 'static' });

  }

  ///

  @ViewChild('InstallmentdateList') installmentdateList: ElementRef;
  openModalInstallmentdateList() {
    this.modalService.open(this.installmentdateList, { size: 'lg', backdrop: 'static' });

  }
  ///

  @ViewChild('InstallmentGenerate') installmentGenerate: ElementRef;
  openModalInstallmentGeneratet() {
    this.modalService2.open(this.installmentGenerate, { size: 'lg', backdrop: 'static' });

  }

  installmentGeneratet(fromDate, toDate, numberInstallmen) {

    var start = fromDate.split('-');
    var end = toDate.split('-');
    var startYear = parseInt(start[0]);
    var endYear = parseInt(end[0]);
    var dates = [];
    let number = 1;
    for (var i = startYear; i <= endYear; i++) {
      var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
      var startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
      for (var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
        debugger
        var month = j + 1;
        var displayMonth = month < 10 ? '0' + month : month;

        let _temp: { [k: string]: any } = {};
        let newDate = new Date([i, displayMonth, parseInt(start[2])].join('-'));
        _temp.ProjectID = "قسط " + number++;
        _temp.Number = numberInstallmen;
        _temp.date = newDate;

        this.data2.push(_temp)
        console.log(dates);
        console.log(this.data2);
      }

    }



    this.modalService2.dismissAll("InstallmentGenerate");
    this.modalService.open(this.installmentdateList, { size: 'lg', backdrop: 'static' });

  }

}
