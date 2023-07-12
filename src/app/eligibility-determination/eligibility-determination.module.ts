import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EligibilityComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EligibilityDeterminationModule { }
