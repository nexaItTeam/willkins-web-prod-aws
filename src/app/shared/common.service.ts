import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiManager } from "../shared/api-manage"
import { RestEnds } from "../shared/config"
import{environment} from "src/app/env/env"
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private apiManager: ApiManager,
    private _http:HttpClient
  ) {  }

  getPropertyList() {
    return this._http.post(environment.PROPERTY_ENDPOINT + 'getAll', []);
  }
   addEnquiry(body: any) {
     return this._http.post(environment.ENQUIRY_ENDPOINT +'add', body);
   }
   getPropertyImage(data:any){
    return this._http.post(environment.PROPERTY_ENDPOINT +  'getImg', data);
   }
   getViewProperty(data:any){
    return this._http.post(environment.PROPERTY_ENDPOINT +  'getImgById', data);
   }
}
