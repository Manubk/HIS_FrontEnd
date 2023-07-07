import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EducationDetails } from 'src/app/model/education-details';
import { DataCollectionServiceService } from 'src/app/services/data-collection-service.service';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent {

  caseNum!:number;

  educationDetails:EducationDetails = new EducationDetails();

  constructor(private dataCol:DataCollectionServiceService){}

  //To save the education
  saveEducation(educationDetails:NgForm){
    this.educationDetails = educationDetails.value;
    this.dataCol.saveEducation(this.educationDetails).subscribe((data:any) => {
      this.caseNum = data;
    });
  }

  
}
