import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/shared/services/contract-service';
import { PublicService } from 'src/app/shared/services/public.service';
import { ProjectService } from 'src/app/shared/services/peoject-service';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {
  radioTitle: string;
  radioItems: any;
  model = { option: 'الكل', value: 1 };
  constructor(private _service: ReportService,
    private _publicService: PublicService,
    private router: Router, private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private _serviceProject: ProjectService,) { }
    pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  ngOnInit(): void {
    this.radioTitle = 'Radio Button in Angular';
    this.radioItems = [
      { option: 'الكل', value: 1 },
      { option: 'رقم التليفون فقط', value: 2 },
      { option: 'تليفون والعنوان ورقم القومى', value: 3 },
      { option: ' العنوان فقط', value: 4 },
      { option: ' تاريخ التعاقد وملاحظات ونظام الدفع ', value: 5}
    ];
  }
  getFile() {

    {
      debugger
      this._service.customerData(this.model.value).subscribe(res => {

        const fileURL = URL.createObjectURL(res);
        window.open(fileURL, '_blank');
      });
    }

  }
}
