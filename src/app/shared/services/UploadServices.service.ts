import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadServicesService  {

  //private _rootUrl: string = 'http://ahmedatia010-001-site1.htempurl.com';

  constructor(
  
   private http: HttpClient
  ) {
   
  }

UploadImage(formData){
 
  return     this.http.post(environment.apiUrl + '/UploadFile/UploadImage', formData);
   
}
UploadImage2(formData){
 
  return     this.http.post(environment.apiUrl + '/UploadFile/FileUpload', formData);
   
}
}
