import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ElegibilitySearchResult } from '../model/elegibility-search-result';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  baseUrl:string='http://localhost:9006/';

  constructor(private http:HttpClient) { }

  //This will get all the search filter unique values
  getUniqueSearchValues(){
   return this.http.get(this.baseUrl+'searchvalues');
  }

  getEligibilityReport(filterReq:ElegibilitySearchResult){
   return this.http.post(this.baseUrl+'eligibilityreports',filterReq);
  }
  
}
