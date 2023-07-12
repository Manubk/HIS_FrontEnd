import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ElegibilitySearchResult } from 'src/app/model/elegibility-search-result';
import { Eligibility } from 'src/app/model/eligibility';
import { UniqueSearchFilters } from 'src/app/model/unique-search-filters';
import { User } from 'src/app/model/user';
import { ReportServiceService } from 'src/app/services/report-service.service';

@Component({
  selector: 'app-eligibility-reports',
  templateUrl: './eligibility-reports.component.html',
  styleUrls: ['./eligibility-reports.component.css']
})
export class EligibilityReportsComponent {

  searchRequest:ElegibilitySearchResult = new ElegibilitySearchResult();

  uniqueSearchValues!:UniqueSearchFilters;

  eligReports:User[] = [];

 constructor(private reportSer:ReportServiceService){
  console.log('constructor')
 }

ngOnInit(){
 console.log(12);
this.getUniqueSearchValues();
}

//To get Unique Search Values
getUniqueSearchValues(){
  this.reportSer.getUniqueSearchValues().subscribe((data:any) => {
    console.log(data);
    this.uniqueSearchValues = data;
    console.log(this.uniqueSearchValues.uniqueStatus);
  });
}

onSearch(){
this.reportSer.getEligibilityReport(this.searchRequest).subscribe((data:any) => {
  this.eligReports = data;
});
}

}
