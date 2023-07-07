import { Component } from '@angular/core';
import { DataSummery } from 'src/app/model/data-summery';
import { DataCollectionServiceService } from 'src/app/services/data-collection-service.service';

@Component({
  selector: 'app-summery-screen',
  templateUrl: './summery-screen.component.html',
  styleUrls: ['./summery-screen.component.css']
})
export class SummeryScreenComponent {

  dataCollection:DataSummery =  new  DataSummery();
  
  constructor(private dataCol:DataCollectionServiceService){}



}
