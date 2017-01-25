import {NgModule,Component} from '@angular/core'
@Component({
    selector: 'AngularRootComponent',
    template: `
        <h2 class="center-block Header well">Cricketers on twitter </h2>
        <router-outlet></router-outlet>
    `,
       styleUrls   : ['./app/Css/usertweets.css']
})

export class AngularRootComponent
{

}