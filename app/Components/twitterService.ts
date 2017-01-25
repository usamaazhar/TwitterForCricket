import {Injectable} from '@angular/core';
import {UserTweet} from './userTweet';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx'
import {Router} from '@angular/router'
@Injectable()
export class TwitterService
{
    private serviceURL : string;
constructor (private http:Http, private route:Router){
    this.serviceURL = 'http://localhost:3647/api/tweet/GetRecentCricketTweets'
} //injecting the Http because its a dependency
getRecentTweets()
{

        if(sessionStorage['token']!=null)
        {
            let tokenString = "";
            if(sessionStorage["tokenType"]!=null)
                {
                     tokenString = sessionStorage["tokenType"];
                     tokenString = tokenString.concat(" ");
                }
            else
                tokenString = "bearer "
            tokenString = tokenString.concat(sessionStorage['token']);
            console.log (tokenString);
            console.log (sessionStorage['token'])
            let headers = new Headers();
            headers.append('Authorization',tokenString);
            return this.http.get(this.serviceURL,{headers:headers}).
            map ((res:Response) => <UserTweet[]>res.json()
            )
            .catch((error:any) => Observable.throw(error.json().error || 'API Error'));
        }
        else
        {
            this.route.navigate(['/login']);
        }
   
}
}