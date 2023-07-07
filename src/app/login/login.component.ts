import { Component } from '@angular/core';
import { LoginModel } from '../model/login-model';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { UsermanagementService } from '../services/usermanagement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService:UsermanagementService){

  }

login:LoginModel = new LoginModel();
val:any ='';


  
  onLogin(loginForm:NgForm){ 
    console.log(loginForm.value )
    this.login.email = loginForm.value.email;
    this.login.pass = loginForm.value.pass;

    this.userService.loginTask(this.login);
  }

  onSubmit(loginForm:NgForm){
    console.log(loginForm.value);
    this.userService.loginTask(loginForm.value);
  }

  getProducts(){
    console.log('componenet');
    this.userService.getProducts();
  }
}
