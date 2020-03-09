import { Component } from '@angular/core';
import { NavLink } from '../../../../models';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
    public navLinks: NavLink[] = [
        {
            path: 'login',
            label: 'Войти в систему'
        },
        {
            path: 'register',
            label: 'Зарегстирироваться',
            disabled: true
        }
    ];

}
