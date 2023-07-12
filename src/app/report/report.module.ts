import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EligibilityReportsComponent } from './eligibility-reports/eligibility-reports.component';
import { FormsModule } from '@angular/forms';
import { UtilityModule } from '../utility/utility.module';



@NgModule({
  declarations: [
    EligibilityReportsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule
  ]
})
export class ReportModule { }
