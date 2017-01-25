import {Routes} from '@angular/router'
import {LoginComponent} from './loginComponent'
import {TweetListComponent} from './tweetListComponent'
import {AuthGuard} from './authGuard'

export const appRoutes  : Routes = [
    {path: 'login',component: LoginComponent},
    {path: 'tweetlist' , component: TweetListComponent,canActivate: [AuthGuard]},
    {path: '', redirectTo: '/tweetlist',pathMatch:'full'}
    ]
