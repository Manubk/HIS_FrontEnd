import { Injectable, Optional } from '@angular/core';
import { LoginModel } from '../model/login-model';
import { HttpClient, HttpStatusCode} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})



export class UsermanagementService {
  loginMode:LoginModel | undefined ;
  baseUrl:string = '';
  baseUrl1:string;
  baseUrl2:string;
  constructor(private http: HttpClient) { 
    this.baseUrl="http://localhost:9001/login";
    this.baseUrl1 ="http://localhost:3000";
    this.baseUrl2 ="http://localhost:9003"
  }

  loginTask(login: LoginModel){
    // return this.http.post(this.baseUrl,login.value);
    this.http.post(this.baseUrl,login).subscribe((res) => {
      console.log(res);
    })
  }

  getProducts(){
    this.http.get(this.baseUrl2+'/plans').subscribe((res) => {
      console.log(res.valueOf().toString)
    });
  }
}
