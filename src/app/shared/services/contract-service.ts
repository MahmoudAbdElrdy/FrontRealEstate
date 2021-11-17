
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/ResponseData';


@Injectable({
    providedIn: 'root',
  })
export class ContractService {
  constructor(private _httpClient: HttpClient) { }
  
   

  createUpdate(Contract: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Contract/CreateUpdate", Contract);
  } 
  saveApartmentNumber(Contract: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Contract/SaveApartmentNumber", Contract);
  } 
  getAll(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Contract/GetAll",filter);
  } 

  getById(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Contract/GetById", { params: params});
  } 

  delete(id: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Contract/Delete", { params: params});
  } 

  getContractUnitDescriptionById(flatId:any,ContractId:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('flatId', flatId);
    params = params.append('ContractId', ContractId);
    return this._httpClient.get<any>(environment.apiUrl + "/Contract/GetContractUnitDescriptionById", { params: params});
  } 
  getContractUnitList(ContractId:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('ContractId', ContractId);
    return this._httpClient.get<any>(environment.apiUrl + "/Contract/GetContractUnitList", { params: params});
  } 
  saveContractUnitDescription(Contract: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Contract/SaveContractUnitDescription", Contract);
  } 
  saveReservation(Contract: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Contract/SaveReservation", Contract);
  }
  cancellContract(cancell: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Contract/CancellContract", cancell);
  }  
  //
  
  saveContractDetail(model: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Contract/SaveContractDetail", model);
  } 
  saveListContractDetail(model: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Contract/SaveListContractDetail", model);
  } 
  getAllContractDetail(contractId):Observable<ResponseData>{
    let params = new HttpParams();
    params = params.append('contractId', contractId);
    return this._httpClient.get<any>(environment.apiUrl + "/Contract/GetAllContractDetail", { params: params});
  } 

  getByIdContractDetail(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Contract/GetByIdContractDetail", { params: params});
  } 

  deleteContractDetail(id: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Contract/DeleteContractDetail", { params: params});
  } 
  getAllInstallmentOverdue(model: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Contract/GetAllInstallmentOverdue", model);
  } 
  getAllInstallmentAlert(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Contract/GetAllInstallmentAlert", { params: params});
  } 

  ///
  saveContractDetailBill(model: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Contract/SaveContractDetailBill", model);
  } 
 
  getAllContractDetailBill(contractId):Observable<ResponseData>{
    let params = new HttpParams();
    params = params.append('contractId', contractId);
    return this._httpClient.get<any>(environment.apiUrl + "/Contract/GetAllContractDetailBill", { params: params});
  } 

  getByIdContractDetailBill(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Contract/GetByIdContractDetailBill", { params: params});
  } 

  deleteContractDetailBill(id: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Contract/DeleteContractDetailBill", { params: params});
  } 
  ///
  
}
