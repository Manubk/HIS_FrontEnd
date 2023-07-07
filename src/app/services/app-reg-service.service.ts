import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AppRegServiceService {
  
  baseUrl:string = 'http://localhost:9002/';
  constructor( private http:HttpClient) { }

  // To save the New Users 
  saveApplicant(user:User){
    return this.http.post(this.baseUrl+'appReg',user);
  }

  //Delete Applicant
  deleteApplicant(appId:number){
    //TODO no a currrent feture
  }

  // To   Get All The Application 
  getAllApplication(){
   return this.http.get(this.baseUrl+'applicants');
  }
}
