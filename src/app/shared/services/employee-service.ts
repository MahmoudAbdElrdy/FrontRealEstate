
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
  
  Authenticate(AuthenticateRequest: any):Observable<any>{
   
    return this._httpClient.post<any>(environment.apiUrl + "/Employee/login", AuthenticateRequest);
  } 


  
  Register(Employee: any):Observable<ResponseData>{
   
    return this._httpClient.post<any>(environment.apiUrl + "/Employee/CreateUpdateemployee", Employee);
  } 

  UpdateEmployee(Employee: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Employee/CreateUpdateemployee", Employee);
  } 

  GetEmployees():Observable<ResponseData>{
    return this._httpClient.get<any>(environment.apiUrl + "Employee/GetEmployees");
  } 

  GetEmployee(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "Employee/GetEmployee", { params: params});
  } 

  DeleteEmployee(Employee: any):Observable<any>{
    return this._httpClient.post<any>(environment.apiUrl + "Employee/DeleteEmployee",Employee);
  } 

  GetRoles():Observable<ResponseData>{
    return this._httpClient.get<any>(environment.apiUrl + "Employee/GetRoles");
  } 

 
}
