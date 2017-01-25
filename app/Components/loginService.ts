import {Injectable} from '@angular/core';
import {LoginData} from './loginData';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class LoginService
{
    private serviceURL : string;
constructor (private http:Http){
    this.serviceURL = 'http://localhost:3647/api/Account/Login'
} //injecting the Http because its a dependency
loginUser(userName: string , password:string)
{
     let creds = JSON.stringify({ Email: userName, password: password });
       let headers = new Headers();
  headers.append('Content-Type', 'application/json');
    return this.http.post(this.serviceURL,creds,{headers:headers}).
    map ((res:Response) => res.json()
    )
    .catch((error:any) => Observable.throw(error.json().error || 'Unable to login'));
}
}