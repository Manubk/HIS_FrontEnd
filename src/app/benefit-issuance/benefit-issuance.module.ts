import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitIssanceComponent } from './benefit-issance/benefit-issance.component';
import { UtilityModule } from '../utility/utility.module';



@NgModule({
  declarations: [
    BenefitIssanceComponent
  ],
  imports: [
    CommonModule,
    UtilityModule
  ]
})
export class BenefitIssuanceModule { }
