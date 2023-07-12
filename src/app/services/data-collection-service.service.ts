import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlanSelection } from '../model/plan-selection';
import { IncomeDetails } from '../model/income-details';
import { EducationDetails } from '../model/education-details';
import { KidsList } from '../model/kids-list';
import { BankDetails } from '../model/bank-details';

@Injectable({
  providedIn: 'root'
})
export class DataCollectionServiceService {

  baseUrl:string ='http://localhost:9003/';

  constructor(private http:HttpClient) { }

  // It will create a new case Id and return it 
  createCase(appId:number){
    return this.http.get(this.baseUrl+'createcase/'+appId);
  }

  // This will get all Plans details 
  getPlanList(){
    return this.http.get(this.baseUrl+'plans');
  }

  //This will save the plan
  savePlanSelection(planselection:PlanSelection){
    return this.http.post(this.baseUrl+'planselection',planselection);
  }

  // THis will save income 
  saveIncome(incomeDetails:IncomeDetails){
    console.log(incomeDetails);
    return  this.http.post(this.baseUrl+'income',incomeDetails);
  }

  // This will save Education details
  saveEducation(educationDetails:EducationDetails){
    console.log(educationDetails);
   return this.http.post(this.baseUrl+'education',educationDetails);
  }


  //This is to save the kids 
  saveKids(kidsList:KidsList){
    console.log(kidsList);
    return this.http.post(this.baseUrl+'children',kidsList);
  }

  //  THis is to save the bank details
  saveBank(bankDetails:BankDetails){
    return this.http.post(this.baseUrl+'bank',bankDetails);
  }

  //To get the dataSummery basedOd caseNum
  getSummery(caseNum:number){
    return this.http.get(this.baseUrl+'summary/'+caseNum);
  }
}
