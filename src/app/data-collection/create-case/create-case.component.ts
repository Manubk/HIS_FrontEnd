import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Eligibility } from 'src/app/model/eligibility';
import { User } from 'src/app/model/user';
import { DataCollectionServiceService } from 'src/app/services/data-collection-service.service';
import { EligibilityServiceService } from 'src/app/services/eligibility-service.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

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

  constructor(private eligService:EligibilityServiceService,private dataColService:DataCollectionServiceService
    ,private sharedSer:SharedServiceService,private router:Router){
    }

    // On Creation Of Application this will initialize the application ID from sharedService passed by application component
    // Based on Application ID it will fetch all avalibale record of applicent 
    ngOnInit(){
      this.typedAppId = this.sharedSer.appId;
      this.getEligibilityByAppID();
    }

  

  // This will get all the eligibility details of applicant 
  getEligibilityByAppID(){
    this.eligService.getEligibilityByAppID(this.typedAppId).subscribe((data:any) =>{
      this.eligibityDetails = data;
      console.log(this.eligibityDetails.length);
    });
  }
  

  //To create a new case
  createNewCase(){
    this.dataColService.createCase(this.typedAppId).subscribe((data:any) => {
      this.caseNum = data;
      console.log('created caseNum:'+this.caseNum);
      this.sharedSer.caseNum = this.caseNum;
      this.router.navigateByUrl('/planselection');
    })
  }

  // This will generate new case and get case number 
  createCase(user:User){
    this.dataColService.createCase(this.typedAppId).subscribe((data:any) => {
      console.log(data);
    });
  }
}
