import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plan } from '../model/plan';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  
  private domain!: string;
  // private baseUrl = environment.domine+environment.adminPort;
  private baseUrl = 'http://localhost:9000/';

  constructor(private http:HttpClient) { 
 
  }

  // save Plan 
  savePlan(plan:Plan){
    console.log(this.baseUrl);
    console.log(plan);
   return this.http.post(this.baseUrl+'plan',plan);
  }

  //To save edited Plans
  saveEditedPlas(plan:Plan){
    console.log(plan);
    return this.http.post(this.baseUrl+'plan',plan);
  }

  //Get All Plans
  getPlans(){
    return this.http.get(this.baseUrl+'plans');
  }

  // Update Plans
  putPlans(plan:Plan){

  }

  // Delete Plan
  deletePlan(planId:number){
    return this.http.delete(this.baseUrl+'plan/'+planId) 
  }

}
