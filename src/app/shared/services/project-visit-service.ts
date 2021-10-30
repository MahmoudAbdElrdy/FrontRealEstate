
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/ResponseData';


@Injectable({
    providedIn: 'root',
  })
export class ProjectVisitService {
  constructor(private _httpClient: HttpClient) { }
  
   

  createUpdate(ProjectVisit: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/ProjectVisit/CreateUpdate", ProjectVisit);
  } 

  getAll(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/ProjectVisit/GetAll",filter);
  } 

  getById(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/ProjectVisit/GetById", { params: params});
  } 

  delete(id: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/ProjectVisit/Delete", { params: params});
  } 

 
 
}
