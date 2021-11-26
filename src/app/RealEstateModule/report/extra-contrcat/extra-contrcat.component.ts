import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/shared/services/contract-service';
import { PublicService } from 'src/app/shared/services/public.service';
import { ProjectService } from 'src/app/shared/services/peoject-service';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-extra-contrcat',
  templateUrl: './extra-contrcat.component.html',
  styleUrls: ['./extra-contrcat.component.css']
})
export class ExtraContrcatComponent implements OnInit {
  extraList = [{ value: "عداد مياة", text: "عداد مياة" }, {  text: "عداد كهرباء", value: "عداد كهرباء" }, 
  {  text: "دفعة مباني", value: "دفعة مباني" }, {  text: " وديعة اسانسير", value: " وديعة اسانسير" }]
  dataDropDown: any;
  form: FormGroup;
  FieldsDDL: Object = { text: 'text', value: 'value' };
  FieldsProject: Object = { text: 'name', value: 'id' };
  constructor(  private _service: ReportService,
    private _publicService: PublicService,
    private router: Router,  private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private _serviceProject: ProjectService,) { }

  ngOnInit(): void {
    this.getDropDownList()
    this.form = this.formBuilder.group({
      projectID: [null, [Validators.required]],
      
      contractExtraName:  [null, [Validators.required]],
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
  getFile() {
    debugger
    this._service.getPdfReport(this.form.value).subscribe(res => {
      debugger
      const fileURL = URL.createObjectURL(res);
      window.open(fileURL, '_blank');
    });
}
}
