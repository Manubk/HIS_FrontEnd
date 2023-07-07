import { ApplicationInitStatus, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlanComponent } from './admin/plan/plan.component';
import { CreatePlanComponent } from './admin/create-plan/create-plan.component';
import { UserComponentComponent } from './admin/user-component/user-component.component';
import { ProfileComponent } from './usermanagement/profile/profile.component';
import { DashboardComponent } from './usermanagement/dashboard/dashboard.component';
import { createApplication } from '@angular/platform-browser';
import { ApplicationComponent } from './application-reg/application/application.component';
import { CreateCaseComponent } from './data-collection/create-case/create-case.component';
import { PlanSelectionComponent } from './data-collection/plan-selection/plan-selection.component';
import { IncomeDetailsComponent } from './data-collection/income-details/income-details.component';
import { EducationDetailsComponent } from './data-collection/education-details/education-details.component';
import { KidsDetailsComponent } from './data-collection/kids-details/kids-details.component';
import { SummeryScreenComponent } from './data-collection/summery-screen/summery-screen.component';
import { EligibilityComponent } from './eligibility-determination/eligibility/eligibility.component';
import { BankDetailsComponent } from './data-collection/bank-details/bank-details.component';
import { EligibilityReportsComponent } from './report/eligibility-reports/eligibility-reports.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'',component: HomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'createplan',component:CreatePlanComponent},
  {path:'user',component:UserComponentComponent},
  {path:'profile',component:ProfileComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'application',component:ApplicationComponent},
  {path:'case',component:CreateCaseComponent},
  {path:'planselection',component:PlanSelectionComponent},
  {path:'income',component:IncomeDetailsComponent},
  {path:'education',component:EducationDetailsComponent},
  {path:'kids',component:KidsDetailsComponent},
  {path:'summery',component:SummeryScreenComponent},
  {path:'eligibility',component:EligibilityComponent},
  {path:'bank',component:BankDetailsComponent},
  {path:'eligibilityReports',component:EligibilityReportsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
