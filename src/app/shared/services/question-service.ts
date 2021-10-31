
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/ResponseData';


@Injectable({
    providedIn: 'root',
  })
export class QuestionService {
  constructor(private _httpClient: HttpClient) { }
  
   

  createUpdate(Question: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Question/CreateUpdate", Question);
  } 

  getAll(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Question/GetAll",filter);
  } 

  getById(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Question/GetById", { params: params});
  } 

  delete(id: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Question/Delete", { params: params});
  } 

 
 
}
