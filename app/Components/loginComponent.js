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
var loginService_1 = require('./loginService');
// import {Injectable} from '@angular/core';
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.errorMessage = null;
        this.isErr = false;
        console.log(this.isErr);
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.isErr);
        this.loginService.loginUser(this.userName, this.password)
            .subscribe(function (tokenResponse) {
            _this.tokenResponse = tokenResponse;
            sessionStorage.setItem('token', tokenResponse.access_token);
            sessionStorage.setItem('expiryDate', (tokenResponse.expiryDate));
            sessionStorage.setItem('tokenType', (tokenResponse.token_type));
            _this.router.navigate(['/']);
            _this.isErr = false;
        }, function (err) {
            _this.errorMessage = err;
            console.log(err);
            _this.isErr = true;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'user-login',
            templateUrl: './app/HTML/login.html',
            styleUrls: ['./app/Css/login.css'],
            providers: [loginService_1.LoginService]
        }), 
        __metadata('design:paramtypes', [loginService_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=loginComponent.js.map