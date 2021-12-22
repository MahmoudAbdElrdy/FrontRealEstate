import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/shared/services/contract-service';
import { PublicService } from 'src/app/shared/services/public.service';
import { ProjectService } from 'src/app/shared/services/peoject-service';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report.service';
import { Globals } from 'src/app/shared/helper/constants';
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
      fromDate: [Globals.formatDate(Date.now), [Validators.required]],
      toDate: [Globals.formatDate(Date.now), [Validators.required]],
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
    debugger
    this.form.markAllAsTouched();
    if(this.form.valid){
       this._service.reportAlert(this.form.value).subscribe(res => {
      
      const fileURL = URL.createObjectURL(res);
      window.open(fileURL, '_blank');
    });
    }
   
 }
}
