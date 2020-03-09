import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthHttpService } from '../../services/auth-http.service';
import { AuthCredentials } from '../../models';
import { LocalStorageService } from '../../../../services/local-storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(private authHttpService: AuthHttpService,
                private router: Router) {
    }

    public ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        });
    }

    public login() {
        const credentials: AuthCredentials = this.loginForm.value;
        this.authHttpService.login(credentials).subscribe(({token}) => {
            LocalStorageService.setToken(token);
            this.router.navigate(['']);
        }, err => {
            switch (err.status) {
                case 404:
                    this.loginForm.get('email').setErrors({
                        notInSystem: true
                    });
                    break;
                case 401:
                    this.loginForm.get('password').setErrors({
                        wrongPassword: true
                    });
                    break;
            }
        });
    }

}
