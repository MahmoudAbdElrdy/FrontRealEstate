import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/shared/services/public.service';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report.service';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  dataDropDown: any;
  FieldsProject: Object = { text: 'name', value: 'id' };
  constructor(  private _service: ReportService,private _publicService: PublicService,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.getDropDownList();
    this.form = this.formBuilder.group({
      projectID:  [null],
      fromDate: [null, [Validators.required]],
      toDate: [null, [Validators.required]],
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
     
       
        this._service.reportAlert(this.form.value).subscribe((data: Blob) => {
            debugger;
         
            var fileType: any;
            fileType = "application/pdf";
            var blob = new Blob([data], { type: fileType })
            const blob1: Blob = data;
            const fileName1: string = "alert";
            const objectUrl: string = URL.createObjectURL(blob);
       
            window.open(objectUrl, '_blank');
            // const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;
    
            // a.href = objectUrl;
            // a.download = fileName1;
            // document.body.appendChild(a);
            // a.click();
    
            // document.body.removeChild(a);
            // URL.revokeObjectURL(objectUrl);
        })
        }}
 
}
