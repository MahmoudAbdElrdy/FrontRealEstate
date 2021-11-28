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

  constructor(  private _service: ReportService,
    private _publicService: PublicService,
    private router: Router,  private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private _serviceProject: ProjectService,) { }

  ngOnInit(): void {
  }
  getFile() {
    
  {
         this._service.customerData().subscribe(res => {
      
      const fileURL = URL.createObjectURL(res);
      window.open(fileURL, '_blank');
    });
    }
 
}
}
