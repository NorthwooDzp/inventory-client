import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventHandlerService {
    public isSpinnerDisplayed: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public isErrorDisplayed: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public errorMessage: BehaviorSubject<string> = new BehaviorSubject('');

    public showSpinner(): void {
        this.isSpinnerDisplayed.next(true);
    }

    public hideSpinner(): void {
        this.isSpinnerDisplayed.next(false);
    }

    public showError(message: string): void {
        this.hideSpinner();
        this.isErrorDisplayed.next(true);
        this.errorMessage.next(message);
    }

    public hideError(): void {
        this.errorMessage.next('');
        this.isErrorDisplayed.next(false);
    }

    public handleError(e: any): Observable<any> {
        console.log(e);
        this.showError(e.error.message);
        return throwError(e);
    }

}
