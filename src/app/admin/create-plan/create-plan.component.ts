import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Plan } from 'src/app/model/plan';
import { PlanCategory } from 'src/app/model/plan-category';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { PlanCategoryServiceService } from 'src/app/services/plan-category-service.service';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css']
})
export class CreatePlanComponent {

// Variables
plan:Plan = new Plan();
planss:Plan [] = [];
categories: PlanCategory[] = [] ;

planStatus = new Map<string,string>([
  ['A','Activate'],
  ['D','De Activate']
])

 plans = new Map<number,string>([
  [1,'SNAP'],
  [2,'cap']
])

constructor(private catService:PlanCategoryServiceService , private adminService:AdminServiceService){}

ngOnInit(){
  this.getAllCategoryes();
  this.getPlans();
}

// To save the plan 
savePlan(planForm:NgForm){
  this.plan = planForm.value;
  this.adminService.savePlan(this.plan).subscribe((data:any) => {
    this.planss = data;
  });
}

// Get All The Categoryes
getAllCategoryes(){
this.catService.getAllCategoryes().subscribe( (data:any) => {
 this.categories = data ;

});
}

// Get All teh Plans 
getPlans(){
  console.log(this.planss);
  this.adminService.getPlans().subscribe((data:any) => {
    this.planss = data;
  });
}

// Delete the plans 
deletePlan(planId:number){
this.adminService.deletePlan(planId).subscribe((data:any) => {
  this.planss = data;
});
}

editPlan(plan:Plan){
  this.plan = plan;
}

saveEditedPlan(){
  this.adminService.saveEditedPlas(this.plan).subscribe((data) => {
    console.log(data);
  })
}
}

