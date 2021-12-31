import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/shared/services/contract-service';
import { PublicService } from 'src/app/shared/services/public.service';
import { ProjectService } from 'src/app/shared/services/peoject-service';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
   dataDropDown: any;
  form: FormGroup;
  FieldsDDL: Object = { text: 'text', value: 'value' };
  FieldsProject: Object = { text: 'name', value: 'name' };
  constructor(  private _service: ReportService,
    private _publicService: PublicService,
    private router: Router,  private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private _serviceProject: ProjectService,) { }

  ngOnInit(): void {
    this.getDropDownList()
    this.form = this.formBuilder.group({
     
      
      customerName:  [null, [Validators.required]],
    });
  }
  getDropDownList() {

    this._publicService.get("Contract/GetAllName")
      .subscribe((res: ResponseData) => {
        if (res.isSuccess == true) {

          this.dataDropDown = res.data;

        }
      });
  }
  getFile() {
    this.form.markAllAsTouched();
    if(this.form.valid){
       this._service.customerCard(this.form.value).subscribe((data: Blob) => {
        var fileType: any;
      fileType = "application/pdf";
      var blob = new Blob([data], { type: fileType });
      const objectUrl: string = URL.createObjectURL(blob);
 
      window.open(objectUrl, '_blank');
   
  })
    }
   
}
}
