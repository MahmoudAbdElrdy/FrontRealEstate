import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/shared/services/public.service';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report.service';
@Component({
  selector: 'app-supervisor-report',
  templateUrl: './supervisor-report.component.html',
  styleUrls: ['./supervisor-report.component.css']
})
export class SupervisorReportComponent implements OnInit {
  dataDropDown: any;
  FieldsProject: Object = { text: 'text', value: 'value' };
  constructor(  private _service: ReportService,private _publicService: PublicService,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.getDropDownList();
    this.form = this.formBuilder.group({
      supervisorId:  [0, [Validators.required]],
      fromDate: [null],
      toDate: [null],
    });
  }
  getDropDownList() {

    this._publicService.get("Supervisor/GetDropDownList")
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {

          this.dataDropDown = res.data;

        }
      });
  }
  form: FormGroup;
  getFile() {
    
    this.form.markAllAsTouched();
    if(this.form.valid){
      var ReportName = "Supervisor";
      //ASPX page URL to load report  
      var src = 'http://localhost:4277/Reports/ReportForm/ReportPage.aspx?';
      //We can add parameters here  
      src = src + "ReportName=" + ReportName + "&supervisorId=" + this.form.value.supervisorId + "&fromDate=" +this.form.value.fromDate+ "&toDate=" +this.form.value.toDate ;
 
      window.open(src, "_blank");
       
        // this._service.reportSupervisor(this.form.value).subscribe((data: Blob) => {
        //       var fileType: any;
        //     fileType = "application/pdf";
        //     var blob = new Blob([data], { type: fileType });
        //     const objectUrl: string = URL.createObjectURL(blob);
       
        //     window.open(objectUrl, '_blank');
         
        // })
        }}
 
}
