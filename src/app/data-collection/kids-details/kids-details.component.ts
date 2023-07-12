import { Component } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSummery } from 'src/app/model/data-summery';
import { KidDetails } from 'src/app/model/kid-details';
import { KidsList } from 'src/app/model/kids-list';
import { DataCollectionServiceService } from 'src/app/services/data-collection-service.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-kids-details',
  templateUrl: './kids-details.component.html',
  styleUrls: ['./kids-details.component.css']
})
export class KidsDetailsComponent {

  caseNum!:number;

  childrens:KidDetails[] = [];

  childrendPerCase:KidsList = new KidsList();

  symmary!:DataSummery;

  constructor(private dataCol:DataCollectionServiceService,private sharedSer:SharedServiceService,private router:Router){}

  ngOnInit(){
    this.childrendPerCase.caseNum = this.sharedSer.caseNum;
    console.log('kids '+this.childrendPerCase.caseNum);
  }

  kidsDetailForm:FormGroup = new FormGroup({
    caseNumForm : new FormControl(this.sharedSer.caseNum),
    kidsList:new FormArray([this.getKidFields()])
  });

  getKidFields():FormGroup{
    return new FormGroup({
      childrenDob:new FormControl(''),
      ssn:new FormControl('')
    });
  }

  kidslistArray(){
    return this.kidsDetailForm.get('kidsList') as FormArray;
  }

  addKid(){
    this.kidslistArray().push(this.getKidFields());
  }

  removeKid(i:number){
    this.kidslistArray().removeAt(i);
  }

  getCaseNum(){
   return this.kidsDetailForm.get('caseNumForm') as FormControl;
  }


  //To save Kids Details
  saveKids(kidsDetsails:FormGroup){
    this.childrendPerCase.caseNum = this.getCaseNum().value;
    this.childrendPerCase.childrens = this.kidslistArray().value;
    console.log(this.childrendPerCase);
    this.dataCol.saveKids(this.childrendPerCase).subscribe((data:any) => {
      console.log(data);
      this.symmary = data.value
      console.log('after saving kids');
      console.log(this.symmary);
      this.sharedSer.summery = this.symmary;
      this.router.navigateByUrl('summery');
   });

  }

}
