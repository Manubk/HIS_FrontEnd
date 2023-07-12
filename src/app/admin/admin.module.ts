import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePlanComponent } from './create-plan/create-plan.component';
import { FormsModule } from '@angular/forms';
import { UserComponentComponent } from './user-component/user-component.component';
import { UtilityModule } from '../utility/utility.module';



@NgModule({
  declarations: [
    CreatePlanComponent,
    UserComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule
  ]
})
export class AdminModule { }
