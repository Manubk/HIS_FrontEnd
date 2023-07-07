import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan/plan.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';
import { FormsModule } from '@angular/forms';
import { UserComponentComponent } from './user-component/user-component.component';



@NgModule({
  declarations: [
    PlanComponent,
    CreatePlanComponent,
    UserComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
