import { Component } from '@angular/core';
import { Plan } from 'src/app/model/plan';
import { PlanSelection } from 'src/app/model/plan-selection';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { DataCollectionServiceService } from 'src/app/services/data-collection-service.service';

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

  constructor(private dataColService:DataCollectionServiceService,private adminService:AdminServiceService){}

  ngOnInit(){
   this.getPlanList();
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
  }
}
