import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/model/plan';
import { PlanSelection } from 'src/app/model/plan-selection';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { DataCollectionServiceService } from 'src/app/services/data-collection-service.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-plan-selection',
  templateUrl: './plan-selection.component.html',
  styleUrls: ['./plan-selection.component.css']
})
export class PlanSelectionComponent {

  caseNum!:number;

  plans:Plan[] =[];

  planList!:Map<number,string>;

  planselection:PlanSelection = new PlanSelection();

  constructor(private dataColService:DataCollectionServiceService,private adminService:AdminServiceService,
   private shareSer:SharedServiceService, private router:Router){}

  ngOnInit(){
   this.getPlanList();

   this.planselection.caseNum = this.shareSer.caseNum;
  }

  // This will get All the plans 
  getPlanList(){
    this.dataColService.getPlanList().subscribe((data:any) => {
      this.planList = data;
    });
  }

  savePlanSelection(){
    this.dataColService.savePlanSelection(this.planselection).subscribe((data:any)=> {
      this.caseNum = data;
    });
    this.shareSer.caseNum = this.planselection.caseNum;
    this.router.navigateByUrl('/income');
  }
}
