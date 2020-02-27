import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            console.log(localStorage.getItem('token'));
            if (LocalStorageService.getToken()) {
                resolve(true);
            } else {
                this.router.navigate(['auth', 'login']);
                resolve(false);
            }
        });
    }

}
