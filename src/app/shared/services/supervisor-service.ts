
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/ResponseData';


@Injectable({
    providedIn: 'root',
  })
export class SupervisorService {
  constructor(private _httpClient: HttpClient) { }
  
   

  createUpdate(Supervisor: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Supervisor/CreateUpdate", Supervisor);
  } 
  saveSupervisorDetail(Supervisor: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Supervisor/SaveSupervisorDetail", Supervisor);
  } 

  getAll(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Supervisor/GetAll",filter);
  } 

  getById(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Supervisor/GetById", { params: params});
  } 

  delete(id: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Supervisor/Delete", { params: params});
  } 

 
 
}
