import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EducationDetails } from 'src/app/model/education-details';
import { DataCollectionServiceService } from 'src/app/services/data-collection-service.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent {

  caseNum!:number;

  educationDetails:EducationDetails = new EducationDetails();

  constructor(private dataCol:DataCollectionServiceService,private router:Router, private sharedSer:SharedServiceService){}

  ngOnInit(){
    this.educationDetails.caseNum = this.sharedSer.caseNum;
    console.log(this.educationDetails.caseNum);
    console.log(this.sharedSer.caseNum);
  }

  //To save the education
saveEducation(){
  this.dataCol.saveEducation(this.educationDetails).subscribe((data:any) => {
    this.sharedSer.caseNum = data;
    console.log('after saving');
    console.log(data);
    console.log(this.sharedSer.caseNum);
    this.router.navigateByUrl('kids');
  })
 
}

  //To save the education
  // saveEducation(educationDetails:NgForm){
  //   this.educationDetails = educationDetails.value;
  //   this.dataCol.saveEducation(this.educationDetails).subscribe((data:any) => {
  //     this.caseNum = data;
  //   });
  // }

  
}
