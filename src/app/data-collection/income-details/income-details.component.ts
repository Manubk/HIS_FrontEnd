import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IncomeDetails } from 'src/app/model/income-details';
import { DataCollectionServiceService } from 'src/app/services/data-collection-service.service';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css']
})
export class IncomeDetailsComponent {

  caseNum!:number;

  incomeDetails!:IncomeDetails;

  constructor(private dataCol:DataCollectionServiceService){}


  // This will save the the income details 
  saveIncome(incomeDetails:NgForm){
    this.incomeDetails = incomeDetails.value;
    this.dataCol.saveIncome(this.incomeDetails).subscribe((data:any) => {
      this.caseNum = data;
    });
  }

  

}
