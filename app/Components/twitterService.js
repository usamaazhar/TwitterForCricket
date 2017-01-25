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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Rx_1 = require('rxjs/Rx');
var router_1 = require('@angular/router');
var TwitterService = (function () {
    function TwitterService(http, route) {
        this.http = http;
        this.route = route;
        this.serviceURL = 'http://localhost:3647/api/tweet/GetRecentCricketTweets';
    } //injecting the Http because its a dependency
    TwitterService.prototype.getRecentTweets = function () {
        if (sessionStorage['token'] != null) {
            var tokenString = "";
            if (sessionStorage["tokenType"] != null) {
                tokenString = sessionStorage["tokenType"];
                tokenString = tokenString.concat(" ");
            }
            else
                tokenString = "bearer ";
            tokenString = tokenString.concat(sessionStorage['token']);
            console.log(tokenString);
            console.log(sessionStorage['token']);
            var headers = new http_1.Headers();
            headers.append('Authorization', tokenString);
            return this.http.get(this.serviceURL, { headers: headers }).
                map(function (res) { return res.json(); })
                .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'API Error'); });
        }
        else {
            this.route.navigate(['/login']);
        }
    };
    TwitterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], TwitterService);
    return TwitterService;
}());
exports.TwitterService = TwitterService;
//# sourceMappingURL=twitterService.js.map