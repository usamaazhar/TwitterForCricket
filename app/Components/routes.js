"use strict";
var loginComponent_1 = require('./loginComponent');
var tweetListComponent_1 = require('./tweetListComponent');
var authGuard_1 = require('./authGuard');
exports.appRoutes = [
    { path: 'login', component: loginComponent_1.LoginComponent },
    { path: 'tweetlist', component: tweetListComponent_1.TweetListComponent, canActivate: [authGuard_1.AuthGuard] },
    { path: '', redirectTo: '/tweetlist', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map