import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/shared/services/public.service';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report.service';
@Component({
  selector: 'app-customer-waiting',
  templateUrl: './customer-waiting.component.html',
  styleUrls: ['./customer-waiting.component.css']
})
export class CustomerWaitingComponent implements OnInit {
  dataDropDown: any;
  FieldsProject: Object = { text: 'name', value: 'id' };
  constructor(  private _service: ReportService,private _publicService: PublicService,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  
    this.form = this.formBuilder.group({
      region:  [null],
      fromDate: [null],
      toDate: [null],
    });
  }
 
  form: FormGroup;
  getFile() {
    
    this.form.markAllAsTouched();
    if(this.form.valid){
      var ReportName = "CustomerWaiting";
      //ASPX page URL to load report  
      var src = 'http://192.168.1.150:4277/Reports/ReportForm/ReportPage.aspx?';
      //We can add parameters here  
      src = src + "ReportName=" + ReportName + "&region=" + this.form.value.region + "&fromDate=" +this.form.value.fromDate+ "&toDate=" +this.form.value.toDate ;
 
      window.open(src, "_blank");
       
        // this._service.reportCustomerWaiting(this.form.value).subscribe((data: Blob) => {
         
         
        //     var fileType: any;
        //     fileType = "application/pdf";
        //     var blob = new Blob([data], { type: fileType })
        //     const blob1: Blob = data;
        //     const fileName1: string = "CustomerWaiting";
        //     const objectUrl: string = URL.createObjectURL(blob);
       
        //     window.open(objectUrl, '_blank');
        //     // const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;
    
        //     // a.href = objectUrl;
        //     // a.download = fileName1;
        //     // document.body.appendChild(a);
        //     // a.click();
    
        //     // document.body.removeChild(a);
        //     // URL.revokeObjectURL(objectUrl);
        // })
        }}
 
}
