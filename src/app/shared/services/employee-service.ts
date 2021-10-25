
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/ResponseData';


@Injectable({
    providedIn: 'root',
  })
export class EmployeeService {
  constructor(private _httpClient: HttpClient) { }
  
  authenticate(AuthenticateRequest: any):Observable<any>{
   
    return this._httpClient.post<any>(environment.apiUrl + "/Employee/login", AuthenticateRequest);
  } 


  
  register(Employee: any):Observable<ResponseData>{
   
    return this._httpClient.post<any>(environment.apiUrl + "/Employee/CreateUpdatEemployee", Employee);
  } 

  createUpdate(Employee: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Employee/CreateUpdatEemployee", Employee);
  } 

  getAll(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Employee/GetAll",filter);
  } 

  getById(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Employee/GetById", { params: params});
  } 

  delete(id: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Employee/Delete", { params: params});
  } 

  getAlldepartments():Observable<ResponseData>{
    return this._httpClient.get<any>(environment.apiUrl + "/Employee/GetAlldepartments");
  } 

 
}
