import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router: Router) {
    }

    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = LocalStorageService.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }
        return next.handle(request).pipe(
            catchError(err => this.handleError(err))
        );
    }

    private handleError(err: HttpErrorResponse): Observable<HttpEvent<unknown>> {
        if (err.status === 401) {
            LocalStorageService.clearToken();
            this.router.navigate(['auth', 'login']);
        }
        return throwError(err);
    }
}
