import {Component} from '@angular/core'
import {UserTweet} from './userTweet'
import {TwitterService} from './twitterService';
import {Injectable} from '@angular/core';
@Component({
    selector    : 'tweetList',
    templateUrl : './app/HTML/usertweets.html',
    styleUrls   : ['./app/Css/usertweets.css'],
    providers: [TwitterService]
})

@Injectable()
export class TweetListComponent
{
errorMessage : string;
isErr : Boolean; 
private tweetList : UserTweet[];
constructor (private twitterService:TwitterService){
    this.totalTweets = 10;
    this.errorMessage = null;
    this.isErr = false;
    console.log(this.isErr);
}
private totalTweets: number;
ngOnInit()
{
    console.log(this.isErr);
    this.twitterService.getRecentTweets()
    .subscribe(tweets => {this.tweetList = tweets
        this.isErr = false;
    },err => {
        this.errorMessage = err;
        console.log(err)
        this.isErr = true;
    });
    
}

}