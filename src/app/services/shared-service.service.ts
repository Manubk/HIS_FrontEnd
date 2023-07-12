import { Injectable } from '@angular/core';
import { DataSummery } from '../model/data-summery';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  appId!:number;

  caseNum!:number;

  summery!:DataSummery;

  constructor() { }

}
