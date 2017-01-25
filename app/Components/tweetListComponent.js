"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var twitterService_1 = require('./twitterService');
var core_2 = require('@angular/core');
var TweetListComponent = (function () {
    function TweetListComponent(twitterService) {
        this.twitterService = twitterService;
        this.totalTweets = 10;
        this.errorMessage = null;
        this.isErr = false;
        console.log(this.isErr);
    }
    TweetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.isErr);
        this.twitterService.getRecentTweets()
            .subscribe(function (tweets) {
            _this.tweetList = tweets;
            _this.isErr = false;
        }, function (err) {
            _this.errorMessage = err;
            console.log(err);
            _this.isErr = true;
        });
    };
    TweetListComponent = __decorate([
        core_1.Component({
            selector: 'tweetList',
            templateUrl: './app/HTML/usertweets.html',
            styleUrls: ['./app/Css/usertweets.css'],
            providers: [twitterService_1.TwitterService]
        }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [twitterService_1.TwitterService])
    ], TweetListComponent);
    return TweetListComponent;
}());
exports.TweetListComponent = TweetListComponent;
//# sourceMappingURL=tweetListComponent.js.map