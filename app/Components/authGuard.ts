import {CanActivate,Router} from '@angular/router'
import {Injectable} from '@angular/core'

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor (private router : Router)
    {

    }
    canActivate()
    {
        if(sessionStorage['token']!=null)
        {
            if(sessionStorage['expiryDate']!=null)
            {
                if(this.compare(new Date(sessionStorage['expiryDate']),new Date()))
                {

                    console.log('Authorized')
                    return true;

                }
            }
        }
        this.router.navigate(['/login'])
        return false;

    }

    compare(dateTimeA:Date, dateTimeB:Date) : Boolean {
    if (dateTimeA.getTime() > dateTimeB.getTime() ) return true;
    else
    return false;
}
}