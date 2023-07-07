import { NgForOfContext } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BankDetails } from 'src/app/model/bank-details';
import { DataCollectionServiceService } from 'src/app/services/data-collection-service.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent {

  bankDetails!:BankDetails;

  constructor(private dataCol:DataCollectionServiceService){}


  //To save the bank details
  saveBank(bankDetails:NgForm){
    this.bankDetails = bankDetails.value;
    this.dataCol.saveBank(this.bankDetails).subscribe((data:any) => {
      console.log(data);
    });
}


}
