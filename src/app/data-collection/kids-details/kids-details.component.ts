import { Component } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';
import { KidDetails } from 'src/app/model/kid-details';
import { KidsList } from 'src/app/model/kids-list';
import { DataCollectionServiceService } from 'src/app/services/data-collection-service.service';

@Component({
  selector: 'app-kids-details',
  templateUrl: './kids-details.component.html',
  styleUrls: ['./kids-details.component.css']
})
export class KidsDetailsComponent {

  caseNum!:number;

  kid:KidDetails[] = [];

  kidsList:KidsList = new KidsList();

  constructor(private dataCol:DataCollectionServiceService){}

  kidsDetailForm:FormGroup = new FormGroup({
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


  //To save Kids Details
  saveKids(kidsDetsails:FormGroup){
    this.kidsList.caseNum = 232;
    this.kidsList.kidsList = this.kidslistArray().value;
    this.dataCol.saveKids(this.kidsList).subscribe((data:any) => {
      console.log(data);
   });
  }

}
