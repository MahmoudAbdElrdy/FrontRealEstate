
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/ResponseData';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
  })
export class ReportService {
  requestUrl: string;
  constructor(private _httpClient: HttpClient) { }
  
   

 
  reportExtraContrcat(ExtraContrcat: any) {
    debugger
    this.requestUrl = `${environment.urlReport}/Report/ReportExtraContrcat?ProjectID=${ExtraContrcat.projectID}&ContractExtraName=${ExtraContrcat.contractExtraName}`;
    return this._httpClient.get(this.requestUrl, { responseType: 'blob'});
    
  }
  customerCard(model: any) {
    
    this.requestUrl = `${environment.urlReport}/Report/CustomerCard?customerName=${model.customerName}`;
    return this._httpClient.get(this.requestUrl, { responseType: 'blob'});
    
  }
  customerData(option) {
    
    this.requestUrl = `${environment.urlReport}/Report/ReportCustomerData?option=${option}`;
    return this._httpClient.get(this.requestUrl, { responseType: 'blob'});
    
  }
  reportSalesYear(year: any) {
    
    this.requestUrl = `${environment.urlReport}/Report/ReportSalesYear?year=${year}`;
    return this._httpClient.get(this.requestUrl, { responseType: 'blob'});
    
  }
}
