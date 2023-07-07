import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {

user:User = new User();
selectedUser:User = new User();

res:any;

users!:User[];

constructor(private userService:UserServiceService){}

ngOnInit(){
  this.getUsers();
}

//To Save The User
saveUser(user:NgForm){
this.userService.saveUser(user.value).subscribe((data) => {
  this.res=data;
});
// this.getUsers();
}

// To Update User
updateUser(){
 this.userService.updateUser(this.selectedUser).subscribe((data) => {
  this.res =data;
 });
// console.log(user.value);
}

//To Delete User
deleteUser(userId:number){
this.userService.deleteUser(userId).subscribe((data) => {
  this.res = data;
});
console.log(this.res);
}

// deactivate user
deActivateUser(userId:number){

}

// edit User
onEditUser(user:User){
this.selectedUser = user;
console.log(this.selectedUser);
}

// get All Users
getUsers(){
  this.userService.getUsers().subscribe((data:any) => {
    this.users = data;
    console.log(data);
  });
}

// to change the status of user
userStatusChange(userId:number){
  console.log(userId);
  this.userService.userStatusChange(userId).subscribe((data:any) => {
    this.user = data;
  });
}
}
