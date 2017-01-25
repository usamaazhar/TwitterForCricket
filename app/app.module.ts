import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TweetListComponent} from './Components/tweetListComponent'
import { HttpModule } from '@angular/http';
import {appRoutes} from './Components/routes'
import {LoginComponent} from './Components/loginComponent'
import {RouterModule} from '@angular/router'
import {AngularRootComponent} from './Components/mainComponent'
import {FormsModule} from '@angular/forms'
import {AuthGuard} from './Components/authGuard'
@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule,
  RouterModule.forRoot(appRoutes) ],
  declarations: [  LoginComponent,AngularRootComponent,TweetListComponent],
  bootstrap:    [ AngularRootComponent ],
  providers: [AuthGuard]
})
export class AppModule { }
