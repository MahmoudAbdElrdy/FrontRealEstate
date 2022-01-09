import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/shared/services/public.service';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report.service';
@Component({
  selector: 'app-overdue',
  templateUrl: './overdue.component.html',
  styleUrls: ['./overdue.component.css']
})
export class OverdueComponent implements OnInit {
  dataDropDown: any;
  FieldsProject: Object = { text: 'name', value: 'id' };
  constructor(  private _service: ReportService,private _publicService: PublicService,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.getDropDownList();
    this.form = this.formBuilder.group({
      projectID:  [0]
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
  form: FormGroup;
  getFile() {
    
    this.form.markAllAsTouched();
    if(this.form.valid){
  //      this._service.reportOverdue(this.form.value).subscribe((data: Blob) => {
  //       var fileType: any;
  //     fileType = "application/pdf";
  //     var blob = new Blob([data], { type: fileType });
  //     const objectUrl: string = URL.createObjectURL(blob);
 
  //     window.open(objectUrl, '_blank');
   
  // })
  var ReportName = "Overdue";
  //ASPX page URL to load report  
  var src = 'http://192.168.1.150:4277/Reports/ReportForm/ReportPage.aspx?';
  //We can add parameters here  
  src = src + "ReportName=" + ReportName + "&projectID=" + this.form.value.projectID  ;

  window.open(src, "_blank");
    }
   
 }
}
