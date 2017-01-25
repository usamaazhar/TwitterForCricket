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
var platform_browser_1 = require('@angular/platform-browser');
var tweetListComponent_1 = require('./Components/tweetListComponent');
var http_1 = require('@angular/http');
var routes_1 = require('./Components/routes');
var loginComponent_1 = require('./Components/loginComponent');
var router_1 = require('@angular/router');
var mainComponent_1 = require('./Components/mainComponent');
var forms_1 = require('@angular/forms');
var authGuard_1 = require('./Components/authGuard');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes)],
            declarations: [loginComponent_1.LoginComponent, mainComponent_1.AngularRootComponent, tweetListComponent_1.TweetListComponent],
            bootstrap: [mainComponent_1.AngularRootComponent],
            providers: [authGuard_1.AuthGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map