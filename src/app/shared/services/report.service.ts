
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
    
    this.requestUrl = `${environment.urlReport}/Report/ReportExtraContrcat?ProjectID=${ExtraContrcat.projectID}&ContractExtraName=${ExtraContrcat.contractExtraName}`;
    return this._httpClient.get(this.requestUrl, { responseType: 'blob'});
    
  }
  customerCard(model: any) {
    
    this.requestUrl = `${environment.urlReport}/Report/CustomerCard?customerName=${model.customerName}`;
    return this._httpClient.get(this.requestUrl, { responseType: 'blob'});
    
  }
  customerData() {
    
    this.requestUrl = `${environment.urlReport}/Report/ReportCustomerData`;
    return this._httpClient.get(this.requestUrl, { responseType: 'blob'});
    
  }
}
