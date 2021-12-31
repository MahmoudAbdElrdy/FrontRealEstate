
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
  customerData(option,ProjectId) {
    
    this.requestUrl = `${environment.urlReport}/Report/ReportCustomerData?option=${option}&ProjectId=${ProjectId}`;
    return this._httpClient.get(this.requestUrl, { responseType: 'blob'});
    
  }
  reportSalesYear(year: any) {
    
    this.requestUrl = `${environment.urlReport}/Report/ReportSalesYear?year=${year}`;
    return this._httpClient.get(this.requestUrl, { responseType: 'blob'});
    
  }
  reportAlert(model: any) {
    
    this.requestUrl = `${environment.urlReport}/Report/ReportAlert?id=${model.projectID}&from=${model.fromDate}&to=${model.toDate}`;
    return this._httpClient.get(this.requestUrl, { responseType: 'blob'});
    
  }
  reportOverdue(model: any) {
    
    this.requestUrl = `${environment.urlReport}/Report/ReportOverdue?id=${model.projectID}`;
    return this._httpClient.get(this.requestUrl, { responseType: 'blob'});
    
  }
  
  reportBill(contrcatId: any) {
    
    this.requestUrl = `${environment.urlReport}/Report/ReportBill?id=${contrcatId}`;
    return this._httpClient.get(this.requestUrl, { responseType: 'blob'});
    
  }
getImage(imageUrl: string): Observable<Blob> {
return this._httpClient.get(imageUrl, { responseType: 'blob' });
}
reportCustomerWaiting(model: any) {
    
  this.requestUrl = `${environment.urlReport}/Report/ReportCustomerWaiting?region=${model.region}&from=${model.fromDate}&to=${model.toDate}`;
  return this._httpClient.get(this.requestUrl, { responseType: 'blob'});
  
}
reportSupervisor(model: any) {
    
  this.requestUrl = `${environment.urlReport}/Report/ReportSupervisor?supervisorId=${model.supervisorId}&from=${model.fromDate}&to=${model.toDate}`;
  return this._httpClient.get(this.requestUrl, { responseType: 'blob'});
  
}
}
