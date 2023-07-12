import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSummery } from 'src/app/model/data-summery';
import { DataCollectionServiceService } from 'src/app/services/data-collection-service.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-summery-screen',
  templateUrl: './summery-screen.component.html',
  styleUrls: ['./summery-screen.component.css']
})
export class SummeryScreenComponent {

  caseNum!:number;

  dataCollection:DataSummery =  new  DataSummery();
  
  constructor(private dataCol:DataCollectionServiceService , private sharedSer:SharedServiceService , 
    private router:Router){}
 
    ngOnInit(){
      console.log('on summery starting')
      this.dataCollection = this.sharedSer.summery;
      console.log(this.dataCollection);
    }


    //This will get the data summery of Applicent based on caseNum
    getSummeryByCaseNum(){
      console.log(this.caseNum);
      this.dataCol.getSummery(this.caseNum).subscribe((data:any) => {
        console.log(data);

        this.dataCollection = data;

        console.log(this.dataCollection);
      })
    }

    onSubmit(){
      
    }

}
