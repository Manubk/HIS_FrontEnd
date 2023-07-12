import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EligibilityServiceService {

  baseUrl:string = 'http://localhost:9004/'

  constructor(private http:HttpClient) { }

  // This will get all the eligibiliy based on appId 
  getEligibilityByAppID(appId:number){
    return this.http.get(this.baseUrl+'eligibility/applicant/'+appId);
  }

  //Get the Eligibility based on  caseNum
  getEligibilityByCaseNum(caseNum:number){
    return this.http.get(this.baseUrl+'eligibility/'+caseNum);
  }

  // Create a case AppId 
  createCaseByAppId(appId:number){
    
  }

}
