import { Component } from '@angular/core';
import { Eligibility } from 'src/app/model/eligibility';
import { User } from 'src/app/model/user';
import { DataCollectionServiceService } from 'src/app/services/data-collection-service.service';
import { EligibilityServiceService } from 'src/app/services/eligibility-service.service';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.css']
})
export class CreateCaseComponent {

typedAppId!:number ;

caseNum!:number;

users!:User[];

eligibityDetails:Eligibility[] = [];

  constructor(private eligService:EligibilityServiceService,private dataColService:DataCollectionServiceService){}

  // This will get all the eligibility details of applicant 
  getEligibilityByAppID(){
    this.eligService.getEligibilityByAppID(this.typedAppId).subscribe((data:any) =>{
      this.eligibityDetails = data;
      console.log(this.eligibityDetails.length);
    });
  }
  

  // This will generate new case and get case number 
  createCase(){
    this.dataColService.createCase(this.typedAppId).subscribe((data:any) => {
      console.log(data);
    });
  }
}
