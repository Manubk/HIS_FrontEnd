import { NgForOfContext } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BankDetails } from 'src/app/model/bank-details';
import { DataCollectionServiceService } from 'src/app/services/data-collection-service.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent {

  bankDetails:BankDetails = new BankDetails();

  constructor(private dataCol:DataCollectionServiceService , private router:Router , private sharedSer:SharedServiceService){}

  ngOnInit(){
    this.bankDetails.caseNum = this.sharedSer.caseNum;
    console.log(this.sharedSer.caseNum);
  }

  //To save the bank details
  // saveBank(bankDetails:NgForm){
  //   this.bankDetails = bankDetails.value;
  //   this.dataCol.saveBank(this.bankDetails).subscribe((data:any) => {
  //     console.log(data);
  //   });

saveBank(){
  this.dataCol.saveBank(this.bankDetails).subscribe((data:any) => {
    this.sharedSer.caseNum = data.value;
    console.log(data.value);
  });

  this.router.navigateByUrl('education');
}


}
