import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from './services/event-handler.service';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public errorIsShown: BehaviorSubject<boolean>;
    public errorMessage: BehaviorSubject<string>;
    public spinnerIsShown: boolean;

    constructor(private eventHandler: EventHandlerService) {
    }

    public ngOnInit(): void {
        this.eventHandler.isSpinnerDisplayed.subscribe(value => {
            const timeout = setTimeout(() => {
                this.spinnerIsShown = value;
            }, 0);
        });
        this.errorIsShown = this.eventHandler.isErrorDisplayed;
        this.errorMessage = this.eventHandler.errorMessage;

        this.eventHandler.isErrorDisplayed.subscribe(state => {
            if (state) {
                const timeout = setTimeout(() => {
                    this.eventHandler.hideError();
                }, 1500);
            }
        });
    }
}
