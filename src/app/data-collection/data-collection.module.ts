import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCaseComponent } from './create-case/create-case.component';
import { PlanSelectionComponent } from './plan-selection/plan-selection.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { KidsDetailsComponent } from './kids-details/kids-details.component';
import { SummeryScreenComponent } from './summery-screen/summery-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankDetailsComponent } from './bank-details/bank-details.component';




@NgModule({
  declarations: [
    CreateCaseComponent,
    PlanSelectionComponent,
    EducationDetailsComponent,
    IncomeDetailsComponent,
    KidsDetailsComponent,
    SummeryScreenComponent,
    BankDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DataCollectionModule { }
