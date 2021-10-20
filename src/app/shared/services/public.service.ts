import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
@Injectable({
  providedIn: 'root',
})
export class PublicService {
  constructor(private http: HttpClient) {}

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server  Error");
  }

  getOne(apiController: string): Observable<any> {

       return this.http.get<any[]>(environment.apiUrl +"/" + apiController);

   }
  get(apiController: string): Observable<any> {

      return this.http.get<any[]>(environment.apiUrl +"/" + apiController);

  }

  getByAction(apiController: string, action: string): Observable<any[]> {
    return this.http.get<any[]>(
      environment.apiUrl +  "/" + apiController + "/" + action
    );
  }



  getByID( apiController: string,id: any): Observable<any> {

      return this.http.get<any>(
        environment.apiUrl + "/" + apiController + "/" + id);

  }
  // add
  post( apiController: string,data: any): Observable<any> {


      return this.http.post<any>(environment.apiUrl + "/" + apiController, data);

  }
  //edit
  put( apiController: string,data: any): Observable<any> {

      return this.http.put<any>(environment.apiUrl + "/" + apiController, data);

  }
  delete( apiController: string ,id: any): Observable<any> {
    return this.http.delete<any>(environment.apiUrl +  "/" +apiController + "/" + id);
  }

  getAsDropDownList(apiController:string,id:any,type:any):Observable<any>{

    let params = new HttpParams();
    params = params.append('parentId', id);
    params = params.append('locationType', type);
    return this.http.get<any>(environment.apiUrl +  "/"+ apiController, { params: params});

  }

}
