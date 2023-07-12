import { Component } from '@angular/core';
import { Eligibility } from 'src/app/model/eligibility';
import { EligibilityServiceService } from 'src/app/services/eligibility-service.service';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent {

  caseNum!: number;

  eligibility:Eligibility = new Eligibility();

  constructor(private eligibilityService: EligibilityServiceService) { }

  getEligibilityByCaseNum() {
    this.eligibilityService.getEligibilityByCaseNum(this.caseNum).subscribe((data: any) => {
      this.eligibility = data;
      console.log(this.eligibility);
    });
  }


}
