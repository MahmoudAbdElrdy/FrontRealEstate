
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/ResponseData';


@Injectable({
    providedIn: 'root',
  })
export class ProjectService {
  constructor(private _httpClient: HttpClient) { }
  
   

  createUpdate(Project: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Project/CreateUpdate", Project);
  } 
  saveApartmentNumber(Project: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Project/SaveApartmentNumber", Project);
  } 
  getAll(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Project/GetAll",filter);
  } 

  getById(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Project/GetById", { params: params});
  } 

  delete(id: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Project/Delete", { params: params});
  } 

  getProjectUnitDescriptionById(flatId:any,projectId:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('flatId', flatId);
    params = params.append('projectId', projectId);
    return this._httpClient.get<any>(environment.apiUrl + "/Project/GetProjectUnitDescriptionById", { params: params});
  } 
  saveProjectUnitDescription(Project: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Project/SaveProjectUnitDescription", Project);
  } 
}
