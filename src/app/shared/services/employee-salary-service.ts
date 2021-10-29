
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/ResponseData';


@Injectable({
    providedIn: 'root',
  })
export class EmployeeSalaryService {
  constructor(private _httpClient: HttpClient) { }
  
   

  createUpdate(EmployeeSalary: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/EmployeeSalary/CreateUpdate", EmployeeSalary);
  } 

  getAll(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/EmployeeSalary/GetAll",filter);
  } 

  getById(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/EmployeeSalary/GetById", { params: params});
  } 

  delete(id: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/EmployeeSalary/Delete", { params: params});
  } 

 
 
}
