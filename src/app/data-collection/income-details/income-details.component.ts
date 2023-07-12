import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IncomeDetails } from 'src/app/model/income-details';
import { DataCollectionServiceService } from 'src/app/services/data-collection-service.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css']
})
export class IncomeDetailsComponent {

  caseNum!:number;

  incomeDetails:IncomeDetails = new IncomeDetails();

  constructor(private dataCol:DataCollectionServiceService , private sharedSer:SharedServiceService, private router:Router){}

  ngOnInit(){
    this.caseNum = this.sharedSer.caseNum;
    this.incomeDetails.caseNum = this.caseNum;
    console.log(this.sharedSer.caseNum)
    console.log(this.caseNum);

  }

  saveIncome(){
    console.log(this.incomeDetails);
    this.dataCol.saveIncome(this.incomeDetails).subscribe((data:any) => {
      this.caseNum = data;
    });
    this.sharedSer.caseNum = this.caseNum;
    this.router.navigateByUrl('/bank');
  }

  // This will save the the income details 
  // saveIncome(incomeDetails:NgForm){
  //   this.incomeDetails = incomeDetails.value;
  //   this.dataCol.saveIncome(this.incomeDetails).subscribe((data:any) => {
  //     this.caseNum = data;
  //   });
  // }

  

}
