import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { EventHandlerService } from './event-handler.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router: Router, private eventHandler: EventHandlerService) {
    }

    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.eventHandler.showSpinner();
        console.log('shown');
        const token = LocalStorageService.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }
        return next.handle(request).pipe(
            map(res => {
                if (res instanceof HttpResponse) {
                    this.eventHandler.hideSpinner();
                }
                return res;
            }),
            catchError(err => this.handleError(err))
        )
    }

    private handleError(err: HttpErrorResponse): Observable<HttpEvent<unknown>> {
        if (err.status === 401) {
            LocalStorageService.clearToken();
            this.router.navigate(['auth', 'login']);
        } else {
            this.eventHandler.handleError(err);
        }
        return throwError(err);
    }
}
