
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/ResponseData';


@Injectable({
    providedIn: 'root',
  })
export class DailyReportService {
  constructor(private _httpClient: HttpClient) { }
  
   

  createUpdate(DailyReport: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/DailyReport/CreateUpdate", DailyReport);
  } 
  saveDailyReportDetail(DailyReport: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/DailyReport/SaveDailyReportDetail", DailyReport);
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
