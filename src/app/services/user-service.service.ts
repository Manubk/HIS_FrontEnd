import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl:string='http://localhost:9000/';
  constructor(private http:HttpClient) { }

  
//To Save The User
saveUser(user:User){
  return this.http.post(this.baseUrl+'user',user);
}

// To Update User
updateUser(user:User){
  console.log(user);
  return this.http.put(this.baseUrl+'user',user);
  // console.log(user);
}

//To Delete User
deleteUser(userId:number){
  return this.http.delete(this.baseUrl+'user/'+userId);
}

// deactivate user
deActivateUser(userId:number){

}

// edit User
editUser(){

}

//Get All Users
getUsers(){
 return this.http.get(this.baseUrl+'users');
}

// Changing the User Status from active or deactive
userStatusChange(userId:number){
  return this.http.put(this.baseUrl+'user/sw/'+userId,undefined);
}

}
