import { Component } from '@angular/core';
import { NavLink } from '../../models';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
    public navLinks: NavLink[] = [
        {
            path: 'login',
            label: 'Sign In'
        },
        {
            path: 'register',
            label: 'Sign Up'
        }
    ];

}
