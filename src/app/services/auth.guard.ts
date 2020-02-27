import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            console.log(localStorage.getItem('token'));
            if (localStorage.getItem('token')) {
                resolve(true);
            } else {
                this.router.navigate(['auth', 'login']);
                resolve(false);
            }
        });
    }

}
