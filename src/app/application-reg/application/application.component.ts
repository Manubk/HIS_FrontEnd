import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AppRegServiceService } from 'src/app/services/app-reg-service.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {

  user:User = new User();
  selectedUser:User = new User();
  users:User[] = [];

  constructor(private appService:AppRegServiceService , private sharedSer:SharedServiceService , private router:Router){}

  ngOnInit(){
    this.getAllAppilcation();
  }


  // Delete Applicant
  deleteApp(accId:number){
    console.log(accId);
  }

  // To Save the Application 
  saveApplicant(userForm:NgForm){
      this.appService.saveApplicant(userForm.value).subscribe((data) => {
        console.log(data);
      });
      this.getAllAppilcation();
  }

  // To Get All the application
  getAllAppilcation(){
    this.appService.getAllApplication().subscribe((data:any) => {
      this.users = data;
      console.log(this.users);
    })
  } 

  onEdit(user:User){
    console.log(user);
    this.selectedUser = user;
  }

  updateApp(){
    this.appService.saveApplicant(this.selectedUser).subscribe((data) => {
      console.log(data);
    })
  }

  //  For applicant use appId fron user
  createCase(user:User){
    this.sharedSer.appId = user.appId;
    this.router.navigateByUrl('/case');
  }
}
