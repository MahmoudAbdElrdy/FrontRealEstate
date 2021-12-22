import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/shared/services/contract-service';
import { PublicService } from 'src/app/shared/services/public.service';
import { ProjectService } from 'src/app/shared/services/peoject-service';
import { ResponseData } from 'src/app/shared/models/ResponseData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report.service';
@Component({
  selector: 'app-year-contrcat',
  templateUrl: './year-contrcat.component.html',
  styleUrls: ['./year-contrcat.component.css']
})
export class YearContrcatComponent implements OnInit {
  dataDropDown=new Array();
 form: FormGroup;
 FieldsDDL: Object = { text: 'value', value: 'value' };

 constructor(  private _service: ReportService,
   private formBuilder: FormBuilder,) { }

 ngOnInit(): void {
   this.getDropDownList()
   this.form = this.formBuilder.group({
     year:  [null, [Validators.required]],
   });
 }
 getDropDownList() {
  var max = new Date().getFullYear(),
    min = max - 10,
    max = max + 50;
    
    for(var i=min; i<=max; i++){
      
      this.dataDropDown.push(i);
    }
 
 }
 getFile() {
   debugger
   this.form.markAllAsTouched();
   if(this.form.valid){
      this._service.reportSalesYear(this.form.value.year).subscribe(res => {
     
     const fileURL = URL.createObjectURL(res);
     window.open(fileURL, '_blank');
   });
   }
  
}
}
