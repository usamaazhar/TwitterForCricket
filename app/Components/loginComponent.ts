import {Component} from '@angular/core'
import {LoginData} from './loginData'
import {LoginService} from './loginService';
// import {Injectable} from '@angular/core';
import {Router} from '@angular/router'
import {LoginResponse} from './loginResponse';
@Component({
    selector    : 'user-login',
    templateUrl : './app/HTML/login.html',
    styleUrls   : ['./app/Css/login.css'],
    providers: [LoginService]
})
export class LoginComponent
{
 
errorMessage : string;
isErr : Boolean; 
private tokenResponse : LoginResponse;
private userName : string;
private password : string;
constructor (private loginService:LoginService , private router : Router){
    this.errorMessage = null;
    this.isErr = false;
    console.log(this.isErr);
}
private totalTweets: number;
onSubmit()
{
    console.log(this.isErr);
    this.loginService.loginUser(this.userName , this.password)
    .subscribe(tokenResponse => {this.tokenResponse = tokenResponse
         sessionStorage.setItem('token', tokenResponse.access_token);
        sessionStorage.setItem('expiryDate',(tokenResponse.expiryDate));
        sessionStorage.setItem('tokenType',(tokenResponse.token_type));
        this.router.navigate(['/']);
        this.isErr = false;
        
       
    },err => {
        this.errorMessage = err;
        console.log(err)
        this.isErr = true;
    });
    
}

}