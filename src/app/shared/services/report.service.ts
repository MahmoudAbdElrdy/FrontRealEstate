
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
  
   

  reportExtraContrcat(ExtraContrcat: any){
  return   this._httpClient.post<any>(environment.urlReport + "/Report/ReportExtraContrcat", { responseType: 'blob', observe: 'response'}, ExtraContrcat);
  } 
  //report/ReportExtraContrcat?ProjectID=33&ContractExtraName=دفعة%20مباني
  //${ExtraContrcat.projectID} ${ExtraContrcat.contractExtraName}
  getPdfReport(ExtraContrcat: any) {
    debugger
    this.requestUrl = `${environment.urlReport}/Report/ReportExtraContrcat?ProjectID=${ExtraContrcat.projectID}&ContractExtraName=${ExtraContrcat.contractExtraName}`;
    return this._httpClient.get(this.requestUrl, { responseType: 'blob'});
    
  }
  saveDailyReportDetail(DailyReport: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.urlReport + "/DailyReport/SaveDailyReportDetail", DailyReport);
  } 

  getAll(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/DailyReport/GetAll",filter);
  } 

  getById(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/DailyReport/GetById", { params: params});
  } 

  delete(id: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/DailyReport/Delete", { params: params});
  } 

 
 
}
