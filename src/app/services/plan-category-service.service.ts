import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanCategoryServiceService {

  private baseUrl = 'http://localhost:9000/';
  constructor(private http:HttpClient) { }

  getAllCategoryes(){
    return this.http.get(this.baseUrl+'categories');
  }
}
