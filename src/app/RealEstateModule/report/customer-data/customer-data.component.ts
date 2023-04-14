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
  dataDropDown: any;
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
    this.getDropDownList();
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

    {
      
     // this._service.customerData(this.model.value,this.projectID).subscribe((data: Blob) => {
  //       var fileType: any;
  //     fileType = "application/pdf";
  //     var blob = new Blob([data], { type: fileType });
  //     const objectUrl: string = URL.createObjectURL(blob);
 
  //     window.open(objectUrl, '_blank');
   
  // })
  var ReportName = "CustomerData";
  //ASPX page URL to load report  
  var src = 'http://10.10.10.24:4277/Reports/ReportForm/ReportPage.aspx?';
  //We can add parameters here  
  if(this.projectID==undefined)
  this.projectID=0;
  src = src + "ReportName=" + ReportName + "&option=" +this.model.value+ "&ProjectId=" +this.projectID ;

  window.open(src, "_blank");
    }

  }
  projectID:any;
  FieldsProject: Object = { text: 'name', value: 'id' };
}
